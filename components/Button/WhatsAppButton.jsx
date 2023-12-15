import React from 'react'
import { Button } from '@chakra-ui/react'
import { MdOutlineWhatsApp } from 'react-icons/md';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    // You can use either wa.me or api.whatsapp.com
    const baseUrl = 'https://wa.me';
    // const baseUrl = 'https://api.whatsapp.com'; // Uncomment this line to use api.whatsapp.com

    // Construct the WhatsApp link with the phone number and optional message
    const whatsappLink = `${baseUrl}/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to the WhatsApp link
    window.open(whatsappLink, '_blank');
  };

  return (
    <Button 
      size="md" 
      colorScheme="teal" 
      // leftIcon={<MdOutlineWhatsApp />} 
      onClick={handleClick}
      variant="solid"
    >
      Hubungi Lewat WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
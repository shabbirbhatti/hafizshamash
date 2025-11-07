import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ message = "Hello! I'd like to connect.", className }: WhatsAppButtonProps) => {
  const phoneNumber = '819064905870';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button
      asChild
      variant="secondary"
      className={className}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </Button>
  );
};

export default WhatsAppButton;

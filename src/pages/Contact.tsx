import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: language === 'en' ? 'Invalid Email' : language === 'ur' ? 'غلط ای میل' : '無効なメール',
        description: language === 'en' ? 'Please enter a valid email address' : language === 'ur' ? 'براہ کرم درست ای میل درج کریں' : '有効なメールアドレスを入力してください',
        variant: 'destructive',
      });
      return;
    }

    const message = `Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/819064905870?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: language === 'en' ? 'Success!' : language === 'ur' ? 'کامیابی!' : '成功！',
      description: language === 'en' ? 'Redirecting to WhatsApp' : language === 'ur' ? 'واٹس ایپ پر منتقل ہو رہا ہے' : 'WhatsAppにリダイレクト中',
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-primary animate-fadeIn ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('contactTitle')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en'
              ? "We're here to help. Reach out for any inquiries or support"
              : language === 'ur'
              ? 'ہم مدد کے لیے حاضر ہیں۔ کسی بھی پوچھ گچھ یا مدد کے لیے رابطہ کریں'
              : 'お手伝いさせていただきます。お問い合わせやサポートについてご連絡ください'}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-slideInLeft">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                        {language === 'en' ? 'WhatsApp' : language === 'ur' ? 'واٹس ایپ' : 'WhatsApp'}
                      </h3>
                      <p className="text-muted-foreground">+81 90-6490-5870</p>
                      <WhatsAppButton className="mt-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                        {language === 'en' ? 'Social Media' : language === 'ur' ? 'سوشل میڈیا' : 'ソーシャルメディア'}
                      </h3>
                      <div className="space-y-2">
                        <p>
                          <a
                            href="https://www.facebook.com/meharshamas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Facebook: Hafiz Mehar Shamas
                          </a>
                        </p>
                        <p>
                          <a
                            href="https://www.youtube.com/@VoiceofJapanOfficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            YouTube: Voice of Japan
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className={`font-semibold text-lg mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                        {language === 'en' ? 'Locations' : language === 'ur' ? 'مقامات' : '場所'}
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>
                          {language === 'en' ? '🇵🇰 Sialkot, Pakistan' : language === 'ur' ? '🇵🇰 سیالکوٹ، پاکستان' : '🇵🇰 シアルコート、パキスタン'}
                        </p>
                        <p>
                          {language === 'en' ? '🇯🇵 Tokyo, Japan' : language === 'ur' ? '🇯🇵 ٹوکیو، جاپان' : '🇯🇵 東京、日本'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slideInRight">
              <Card>
                <CardContent className="p-8">
                  <h2 className={`text-2xl font-bold mb-6 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                    {t('sendMessage')}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                        {t('name')} *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                        {t('email')} *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                        {t('message')} *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        required
                        maxLength={1000}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      {t('sendMessage')}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {language === 'en'
                        ? 'Your message will be sent via WhatsApp'
                        : language === 'ur'
                        ? 'آپ کا پیغام واٹس ایپ کے ذریعے بھیجا جائے گا'
                        : 'メッセージはWhatsAppを介して送信されます'}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className={`text-2xl font-bold mb-4 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                {language === 'en' ? 'Operating Between Two Great Nations' : language === 'ur' ? 'دو عظیم قوموں کے درمیان کام کر رہے ہیں' : '二つの偉大な国の間で活動'}
              </h3>
              <p className={`text-muted-foreground mb-6 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                {language === 'en'
                  ? 'Serving communities in both Pakistan and Japan with dedication'
                  : language === 'ur'
                  ? 'لگن کے ساتھ پاکستان اور جاپان دونوں میں کمیونٹیز کی خدمت'
                  : 'パキスタンと日本の両方のコミュニティに献身的にサービスを提供'}
              </p>
              <div className="flex justify-center gap-8 text-4xl">
                <div>🇵🇰</div>
                <div>↔️</div>
                <div>🇯🇵</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Car, CheckCircle, Shield, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import useEmblaCarousel from 'embla-carousel-react';

const CarBusiness = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    carModel: '',
    message: '',
  });

  const carImages = [
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: '2020',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Honda',
      model: 'Civic',
      year: '2019',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Nissan',
      model: 'Note',
      year: '2018',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Suzuki',
      model: 'Swift',
      year: '2021',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Mazda',
      model: 'CX-5',
      year: '2020',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Toyota',
      model: 'Prius',
      year: '2019',
      price: 'Contact for Price',
      image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&auto=format&fit=crop',
    },
  ];

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'm interested in:\nName: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nCar Model: ${formData.carModel}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/819064905870?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: language === 'en' ? 'Redirecting to WhatsApp' : language === 'ur' ? 'واٹس ایپ پر منتقل ہو رہا ہے' : 'WhatsAppにリダイレクト中',
      description: language === 'en' ? 'Opening WhatsApp with your inquiry' : language === 'ur' ? 'آپ کی پوچھ گچھ کے ساتھ واٹس ایپ کھول رہا ہے' : 'お問い合わせ内容でWhatsAppを開いています',
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
              <Car className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fadeIn ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('carTitle')}
          </h1>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('trustQuality')}
          </p>
          <WhatsAppButton className="text-lg" message="I'm interested in purchasing a Japanese used car" />
        </div>
      </section>

      {/* Car Carousel */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Featured Vehicles' : language === 'ur' ? 'نمایاں گاڑیاں' : '注目の車両'}
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {carImages.map((car, index) => (
                  <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                      <div className="relative overflow-hidden">
                        <img
                          src={car.image}
                          alt={`${car.brand} ${car.model}`}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                          {car.year}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{car.brand} {car.model}</h3>
                        <p className="text-muted-foreground mb-4">{car.price}</p>
                        <Button 
                          className="w-full"
                          onClick={() => {
                            const message = `I'm interested in ${car.brand} ${car.model} ${car.year}`;
                            window.open(`https://wa.me/819064905870?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                        >
                          {language === 'en' ? 'Inquire Now' : language === 'ur' ? 'ابھی پوچھیں' : '今すぐお問い合わせ'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-background/95 backdrop-blur-sm z-10 hidden sm:flex"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg bg-background/95 backdrop-blur-sm z-10 hidden sm:flex"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8 sm:hidden">
            <Button variant="outline" size="sm" onClick={scrollPrev}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              {language === 'en' ? 'Previous' : language === 'ur' ? 'پچھلا' : '前へ'}
            </Button>
            <Button variant="outline" size="sm" onClick={scrollNext}>
              {language === 'en' ? 'Next' : language === 'ur' ? 'اگلا' : '次へ'}
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Why Choose Us?' : language === 'ur' ? 'ہمیں کیوں منتخب کریں؟' : 'なぜ私たちを選ぶのか？'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fadeIn hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Quality Assurance' : language === 'ur' ? 'معیار کی ضمانت' : '品質保証'}
                </h3>
                <p className={`text-muted-foreground leading-relaxed ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Every car undergoes thorough inspection and quality checks' : language === 'ur' ? 'ہر گاڑی کی مکمل جانچ اور معیار کی جانچ کی جاتی ہے' : 'すべての車両は徹底的な検査と品質チェックを受けます'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn hover:shadow-xl transition-all hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Trusted Service' : language === 'ur' ? 'قابل اعتماد سروس' : '信頼できるサービス'}
                </h3>
                <p className={`text-muted-foreground leading-relaxed ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Years of experience serving customers worldwide' : language === 'ur' ? 'دنیا بھر میں صارفین کی خدمت کرنے کا برسوں کا تجربہ' : '世界中のお客様にサービスを提供してきた長年の経験'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn hover:shadow-xl transition-all hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Global Export' : language === 'ur' ? 'عالمی برآمد' : 'グローバル輸出'}
                </h3>
                <p className={`text-muted-foreground leading-relaxed ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Safe and reliable shipping worldwide' : language === 'ur' ? 'دنیا بھر میں محفوظ اور قابل اعتماد شپنگ' : '世界各地への安全で信頼性の高い配送'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('inquireNow')}
            </h2>
            <p className={`text-center text-muted-foreground mb-12 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'Send us your requirements and we will get back to you via WhatsApp' : language === 'ur' ? 'ہمیں اپنی ضروریات بھیجیں اور ہم واٹس ایپ کے ذریعے آپ سے رابطہ کریں گے' : 'お問い合わせ内容をお送りください。WhatsAppでご連絡いたします'}
            </p>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                      {t('name')}
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                      WhatsApp
                    </label>
                    <Input
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+92xxxxxxxxxx"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                      {language === 'en' ? 'Car Model/Brand' : language === 'ur' ? 'کار ماڈل/برانڈ' : '車のモデル/ブランド'}
                    </label>
                    <Input
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      placeholder="e.g., Toyota Corolla 2018"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                      {t('message')}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base" size="lg">
                    {t('inquireNow')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarBusiness;

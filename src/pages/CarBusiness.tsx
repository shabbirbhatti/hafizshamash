import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Car, Truck, TruckIcon as Suv, CarFront, Bus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
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

  const heroSlides = [
    {
      title: language === 'en' ? 'Find Your Dream' : language === 'ur' ? 'اپنے خواب کی تلاش کریں' : 'あなたの夢を見つける',
      subtitle: language === 'en' ? 'Japanese Cars' : language === 'ur' ? 'جاپانی کاریں' : '日本の車',
      badge: language === 'en' ? 'Big Saving up to 10%' : language === 'ur' ? '10% تک بڑی بچت' : '最大10%の大幅節約',
      image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1920&auto=format&fit=crop',
    },
    {
      title: language === 'en' ? 'Quality Assured' : language === 'ur' ? 'معیار کی یقین دہانی' : '品質保証',
      subtitle: language === 'en' ? 'Japanese Used Cars' : language === 'ur' ? 'جاپانی استعمال شدہ کاریں' : '日本の中古車',
      badge: language === 'en' ? 'Trusted Worldwide' : language === 'ur' ? 'دنیا بھر میں قابل اعتماد' : '世界中で信頼されています',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1920&auto=format&fit=crop',
    },
    {
      title: language === 'en' ? 'Global Export' : language === 'ur' ? 'عالمی برآمد' : 'グローバル輸出',
      subtitle: language === 'en' ? 'To Pakistan & Beyond' : language === 'ur' ? 'پاکستان اور اس سے آگے' : 'パキスタンとその先へ',
      badge: language === 'en' ? 'Safe & Reliable' : language === 'ur' ? 'محفوظ اور قابل اعتماد' : '安全で信頼できる',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1920&auto=format&fit=crop',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const vehicleTypes = [
    { name: language === 'en' ? 'Sedan' : language === 'ur' ? 'سیڈان' : 'セダン', icon: Car },
    { name: language === 'en' ? 'SUV' : language === 'ur' ? 'ایس یو وی' : 'SUV', icon: Suv },
    { name: language === 'en' ? 'Pickup' : language === 'ur' ? 'پک اپ' : 'ピックアップ', icon: Truck },
    { name: language === 'en' ? 'Van' : language === 'ur' ? 'وین' : 'バン', icon: Bus },
    { name: language === 'en' ? 'Coupe' : language === 'ur' ? 'کوپے' : 'クーペ', icon: CarFront },
  ];

  const carImages = [
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: '2020',
      price: '$12,500',
      mileage: '45,000 km',
      transmission: 'Auto',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Honda',
      model: 'Civic',
      year: '2019',
      price: '$11,800',
      mileage: '52,000 km',
      transmission: 'Auto',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Nissan',
      model: 'Note',
      year: '2018',
      price: '$9,200',
      mileage: '38,000 km',
      transmission: 'Auto',
      image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Suzuki',
      model: 'Swift',
      year: '2021',
      price: '$10,500',
      mileage: '28,000 km',
      transmission: 'Manual',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Mazda',
      model: 'CX-5',
      year: '2020',
      price: '$18,900',
      mileage: '35,000 km',
      transmission: 'Auto',
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop',
    },
    {
      brand: 'Toyota',
      model: 'Prius',
      year: '2019',
      price: '$13,400',
      mileage: '42,000 km',
      transmission: 'Auto',
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
    <div className="min-h-screen pt-16">
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <p className={`text-primary text-lg md:text-xl mb-4 font-semibold ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                    {slide.title}
                  </p>
                  <h1 className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                    {slide.subtitle}
                  </h1>
                  <div className="inline-block bg-primary text-white px-6 py-3 text-lg font-bold mb-8">
                    {slide.badge}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      size="lg" 
                      className="bg-white text-foreground hover:bg-white/90"
                      onClick={() => window.open(`https://wa.me/819064905870?text=${encodeURIComponent("I'm interested in Japanese used cars")}`, '_blank')}
                    >
                      {language === 'en' ? 'SEE DETAILS' : language === 'ur' ? 'تفصیلات دیکھیں' : '詳細を見る'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Vehicle Type Selector */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white text-center py-4 mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? FIND IT HERE' : 
               language === 'ur' ? 'یقین نہیں ہے کہ آپ کون سی گاڑی تلاش کر رہے ہیں؟ یہاں تلاش کریں' : 
               'どの車両をお探しかわかりませんか？ ここで見つけてください'}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className={`text-center text-muted-foreground mb-8 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'SELECT VEHICLE TYPE' : language === 'ur' ? 'گاڑی کی قسم منتخب کریں' : '車両タイプを選択'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {vehicleTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card
                    key={index}
                    className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 group"
                    onClick={() => {
                      const message = `I'm looking for a ${type.name}`;
                      window.open(`https://wa.me/819064905870?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="bg-muted group-hover:bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center transition-colors">
                          <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <p className={`font-semibold ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                        {type.name}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stock List */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Our Stock List' : language === 'ur' ? 'ہماری اسٹاک لسٹ' : '在庫リスト'}
          </h2>
          <p className={`text-center text-muted-foreground mb-12 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Browse our latest collection of quality Japanese used cars' : 
             language === 'ur' ? 'معیاری جاپانی استعمال شدہ کاروں کے ہمارے تازہ ترین مجموعہ کو دیکھیں' : 
             '品質の高い日本の中古車の最新コレクションをご覧ください'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {carImages.map((car, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-sm font-bold rounded">
                    {car.year}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold mb-3">{car.brand} {car.model}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'en' ? 'Price' : language === 'ur' ? 'قیمت' : '価格'}:</span>
                      <span className="font-bold text-primary">{car.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'en' ? 'Mileage' : language === 'ur' ? 'مائلیج' : '走行距離'}:</span>
                      <span className="font-semibold">{car.mileage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{language === 'en' ? 'Transmission' : language === 'ur' ? 'ٹرانسمیشن' : 'トランスミッション'}:</span>
                      <span className="font-semibold">{car.transmission}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => {
                      const message = `I'm interested in ${car.brand} ${car.model} ${car.year} - ${car.price}`;
                      window.open(`https://wa.me/819064905870?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    {language === 'en' ? 'INQUIRE NOW' : language === 'ur' ? 'ابھی پوچھیں' : 'お問い合わせ'}
                  </Button>
                </CardContent>
              </Card>
            ))}
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

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Car, CheckCircle, Shield, Globe } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const CarBusiness = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    carModel: '',
    message: '',
  });

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
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Car className="h-16 w-16 mx-auto text-primary" />
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-primary animate-fadeIn ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('carTitle')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('trustQuality')}
          </p>
          <WhatsAppButton className="text-lg px-8 py-6" message="I'm interested in purchasing a Japanese used car" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Why Choose Us?' : language === 'ur' ? 'ہمیں کیوں منتخب کریں؟' : 'なぜ私たちを選ぶのか？'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fadeIn">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className={`font-semibold text-xl mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Quality Assurance' : language === 'ur' ? 'معیار کی ضمانت' : '品質保証'}
                </h3>
                <p className={language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}>
                  {language === 'en'
                    ? 'Every car undergoes thorough inspection and quality checks'
                    : language === 'ur'
                    ? 'ہر گاڑی کی مکمل جانچ اور معیار کی جانچ کی جاتی ہے'
                    : 'すべての車両は徹底的な検査と品質チェックを受けます'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className={`font-semibold text-xl mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Trusted Service' : language === 'ur' ? 'قابل اعتماد سروس' : '信頼できるサービス'}
                </h3>
                <p className={language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}>
                  {language === 'en'
                    ? 'Years of experience serving Pakistani customers worldwide'
                    : language === 'ur'
                    ? 'دنیا بھر میں پاکستانی صارفین کی خدمت کرنے کا برسوں کا تجربہ'
                    : '世界中のパキスタンのお客様にサービスを提供してきた長年の経験'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className={`font-semibold text-xl mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Global Export' : language === 'ur' ? 'عالمی برآمد' : 'グローバル輸出'}
                </h3>
                <p className={language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}>
                  {language === 'en'
                    ? 'Safe and reliable shipping to Pakistan and worldwide'
                    : language === 'ur'
                    ? 'پاکستان اور دنیا بھر میں محفوظ اور قابل اعتماد شپنگ'
                    : 'パキスタンおよび世界各地への安全で信頼性の高い配送'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Models */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Popular Models' : language === 'ur' ? 'مقبول ماڈلز' : '人気モデル'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Toyota', 'Honda', 'Nissan', 'Suzuki', 'Mazda', 'Mitsubishi'].map((brand, index) => (
              <Card key={brand} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{brand}</h3>
                  <p className={`text-sm text-muted-foreground ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                    {language === 'en'
                      ? 'Wide selection of models available'
                      : language === 'ur'
                      ? 'ماڈلز کا وسیع انتخاب دستیاب'
                      : '幅広いモデルをご用意'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-8 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('inquireNow')}
            </h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                      {t('name')}
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
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
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
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

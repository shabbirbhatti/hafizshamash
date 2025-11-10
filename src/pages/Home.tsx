import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import WhatsAppButton from '@/components/WhatsAppButton';
import heroImage from '@/assets/hero-image.jpg';
import meetingImage from '@/assets/meeting-formal.jpg';
import pakistanFlag from '@/assets/flag-pakistan.png';
import japanFlag from '@/assets/flag-japan.png';
import { ArrowRight, Users, Newspaper, Car, Calendar, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const { t, language } = useLanguage();
  const [currentFlag, setCurrentFlag] = useState(0);
  const flags = [pakistanFlag, japanFlag];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlag((prev) => (prev + 1) % flags.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent z-10"></div>
        <img
          src={heroImage}
          alt="Hafiz Mahar Shamash"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        {/* Waving Flags Carousel */}
        <div className="absolute top-20 left-0 right-0 z-20 flex justify-center gap-8 sm:gap-12">
          <div className="relative animate-wave" style={{ animationDelay: '0s' }}>
            <img 
              src={flags[currentFlag]} 
              alt="Flag" 
              className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg shadow-2xl transition-all duration-500"
              style={{ 
                transformOrigin: 'left center',
              }}
            />
          </div>
          <div className="relative animate-wave" style={{ animationDelay: '0.2s' }}>
            <img 
              src={flags[(currentFlag + 1) % flags.length]} 
              alt="Flag" 
              className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-lg shadow-2xl transition-all duration-500"
              style={{ 
                transformOrigin: 'left center',
              }}
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-primary-foreground">
          <div className="animate-fadeIn max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Community Leader & Entrepreneur</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('heroTitle')}
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg">
                <Link to="/about">
                  {t('learnMore')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <WhatsAppButton className="text-base sm:text-lg" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Meeting Image Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={meetingImage}
              alt="Official Meeting"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'What We Do' : language === 'ur' ? 'ہم کیا کرتے ہیں' : '私たちの活動'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' ? 'Empowering communities through leadership, media, and business' : language === 'ur' ? 'قیادت، میڈیا، اور کاروبار کے ذریعے کمیونٹیز کو بااختیار بنانا' : 'リーダーシップ、メディア、ビジネスを通じてコミュニティを支援'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('community')}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {language === 'en' ? 'Building bridges between communities' : language === 'ur' ? 'کمیونٹیز کے درمیان پل بنانا' : 'コミュニティ間の架け橋を築く'}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/community">{language === 'en' ? 'Learn More' : language === 'ur' ? 'مزید جانیں' : '詳細を見る'}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Newspaper className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('voiceOfJapan')}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {language === 'en' ? 'Media platform connecting communities' : language === 'ur' ? 'کمیونٹیز کو جوڑنے والا میڈیا پلیٹ فارم' : 'コミュニティを繋ぐメディア'}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/voice-of-japan">{language === 'en' ? 'Visit' : language === 'ur' ? 'ملاحظہ کریں' : '訪問する'}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Car className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('carBusiness')}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {language === 'en' ? 'Quality Japanese cars export' : language === 'ur' ? 'معیاری جاپانی گاڑیوں کی برآمد' : '高品質日本車輸出'}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/car-business">{language === 'en' ? 'Browse' : language === 'ur' ? 'دیکھیں' : '閲覧する'}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('activities')}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {language === 'en' ? 'Daily updates and events' : language === 'ur' ? 'روزانہ اپ ڈیٹس اور تقریبات' : '毎日の更新とイベント'}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/activities">{language === 'en' ? 'View' : language === 'ur' ? 'دیکھیں' : '表示'}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Need Assistance?' : language === 'ur' ? 'مدد کی ضرورت ہے؟' : 'サポートが必要ですか？'}
          </h2>
          <p className={`text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Get in touch for community support, business inquiries, or media collaboration' : language === 'ur' ? 'کمیونٹی سپورٹ، کاروباری پوچھ گچھ، یا میڈیا تعاون کے لیے رابطہ کریں' : 'コミュニティサポート、ビジネスお問い合わせ、メディアコラボレーションについてお問い合わせください'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-base sm:text-lg">
              <Link to="/contact">{t('contact')}</Link>
            </Button>
            <WhatsAppButton className="text-base sm:text-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import WhatsAppButton from '@/components/WhatsAppButton';
import heroImage from '@/assets/hero-image.jpg';
import { ArrowRight, Users, Newspaper, Car, Calendar } from 'lucide-react';

const Home = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90 z-10"></div>
        <img
          src={heroImage}
          alt="Hafiz Mahar Shamash"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center text-primary-foreground">
          <div className="animate-fadeIn">
            <div className="flex justify-center gap-4 mb-6">
              <span className="text-6xl">🇵🇰</span>
              <span className="text-6xl">🇯🇵</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('heroTitle')}
            </h1>
            <p className={`text-xl md:text-2xl mb-8 opacity-95 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/about">
                  {t('learnMore')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <WhatsAppButton className="text-lg px-8 py-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow animate-fadeIn">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className={`font-semibold text-lg mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('community')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'en'
                    ? 'Strengthening Pakistan-Japan relations'
                    : language === 'ur'
                    ? 'پاکستان-جاپان تعلقات کو مضبوط بنانا'
                    : 'パキスタン・日本関係の強化'}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/community">{language === 'en' ? 'Learn More' : language === 'ur' ? 'مزید جانیں' : '詳細を見る'}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 text-center">
                <Newspaper className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className={`font-semibold text-lg mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('voiceOfJapan')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'en'
                    ? 'Media platform for Pakistani community'
                    : language === 'ur'
                    ? 'پاکستانی کمیونٹی کے لیے میڈیا پلیٹ فارم'
                    : 'パキスタンコミュニティのメディア'}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/voice-of-japan">{language === 'en' ? 'Visit' : language === 'ur' ? 'ملاحظہ کریں' : '訪問する'}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <Car className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className={`font-semibold text-lg mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('carBusiness')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'en'
                    ? 'Quality used Japanese cars export'
                    : language === 'ur'
                    ? 'معیاری استعمال شدہ جاپانی گاڑیوں کی برآمد'
                    : '高品質中古日本車輸出'}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/car-business">{language === 'en' ? 'Browse' : language === 'ur' ? 'دیکھیں' : '閲覧する'}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className={`font-semibold text-lg mb-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {t('activities')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {language === 'en'
                    ? 'Daily updates and community events'
                    : language === 'ur'
                    ? 'روزانہ اپ ڈیٹس اور کمیونٹی تقریبات'
                    : '毎日の更新とコミュニティイベント'}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/activities">{language === 'en' ? 'View' : language === 'ur' ? 'دیکھیں' : '表示'}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en'
              ? 'Need Assistance?'
              : language === 'ur'
              ? 'مدد کی ضرورت ہے؟'
              : 'サポートが必要ですか？'}
          </h2>
          <p className={`text-lg mb-8 opacity-95 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en'
              ? 'Get in touch for community support, business inquiries, or media collaboration'
              : language === 'ur'
              ? 'کمیونٹی سپورٹ، کاروباری پوچھ گچھ، یا میڈیا تعاون کے لیے رابطہ کریں'
              : 'コミュニティサポート、ビジネスお問い合わせ、メディアコラボレーションについてお問い合わせください'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">{t('contact')}</Link>
            </Button>
            <WhatsAppButton className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

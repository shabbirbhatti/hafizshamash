import { Facebook, Youtube, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground font-bold text-xl">
              HM
            </div>
            <p className={`text-sm opacity-90 leading-relaxed ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('connectingHearts')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'Quick Links' : language === 'ur' ? 'فوری لنکس' : 'クイックリンク'}
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('about')}
              </Link>
              <Link to="/community" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('community')}
              </Link>
              <Link to="/voice-of-japan" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('voiceOfJapan')}
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'Follow Us' : language === 'ur' ? 'ہمیں فالو کریں' : 'フォローする'}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/meharshamas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/20 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@VoiceofJapanOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/20 transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className={`font-bold text-lg ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('contact')}
            </h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>+81 90-6490-5870</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>{language === 'en' ? 'Sialkot, Pakistan' : language === 'ur' ? 'سیالکوٹ، پاکستان' : 'シアルコート、パキスタン'}</p>
                  <p>{language === 'en' ? 'Tokyo, Japan' : language === 'ur' ? 'ٹوکیو، جاپان' : '東京、日本'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>© 2025 Hafiz Mahar Shamash. All rights reserved.</p>
          <p className={`${language === 'ur' ? 'urdu-text' : ''}`}>
            {t('designedBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

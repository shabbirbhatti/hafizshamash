import { Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🇵🇰</span>
              <span className="text-3xl">🇯🇵</span>
            </div>
            <p className={`text-sm opacity-90 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('connectingHearts')}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`font-semibold mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'Follow Us' : language === 'ur' ? 'ہمیں فالو کریں' : 'フォローする'}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/meharshamas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@VoiceofJapanOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-semibold mb-4 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {t('contact')}
            </h3>
            <div className="text-sm space-y-2 opacity-90">
              <p>WhatsApp: +81 90-6490-5870</p>
              <p>{language === 'en' ? 'Sialkot, Pakistan' : language === 'ur' ? 'سیالکوٹ، پاکستان' : 'シアルコート、パキスタン'}</p>
              <p>{language === 'en' ? 'Tokyo, Japan' : language === 'ur' ? 'ٹوکیو، جاپان' : '東京、日本'}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © 2025 Hafiz Mahar Shamash. All rights reserved.
          </p>
          <p className={`text-sm opacity-90 ${language === 'ur' ? 'urdu-text' : ''}`}>
            {t('designedBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

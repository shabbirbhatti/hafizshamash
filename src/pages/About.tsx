import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-formal.jpg';
import meeting1 from '@/assets/meeting-1.jpg';
import office from '@/assets/office-photo.jpg';
import ceremony from '@/assets/ceremony.jpg';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <img
                src={profileImage}
                alt="Hafiz Mahar Shamash"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="animate-slideInRight">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                {t('aboutTitle')}
              </h1>
              <div className={`prose prose-lg ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                {language === 'en' && (
                  <>
                    <p className="text-lg mb-4">
                      Hafiz Mahar Shamash is a prominent Pakistani community leader and businessman based in Japan, 
                      dedicated to strengthening the bonds between Pakistan and Japan.
                    </p>
                    <p className="text-lg mb-4">
                      As the founder of Voice of Japan, he has created a vital media platform that serves the Pakistani 
                      diaspora in Japan, providing news, cultural content, and community support.
                    </p>
                    <p className="text-lg">
                      Through his diplomatic efforts and community work, he has become a bridge between two great nations, 
                      fostering understanding, cooperation, and friendship.
                    </p>
                  </>
                )}
                {language === 'ur' && (
                  <>
                    <p className="text-lg mb-4">
                      حافظ مہر شمس جاپان میں مقیم ایک معروف پاکستانی کمیونٹی لیڈر اور کاروباری شخصیت ہیں، 
                      جو پاکستان اور جاپان کے درمیان تعلقات کو مضبوط بنانے کے لیے وقف ہیں۔
                    </p>
                    <p className="text-lg mb-4">
                      وائس آف جاپان کے بانی کے طور پر، انہوں نے جاپان میں پاکستانی تارکین وطن کے لیے 
                      ایک اہم میڈیا پلیٹ فارم تخلیق کیا ہے، جو خبریں، ثقافتی مواد، اور کمیونٹی سپورٹ فراہم کرتا ہے۔
                    </p>
                    <p className="text-lg">
                      اپنی سفارتی کوششوں اور کمیونٹی کے کام کے ذریعے، وہ دو عظیم قوموں کے درمیان پل بن گئے ہیں، 
                      تفہیم، تعاون اور دوستی کو فروغ دیتے ہوئے۔
                    </p>
                  </>
                )}
                {language === 'jp' && (
                  <>
                    <p className="text-lg mb-4">
                      ハーフィズ・マハル・シャマシュは、日本を拠点とする著名なパキスタンコミュニティリーダー兼実業家であり、
                      パキスタンと日本の絆を強化することに専念しています。
                    </p>
                    <p className="text-lg mb-4">
                      ボイス・オブ・ジャパンの創設者として、日本のパキスタン人ディアスポラにニュース、
                      文化的コンテンツ、コミュニティサポートを提供する重要なメディアプラットフォームを構築しました。
                    </p>
                    <p className="text-lg">
                      外交活動とコミュニティ活動を通じて、二つの偉大な国の架け橋となり、
                      理解、協力、友情を育んでいます。
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Key Achievements' : language === 'ur' ? 'اہم کامیابیاں' : '主な業績'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fadeIn">
              <CardContent className="p-6">
                <h3 className={`font-semibold text-xl mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Community Leadership' : language === 'ur' ? 'کمیونٹی قیادت' : 'コミュニティリーダーシップ'}
                </h3>
                <p className={language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}>
                  {language === 'en'
                    ? 'Leading the Pakistani community in Japan with dedication and vision'
                    : language === 'ur'
                    ? 'لگن اور وژن کے ساتھ جاپان میں پاکستانی کمیونٹی کی قیادت'
                    : '献身とビジョンを持って日本のパキスタンコミュニティをリード'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className={`font-semibold text-xl mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Voice of Japan Media' : language === 'ur' ? 'وائس آف جاپان میڈیا' : 'ボイス・オブ・ジャパン メディア'}
                </h3>
                <p className={language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}>
                  {language === 'en'
                    ? 'Founded and managing a successful media platform connecting communities'
                    : language === 'ur'
                    ? 'کمیونٹیز کو جوڑنے والا کامیاب میڈیا پلیٹ فارم قائم اور منظم'
                    : 'コミュニティを結ぶ成功したメディアプラットフォームの創設と運営'}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className={`font-semibold text-xl mb-3 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Diplomatic Relations' : language === 'ur' ? 'سفارتی تعلقات' : '外交関係'}
                </h3>
                <p className={language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}>
                  {language === 'en'
                    ? 'Active collaboration with Pakistan Embassy and Japanese officials'
                    : language === 'ur'
                    ? 'پاکستان سفارت خانے اور جاپانی حکام کے ساتھ فعال تعاون'
                    : 'パキスタン大使館および日本当局との積極的な協力'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en' ? 'Photo Gallery' : language === 'ur' ? 'تصویری گیلری' : 'フォトギャラリー'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src={meeting1} alt="Meeting" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src={office} alt="Office" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src={ceremony} alt="Ceremony" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

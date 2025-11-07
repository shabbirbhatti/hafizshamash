import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import communityGroup from '@/assets/community-group.jpg';
import handshake from '@/assets/handshake.jpg';
import meeting2 from '@/assets/meeting-2.jpg';
import audience from '@/assets/audience.jpg';

const Community = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-primary animate-fadeIn ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {t('communityTitle')}
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
            {language === 'en'
              ? 'Building bridges and fostering friendship between Pakistani and Japanese communities'
              : language === 'ur'
              ? 'پاکستانی اور جاپانی کمیونٹیز کے درمیان پل بنانا اور دوستی کو فروغ دینا'
              : 'パキスタンと日本のコミュニティ間の橋を架け、友情を育む'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slideInLeft">
              <h2 className={`text-3xl font-bold mb-6 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                {t('diplomaticWork')}
              </h2>
              {language === 'en' && (
                <div className="prose prose-lg">
                  <p className="mb-4">
                    Hafiz Mahar Shamash plays a pivotal role in strengthening Pakistan-Japan diplomatic relations 
                    through active engagement with both nations' communities and official channels.
                  </p>
                  <p className="mb-4">
                    His work includes organizing cultural events, facilitating business connections, and providing 
                    essential support services to Pakistani expatriates in Japan.
                  </p>
                  <p>
                    Regular collaboration with Pakistan Embassy ensures smooth coordination of community initiatives, 
                    celebrating national days, and addressing community concerns effectively.
                  </p>
                </div>
              )}
              {language === 'ur' && (
                <div className="prose prose-lg urdu-text">
                  <p className="mb-4">
                    حافظ مہر شمس پاکستان اور جاپان کے سفارتی تعلقات کو مضبوط بنانے میں اہم کردار ادا کرتے ہیں، 
                    دونوں قوموں کی کمیونٹیز اور سرکاری چینلز کے ساتھ فعال مشغولیت کے ذریعے۔
                  </p>
                  <p className="mb-4">
                    ان کے کام میں ثقافتی تقریبات کا انعقاد، کاروباری روابط کی سہولت، اور جاپان میں پاکستانی 
                    تارکین وطن کو ضروری معاونتی خدمات فراہم کرنا شامل ہے۔
                  </p>
                  <p>
                    پاکستان سفارت خانے کے ساتھ باقاعدہ تعاون کمیونٹی اقدامات کی ہموار ہم آہنگی، قومی دنوں کی 
                    تقریب، اور کمیونٹی کے خدشات کو مؤثر طریقے سے حل کرنے کو یقینی بناتا ہے۔
                  </p>
                </div>
              )}
              {language === 'jp' && (
                <div className="prose prose-lg japanese-text">
                  <p className="mb-4">
                    ハーフィズ・マハル・シャマシュは、両国のコミュニティと公式チャンネルとの積極的な関わりを通じて、
                    パキスタンと日本の外交関係の強化において極めて重要な役割を果たしています。
                  </p>
                  <p className="mb-4">
                    彼の活動には、文化イベントの開催、ビジネス関係の促進、日本在住のパキスタン人への
                    重要なサポートサービスの提供が含まれます。
                  </p>
                  <p>
                    パキスタン大使館との定期的な協力により、コミュニティイニシアチブの円滑な調整、
                    国民の日の祝賀、コミュニティの懸念への効果的な対応が確保されています。
                  </p>
                </div>
              )}
            </div>
            <div className="animate-slideInRight">
              <img
                src={communityGroup}
                alt="Community Group"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="animate-fadeIn">
              <CardContent className="p-6">
                <h3 className={`font-semibold text-xl mb-4 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Cultural Events' : language === 'ur' ? 'ثقافتی تقریبات' : '文化イベント'}
                </h3>
                <ul className={`space-y-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  <li>• {language === 'en' ? 'Independence Day Celebrations' : language === 'ur' ? 'یوم آزادی کی تقریبات' : '独立記念日のお祝い'}</li>
                  <li>• {language === 'en' ? 'Eid & Religious Gatherings' : language === 'ur' ? 'عید اور مذہبی اجتماعات' : 'イードと宗教的集まり'}</li>
                  <li>• {language === 'en' ? 'Cultural Exchange Programs' : language === 'ur' ? 'ثقافتی تبادلے کے پروگرام' : '文化交流プログラム'}</li>
                  <li>• {language === 'en' ? 'Community Meetups' : language === 'ur' ? 'کمیونٹی ملاقاتیں' : 'コミュニティミートアップ'}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h3 className={`font-semibold text-xl mb-4 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  {language === 'en' ? 'Support Services' : language === 'ur' ? 'معاونتی خدمات' : 'サポートサービス'}
                </h3>
                <ul className={`space-y-2 ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
                  <li>• {language === 'en' ? 'Immigration Guidance' : language === 'ur' ? 'امیگریشن رہنمائی' : '入国管理ガイダンス'}</li>
                  <li>• {language === 'en' ? 'Business Consultation' : language === 'ur' ? 'کاروباری مشاورت' : 'ビジネスコンサルティング'}</li>
                  <li>• {language === 'en' ? 'Legal Assistance' : language === 'ur' ? 'قانونی مدد' : '法的支援'}</li>
                  <li>• {language === 'en' ? 'Community Welfare Programs' : language === 'ur' ? 'کمیونٹی فلاحی پروگرام' : 'コミュニティ福祉プログラム'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className={`text-3xl font-bold text-center mb-8 text-primary ${language === 'ur' ? 'urdu-text' : language === 'jp' ? 'japanese-text' : ''}`}>
              {language === 'en' ? 'Event Gallery' : language === 'ur' ? 'تقریبات کی گیلری' : 'イベントギャラリー'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <img src={handshake} alt="Handshake" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <img src={meeting2} alt="Meeting" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <img src={audience} alt="Audience" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

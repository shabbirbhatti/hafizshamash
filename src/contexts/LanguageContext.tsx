import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ur' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    community: "Community Work",
    voiceOfJapan: "Voice of Japan",
    carBusiness: "Car Business",
    activities: "Daily Activities",
    contact: "Contact",
    
    // Hero
    heroTitle: "Bridging Communities Between Pakistan and Japan",
    heroSubtitle: "Community Leader | Businessman | Voice of Japan Founder",
    learnMore: "Learn More",
    whatsappNow: "WhatsApp Now",
    
    // About
    aboutTitle: "About Hafiz Mahar Shamash",
    biography: "Biography",
    
    // Community
    communityTitle: "Pakistan-Japan Community Relations",
    diplomaticWork: "Diplomatic & Community Work",
    
    // Voice of Japan
    voiceTitle: "Voice of Japan Media Platform",
    latestNews: "Latest Updates",
    
    // Car Business
    carTitle: "Quality Used Japanese Cars",
    trustQuality: "Trust, Quality & Reliability",
    inquireNow: "Inquire Now",
    
    // Activities
    activitiesTitle: "Daily Activities & Updates",
    
    // Contact
    contactTitle: "Get in Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    chatOnWhatsApp: "Chat on WhatsApp",
    
    // Footer
    connectingHearts: "Connecting Hearts Between Pakistan and Japan",
    designedBy: "Designed by Shabbir Bhatti",
  },
  ur: {
    // Navigation
    home: "ہوم",
    about: "تعارف",
    community: "کمیونٹی کام",
    voiceOfJapan: "وائس آف جاپان",
    carBusiness: "کار کاروبار",
    activities: "روزانہ سرگرمیاں",
    contact: "رابطہ",
    
    // Hero
    heroTitle: "پاکستان اور جاپان کے درمیان پل بنانا",
    heroSubtitle: "کمیونٹی لیڈر | کاروباری شخصیت | وائس آف جاپان بانی",
    learnMore: "مزید جانیں",
    whatsappNow: "واٹس ایپ کریں",
    
    // About
    aboutTitle: "حافظ مہر شمس کے بارے میں",
    biography: "سوانح حیات",
    
    // Community
    communityTitle: "پاکستان-جاپان کمیونٹی تعلقات",
    diplomaticWork: "سفارتی اور کمیونٹی کام",
    
    // Voice of Japan
    voiceTitle: "وائس آف جاپان میڈیا پلیٹ فارم",
    latestNews: "تازہ ترین خبریں",
    
    // Car Business
    carTitle: "معیاری جاپانی استعمال شدہ گاڑیاں",
    trustQuality: "اعتماد، معیار اور وشوسنییتا",
    inquireNow: "ابھی پوچھیں",
    
    // Activities
    activitiesTitle: "روزانہ کی سرگرمیاں اور اپ ڈیٹس",
    
    // Contact
    contactTitle: "رابطے میں رہیں",
    name: "نام",
    email: "ای میل",
    message: "پیغام",
    sendMessage: "پیغام بھیجیں",
    chatOnWhatsApp: "واٹس ایپ پر چیٹ کریں",
    
    // Footer
    connectingHearts: "پاکستان اور جاپان کے درمیان دل ملانا",
    designedBy: "ڈیزائن از شبیر بھٹی",
  },
  jp: {
    // Navigation
    home: "ホーム",
    about: "プロフィール",
    community: "コミュニティ活動",
    voiceOfJapan: "ボイス・オブ・ジャパン",
    carBusiness: "中古車事業",
    activities: "日々の活動",
    contact: "お問い合わせ",
    
    // Hero
    heroTitle: "パキスタンと日本のコミュニティを繋ぐ",
    heroSubtitle: "コミュニティリーダー | 実業家 | ボイス・オブ・ジャパン創設者",
    learnMore: "詳細を見る",
    whatsappNow: "WhatsAppで連絡",
    
    // About
    aboutTitle: "ハーフィズ・マハル・シャマシュについて",
    biography: "経歴",
    
    // Community
    communityTitle: "パキスタン・日本コミュニティ関係",
    diplomaticWork: "外交・コミュニティ活動",
    
    // Voice of Japan
    voiceTitle: "ボイス・オブ・ジャパン メディアプラットフォーム",
    latestNews: "最新ニュース",
    
    // Car Business
    carTitle: "高品質日本中古車",
    trustQuality: "信頼、品質、信頼性",
    inquireNow: "今すぐお問い合わせ",
    
    // Activities
    activitiesTitle: "日々の活動とアップデート",
    
    // Contact
    contactTitle: "お問い合わせ",
    name: "お名前",
    email: "メールアドレス",
    message: "メッセージ",
    sendMessage: "送信",
    chatOnWhatsApp: "WhatsAppでチャット",
    
    // Footer
    connectingHearts: "パキスタンと日本の心を繋ぐ",
    designedBy: "デザイン：シャビール・バッティ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

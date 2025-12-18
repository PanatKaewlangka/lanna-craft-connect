import { createContext, useContext, useState, ReactNode } from "react";

type Language = "th" | "en";

interface Translations {
  [key: string]: {
    th: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { th: "หน้าแรก", en: "Home" },
  workshops: { th: "เวิร์กช็อป", en: "Workshops" },
  map: { th: "แผนที่", en: "Map" },
  about: { th: "เกี่ยวกับเรา", en: "About" },
  login: { th: "เข้าสู่ระบบ", en: "Login" },
  bookActivity: { th: "จองกิจกรรม", en: "Book Activity" },
  
  // Map page
  communityMap: { th: "แผนที่ชุมชน", en: "Community Map" },
  exploreLHK: { th: "สำรวจโหล่งฮิมคาว", en: "Explore Long Him Kow" },
  mapDescription: { 
    th: "แผนที่แบบอินเทอร์แอคทีฟ แสดงตำแหน่งร้านค้าและจุดที่น่าสนใจในชุมชน",
    en: "Interactive map showing shops and points of interest in the community"
  },
  shopsInCommunity: { th: "ร้านค้าในชุมชน", en: "Shops in Community" },
  shopWorkshop: { th: "ร้านค้า/เวิร์กช็อป", en: "Shop/Workshop" },
  kawRiver: { th: "แม่น้ำคาว", en: "Kaw River" },
  mapNote: { 
    th: "แผนที่นี้เป็นแผนที่จำลอง ในเวอร์ชันจริงจะเป็นแผนที่ภาพประกอบของชุมชนที่สวยงาม",
    en: "This is a simulated map. The final version will feature a beautiful illustrated community map."
  },
  note: { th: "หมายเหตุ", en: "Note" },
  
  // Shop detail modal
  shopDetails: { th: "รายละเอียดร้านค้า", en: "Shop Details" },
  category: { th: "หมวดหมู่", en: "Category" },
  openHours: { th: "เวลาเปิด-ปิด", en: "Opening Hours" },
  contact: { th: "ติดต่อ", en: "Contact" },
  viewWorkshops: { th: "ดูเวิร์กช็อป", en: "View Workshops" },
  close: { th: "ปิด", en: "Close" },
  
  // Shop categories
  indigoDye: { th: "ผ้าย้อมคราม", en: "Indigo Dye" },
  ceramics: { th: "เซรามิค", en: "Ceramics" },
  food: { th: "อาหาร", en: "Food" },
  honey: { th: "น้ำผึ้ง", en: "Honey" },
  paperCraft: { th: "งานกระดาษ", en: "Paper Craft" },
  textiles: { th: "ผ้าและสิ่งทอ", en: "Textiles" },
  drinks: { th: "เครื่องดื่ม", en: "Drinks" },
  
  // Footer
  footerTagline: { 
    th: "ชุมชนท่องเที่ยวเชิงสร้างสรรค์ สัมผัสวิถีชีวิตล้านนาแท้",
    en: "Creative tourism community - Experience authentic Lanna lifestyle"
  },
  quickLinks: { th: "ลิงก์ด่วน", en: "Quick Links" },
  contactUs: { th: "ติดต่อเรา", en: "Contact Us" },
  followUs: { th: "ติดตามเรา", en: "Follow Us" },
  allRightsReserved: { th: "สงวนลิขสิทธิ์", en: "All rights reserved" },
  
  // Common
  loading: { th: "กำลังโหลด...", en: "Loading..." },
  error: { th: "เกิดข้อผิดพลาด", en: "Error" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("th");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

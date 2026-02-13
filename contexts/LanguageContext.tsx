'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ro' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Hero
    tagline: 'Specialty Coffee',
    
    // Menu
    menu: 'Menu',
    drinks: 'Drinks',
    pastries: 'Pastries',
    tea: 'Tea',
    
    // Menu items
    espresso: 'ESPRESSO',
    americano: 'AMERICANO',
    cappuccino: 'CAPPUCCINO',
    latte: 'LATTE',
    moccacino: 'MOCCACINO',
    flatWhite: 'FLAT WHITE',
    rafCoffee: 'RAF COFFEE',
    cacao: 'CACAO',
    cappuccinoVegan: 'CAPPUCCINO VEGAN',
    bergamot: 'BERGAMOT',
    mangoGreen: 'MANGO GREEN',
    mint: 'MINT',
    croissant: 'CROISSANT',
    trianglePie: 'TRIANGLE PIE',
    
    // Syrups
    syrupsTitle: '1883 Company Syrups',
    syrupsSubtitle: 'Premium flavor additions',
    vanilla: 'Vanilla',
    caramel: 'Caramel',
    hazelnut: 'Hazelnut',
    chocolate: 'Chocolate',
    coconut: 'Coconut',
    
    // Footer
    address: 'Address',
    phone: 'Phone',
    hours: 'Hours',
    copyright: '© 2026 caffeine. All rights reserved.',
    
    // Days
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    
    // Addon
    syrupsAddon: '1883 Company Syrups available as add-on',
  },
  ro: {
    // Hero
    tagline: 'Cafea Specială',
    
    // Menu
    menu: 'Meniu',
    drinks: 'Băuturi',
    pastries: 'Patiserie',
    tea: 'Ceai',
    
    // Menu items
    espresso: 'ESPRESSO',
    americano: 'AMERICANO',
    cappuccino: 'CAPPUCCINO',
    latte: 'LATTE',
    moccacino: 'MOCCACINO',
    flatWhite: 'FLAT WHITE',
    rafCoffee: 'RAF COFFEE',
    cacao: 'CACAO',
    cappuccinoVegan: 'CAPPUCCINO VEGAN',
    bergamot: 'BERGAMOT',
    mangoGreen: 'MANGO VERDE',
    mint: 'MENTĂ',
    croissant: 'CROISSANT',
    trianglePie: 'PLĂCINTĂ TRIUNGHIULARĂ',
    
    // Syrups
    syrupsTitle: 'Siropuri 1883 Company',
    syrupsSubtitle: 'Arome premium',
    vanilla: 'Vanilie',
    caramel: 'Caramel',
    hazelnut: 'Alune',
    chocolate: 'Ciocolată',
    coconut: 'Nucă de cocos',
    
    // Footer
    address: 'Adresă',
    phone: 'Telefon',
    hours: 'Program',
    copyright: '© 2026 caffeine. Toate drepturile rezervate.',
    
    // Days
    monday: 'Luni',
    tuesday: 'Marți',
    wednesday: 'Miercuri',
    thursday: 'Joi',
    friday: 'Vineri',
    saturday: 'Sâmbătă',
    sunday: 'Duminică',
    
    // Addon
    syrupsAddon: 'Siropuri 1883 Company disponibile ca opțiune suplimentară',
  },
  ru: {
    // Hero
    tagline: 'Специальный Кофе',
    
    // Menu
    menu: 'Меню',
    drinks: 'Напитки',
    pastries: 'Выпечка',
    tea: 'Чай',
    
    // Menu items
    espresso: 'ЭСПРЕССО',
    americano: 'АМЕРИКАНО',
    cappuccino: 'КАПУЧИНО',
    latte: 'ЛАТТЕ',
    moccacino: 'МОККАЧИНО',
    flatWhite: 'ФЛЭТ УАЙТ',
    rafCoffee: 'РАФ КОФЕ',
    cacao: 'КАКАО',
    cappuccinoVegan: 'КАПУЧИНО ВЕГАН',
    bergamot: 'БЕРГАМОТ',
    mangoGreen: 'МАНГО ЗЕЛЁНЫЙ',
    mint: 'МЯТА',
    croissant: 'КРУАССАН',
    trianglePie: 'ТРЕУГОЛЬНЫЙ ПИРОГ',
    
    // Syrups
    syrupsTitle: 'Сиропы 1883 Company',
    syrupsSubtitle: 'Премиальные ароматы',
    vanilla: 'Ваниль',
    caramel: 'Карамель',
    hazelnut: 'Фундук',
    chocolate: 'Шоколад',
    coconut: 'Кокос',
    
    // Footer
    address: 'Адрес',
    phone: 'Телефон',
    hours: 'Часы работы',
    copyright: '© 2026 caffeine. Все права защищены.',
    
    // Days
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    
    // Addon
    syrupsAddon: 'Сиропы 1883 Company доступны как дополнение',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

'use client'

import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import SyrupsSlider from '@/components/SyrupsSlider'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  return (
    <main>
      <LanguageSwitcher />
      <Hero />
      <Menu />
      <SyrupsSlider />
      <Footer />
    </main>
  )
}

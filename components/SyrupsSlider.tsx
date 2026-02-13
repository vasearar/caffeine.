'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './SyrupsSlider.module.css'

const SyrupsSlider = () => {
  const { t } = useLanguage()
  
  const syrups = [
    {
      id: 1,
      nameKey: 'vanilla',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
      color: '#F5E6D3'
    },
    {
      id: 2,
      nameKey: 'caramel',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
      color: '#D4A574'
    },
    {
      id: 3,
      nameKey: 'hazelnut',
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4e001e46?w=800&q=80',
      color: '#8B6F47'
    },
    {
      id: 4,
      nameKey: 'chocolate',
      image: 'https://images.unsplash.com/photo-1606312619070-d48b4e001e46?w=800&q=80',
      color: '#3E2723'
    },
    {
      id: 5,
      nameKey: 'coconut',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
      color: '#F5F5DC'
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    const interval = setInterval(() => {
      if (isMountedRef.current) {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % syrups.length)
      }
    }, 4000)
    return () => {
      isMountedRef.current = false
      clearInterval(interval)
    }
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section className={styles.syrupsSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{t('syrupsTitle')}</h2>
          <p className={styles.subtitle}>{t('syrupsSubtitle')}</p>
        </div>

        <div className={styles.sliderWrapper}>
          <div className={styles.sliderContainer}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className={styles.slide}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={syrups[currentIndex].image}
                    alt={t(syrups[currentIndex].nameKey)}
                    fill
                    className={styles.slideImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div 
                    className={styles.imageOverlay}
                    style={{ backgroundColor: `${syrups[currentIndex].color}20` }}
                  />
                </div>
                <div className={styles.slideContent}>
                  <h3 className={styles.slideTitle}>{t(syrups[currentIndex].nameKey)}</h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <div className={styles.dots}>
              {syrups.map((syrup, index) => (
                <button
                  key={syrup.id}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${t(syrup.nameKey)}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.syrupsGrid}>
          {syrups.map((syrup, index) => (
            <motion.div
              key={syrup.id}
              className={styles.syrupCard}
              onClick={() => goToSlide(index)}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div 
                className={styles.cardColor}
                style={{ backgroundColor: syrup.color }}
              />
              <span className={styles.cardName}>{t(syrup.nameKey)}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SyrupsSlider

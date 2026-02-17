'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './Menu.module.css'

const Menu = () => {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const drinks = [
    { nameKey: 'espresso', price: '30 / 45' },
    { nameKey: 'americano', price: '30 / 45' },
    { nameKey: 'cappuccino', price: '35 / 55' },
    { nameKey: 'latte', price: '40 / 60' },
    { nameKey: 'moccacino', price: '50' },
    { nameKey: 'flatWhite', price: '50' },
    { nameKey: 'rafCoffee', price: '60' },
    { nameKey: 'cacao', price: '35' },
    { nameKey: 'cappuccinoVegan', price: '60 / 80' },
  ]

  const teas = [
    { nameKey: 'bergamot', price: '30 / 40' },
    { nameKey: 'mangoGreen', price: '30 / 40' },
    { nameKey: 'mint', price: '30 / 40' },
  ]

  const pastries = [
    { nameKey: 'sausageRoll', price: '50' },
    { nameKey: 'sourCherryPastry', price: '50' },
    { nameKey: 'cheesePastry', price: '50' },
  ]

  const weekendPastries = [
    { nameKey: 'blackcurrantCroissant', price: '—' },
    { nameKey: 'chocolateCroissant', price: '—' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className={styles.menuSection}>
      <motion.div
        className={styles.menuContainer}
        variants={isMobile ? { visible: { opacity: 1 } } : containerVariants}
        initial={isMobile ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: '-150px' }}
      >
        <motion.div
          className={styles.menuHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.sectionTitle}>{t('menu')}</h2>
          <div className={styles.titleLine} />
        </motion.div>

        <div className={styles.menuGrid}>
          {/* Drinks Column */}
          <motion.div
            className={styles.menuColumn}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className={styles.menuHeading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t('drinks')}
            </motion.h3>
            <div className={styles.menuItems}>
              {drinks.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.menuItem}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  whileInView={isMobile ? "visible" : undefined}
                  viewport={isMobile ? { once: true, margin: "-10%" } : undefined}
                >
                  <span className={styles.itemName}>{t(item.nameKey)}</span>
                  <span className={styles.itemPrice}>{item.price} MDL</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.menuSubsection}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.2 }} // Reduced delay for better responsiveness
            >
              <h4 className={styles.subsectionHeading}>{t('tea')}</h4>
              <div className={styles.menuItems}>
                {teas.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.menuItem}
                    variants={itemVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    whileInView={isMobile ? "visible" : undefined}
                    viewport={isMobile ? { once: true, margin: "-10%" } : undefined}
                  >
                    <span className={styles.itemName}>{t(item.nameKey)}</span>
                    <span className={styles.itemPrice}>{item.price} MDL</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Pastries Column */}
          <motion.div
            className={styles.menuColumn}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className={styles.menuHeading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t('pastries')}
            </motion.h3>
            <div className={styles.menuItems}>
              {pastries.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.menuItem}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  whileInView={isMobile ? "visible" : undefined}
                  viewport={isMobile ? { once: true, margin: "-10%" } : undefined}
                >
                  <span className={styles.itemName}>{t(item.nameKey)}</span>
                  <span className={styles.itemPrice}>{item.price}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={styles.menuNoteContainer}
            >
              <div className={styles.separator} />
              <p className={styles.menuNote}>{t('weekendAvailability')}</p>
            </motion.div>

            <div className={styles.menuItems}>
              {weekendPastries.map((item, index) => (
                <motion.div
                  key={`weekend-${index}`}
                  className={styles.menuItem}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  whileInView={isMobile ? "visible" : undefined}
                  viewport={isMobile ? { once: true, margin: "-10%" } : undefined}
                >
                  <span className={styles.itemName}>{t(item.nameKey)}</span>
                  <span className={styles.itemPrice}>{item.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Menu

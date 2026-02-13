'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { formatTime } from '@/utils/timeFormat'
import styles from './Footer.module.css'

const Footer = () => {
  const { t, language } = useLanguage()
  
  const hours = [
    { day: 'monday', time: '7 AM – 9 PM' },
    { day: 'tuesday', time: '7 AM – 9 PM' },
    { day: 'wednesday', time: '7 AM – 9 PM' },
    { day: 'thursday', time: '7 AM – 9 PM' },
    { day: 'friday', time: '7 AM – 9 PM' },
    { day: 'saturday', time: '8 AM – 9 PM' },
    { day: 'sunday', time: '9 AM – 9 PM' },
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <footer className={styles.footerSection}>
      <motion.div
        className={styles.footerContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className={styles.footerContent}>
          <motion.div className={styles.footerItem} variants={itemVariants}>
            <h3 className={styles.footerLabel}>{t('address')}</h3>
            <a
              href="https://maps.app.goo.gl/UWw11uFpvCUTDPdp6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Valea Apelor 19<br />
              Chisinau, MD-2011<br />
              Codru, Moldova
            </a>
          </motion.div>

          <motion.div className={styles.footerItem} variants={itemVariants}>
            <h3 className={styles.footerLabel}>{t('phone')}</h3>
            <a href="tel:+37379777262" className={styles.footerLink}>
              +373 (797) 77262
            </a>
          </motion.div>

          <motion.div 
            className={styles.footerItem} 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className={styles.footerLabel}>{t('hours')}</h3>
            <motion.div 
              className={styles.hoursTable}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {hours.map((hour, index) => (
                <motion.div 
                  key={index} 
                  className={styles.hoursRow}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  whileHover={{
                    x: 5,
                    transition: {
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                >
                  <span className={styles.hoursDay}>{t(hour.day)}</span>
                  <span className={styles.hoursTime}>{formatTime(hour.time, language)}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.p 
            className={styles.copyright}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className={styles.copyrightText}
              whileHover="hover"
              initial="initial"
            >
              {t('copyright')}
              <motion.span
                className={styles.copyrightUnderline}
                variants={{
                  initial: { width: 0 },
                  hover: { width: '100%' }
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

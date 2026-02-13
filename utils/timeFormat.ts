type Language = 'en' | 'ro' | 'ru'

export function formatTime(time: string, language: Language): string {
  // Parse time like "7 AM – 9 PM"
  const [start, end] = time.split(' – ')
  
  if (language === 'en') {
    // Keep AM/PM format for English
    return time
  } else {
    // Convert to 24-hour format for Romanian and Russian
    const convertTo24h = (timeStr: string): string => {
      const trimmed = timeStr.trim().toUpperCase()
      const isPM = trimmed.includes('PM')
      const isAM = trimmed.includes('AM')
      
      if (!isAM && !isPM) {
        // Already in 24h format
        return trimmed
      }
      
      let hour = parseInt(trimmed.match(/\d+/)?.[0] || '0')
      
      if (isPM && hour !== 12) {
        hour += 12
      } else if (isAM && hour === 12) {
        hour = 0
      }
      
      return `${hour.toString().padStart(2, '0')}:00`
    }
    
    const start24 = convertTo24h(start)
    const end24 = convertTo24h(end)
    
    return `${start24} – ${end24}`
  }
}

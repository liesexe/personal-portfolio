import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traducciones
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Desarrollador Full Stack',
    'hero.description': 'Creo experiencias digitales excepcionales combinando código limpio, diseño intuitivo y soluciones innovadoras para resolver problemas reales.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.contact': 'Contactar',
    
    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador apasionado por crear soluciones digitales',
    'about.description': 'Soy un desarrollador Full Stack con experiencia en crear aplicaciones web modernas y escalables. Me especializo en React, Node.js y tecnologías cloud.',
    'about.experience': 'Años de Experiencia',
    'about.projects': 'Proyectos Completados',
    'about.clients': 'Clientes Satisfechos',
    
    // Skills
    'skills.title': 'Mis Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas que domino',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Base de Datos',
    'skills.tools': 'Herramientas',
    'skills.soft': 'Habilidades Blandas',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Algunos de mis trabajos más recientes',
    'projects.all': 'Todos',
    'projects.web': 'Web',
    'projects.mobile': 'Móvil',
    'projects.viewProject': 'Ver Proyecto',
    'projects.viewCode': 'Ver Código',
    
    // Contact
    'contact.title': '¡Trabajemos Juntos!',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¿Quieres colaborar o simplemente charlar sobre tecnología? ¡Me encantaría escuchar de ti!',
    'contact.info': 'Información de Contacto',
    'contact.availability': 'Disponibilidad',
    'contact.follow': 'Sígueme',
    'contact.sendMessage': 'Envíame un Mensaje',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.selectSubject': 'Selecciona un asunto',
    'contact.newProject': 'Nuevo Proyecto',
    'contact.collaboration': 'Colaboración',
    'contact.consultation': 'Consulta Técnica',
    'contact.other': 'Otro',
    'contact.namePlaceholder': 'Tu nombre completo',
    'contact.emailPlaceholder': 'tu.email@ejemplo.com',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto o consulta...',
    'contact.success': '¡Mensaje enviado con éxito! Te responderé pronto.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con ❤️ por Fernando Perez'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'I create exceptional digital experiences by combining clean code, intuitive design, and innovative solutions to solve real problems.',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Contact',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about creating digital solutions',
    'about.description': 'I\'m a Full Stack developer with experience in creating modern and scalable web applications. I specialize in React, Node.js and cloud technologies.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.clients': 'Satisfied Clients',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies and tools I master',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.tools': 'Tools',
    'skills.soft': 'Soft Skills',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Some of my most recent work',
    'projects.all': 'All',
    'projects.web': 'Web',
    'projects.mobile': 'Mobile',
    'projects.viewProject': 'View Project',
    'projects.viewCode': 'View Code',
    
    // Contact
    'contact.title': 'Let\'s Work Together!',
    'contact.subtitle': 'Have a project in mind? Want to collaborate or just chat about technology? I\'d love to hear from you!',
    'contact.info': 'Contact Information',
    'contact.availability': 'Availability',
    'contact.follow': 'Follow Me',
    'contact.sendMessage': 'Send Me a Message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.selectSubject': 'Select a subject',
    'contact.newProject': 'New Project',
    'contact.collaboration': 'Collaboration',
    'contact.consultation': 'Technical Consultation',
    'contact.other': 'Other',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Tell me about your project or inquiry...',
    'contact.success': 'Message sent successfully! I\'ll get back to you soon.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with ❤️ by Fernando Perez'
  }
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 
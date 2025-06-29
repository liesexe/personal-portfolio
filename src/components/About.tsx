import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const experiences = [
    {
      year: '2023 - Presente',
      title: 'Desarrollador Full Stack Senior',
      company: 'Empresa Tech',
      description: 'Liderando el desarrollo de aplicaciones web escalables usando React, Node.js y AWS.'
    },
    {
      year: '2021 - 2023',
      title: 'Desarrollador Frontend',
      company: 'Startup Innovadora',
      description: 'Desarrollé interfaces de usuario modernas y responsivas con React y TypeScript.'
    },
    {
      year: '2019 - 2021',
      title: 'Desarrollador Junior',
      company: 'Agencia Digital',
      description: 'Colaboré en proyectos web diversos usando JavaScript, HTML, CSS y frameworks modernos.'
    }
  ]

  const education = [
    {
      year: '2015 - 2019',
      degree: 'Ingeniería de Sistemas',
      school: 'Universidad Nacional del Callao',
      description: 'Especialización en desarrollo de software y tecnologías web.'
    }
  ]

  const stats = [
    { number: '3+', label: t('about.experience') },
    { number: '50+', label: t('about.projects') },
    { number: '30+', label: t('about.clients') }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            {t('about.subtitle')}
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-10">
          {t('about.description')}
        </p>
        {/* Estadísticas */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Grid de 2 columnas */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Columna Izquierda: Información Personal y Educación */}
          <div className="space-y-10">
            {/* Información Personal */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Información Personal</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Ubicación:</strong> Pucallpa, Perú</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> fernando.javier97@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Disponibilidad:</strong> Abierto a nuevas oportunidades</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Idiomas:</strong> Español (Nativo), Inglés (Avanzado)</span>
                </div>
              </div>
            </div>
            {/* Educación */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Educación</h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{item.year}</div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{item.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Columna Derecha: Experiencia Laboral */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Experiencia Laboral</h3>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{experience.year}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{experience.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{experience.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
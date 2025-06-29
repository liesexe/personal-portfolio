import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: t('skills.database'),
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'Firebase', level: 75 }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Vercel', level: 80 },
        { name: 'Figma', level: 60 },
        { name: 'Postman', level: 85 }
      ]
    }
  ]

  const softSkills = [
    { name: 'Comunicación', level: 90 },
    { name: 'Trabajo en Equipo', level: 85 },
    { name: 'Resolución de Problemas', level: 88 },
    { name: 'Gestión de Tiempo', level: 80 },
    { name: 'Aprendizaje Continuo', level: 95 },
    { name: 'Adaptabilidad', level: 85 }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Habilidades Técnicas */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            {t('skills.soft')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Certificaciones
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold mb-2">AWS Certified Developer</h4>
              <p className="text-blue-100 text-sm">Amazon Web Services</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-semibold mb-2">React Developer</h4>
              <p className="text-green-100 text-sm">Meta</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white text-center">
              <div className="text-3xl mb-3">📜</div>
              <h4 className="font-semibold mb-2">TypeScript Master</h4>
              <p className="text-purple-100 text-sm">Microsoft</p>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-300">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Tecnologías Dominadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Satisfacción del Cliente</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 
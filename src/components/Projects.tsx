import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('projects.all') },
    { id: 'web', label: t('projects.web') },
    { id: 'mobile', label: t('projects.mobile') }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness tracking application with workout planning, progress tracking, and social features for sharing achievements.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data, location-based forecasts, and interactive charts for weather visualization.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard for scheduling posts, analyzing engagement, and managing multiple accounts.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      description: 'A food delivery application with restaurant listings, order tracking, payment processing, and delivery management.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white dark:bg-gray-700 p-1 rounded-lg shadow-lg">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    {t('projects.viewProject')}
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
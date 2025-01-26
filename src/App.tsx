import React, { useState } from 'react';
import { Code2, MonitorDot, Wrench, ChevronRight, Users, BarChart, Mail, Phone, MapPin, Github, Twitter, Linkedin, Clock, Rocket, Puzzle as PuzzlePiece, Award, Globe } from 'lucide-react';
import { translations } from './translations';

function App() {
  const [budget, setBudget] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [language, setLanguage] = useState('fr');
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-indigo-600">Madigitech</h1>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#home" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors">
                {t.nav.home}
              </a>
              <a href="#services" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors">
                {t.nav.services}
              </a>
              <a href="#about" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors">
                {t.nav.contact}
              </a>
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex items-center text-gray-900 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                <Globe className="h-5 w-5 mr-1" />
                {language.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Digital Technology Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
              <span className="block">{t.hero.title1}</span>
              <span className="block text-indigo-600 mt-2">{t.hero.title2}</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                {t.hero.cta1}
              </a>
              <a href="#services" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors">
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
            alt="Technology Pattern"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefits cards remain the same */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{t.benefits.efficiency.title}</h3>
              <p className="mt-2 text-gray-600">{t.benefits.efficiency.description}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Rocket className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{t.benefits.growth.title}</h3>
              <p className="mt-2 text-gray-600">{t.benefits.growth.description}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <PuzzlePiece className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{t.benefits.custom.title}</h3>
              <p className="mt-2 text-gray-600">{t.benefits.custom.description}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{t.benefits.expertise.title}</h3>
              <p className="mt-2 text-gray-600">{t.benefits.expertise.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t.services.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{t.services.subtitle}</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative h-48 -mx-8 -mt-8 mb-8 rounded-t-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015"
                  alt="Web Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/10"></div>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{t.services.web.title}</h3>
              <p className="mt-4 text-gray-600">{t.services.web.description}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {t.services.web.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-700">
                {t.services.learnMore} <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Software Development */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative h-48 -mx-8 -mt-8 mb-8 rounded-t-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070"
                  alt="Software Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/10"></div>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <MonitorDot className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{t.services.software.title}</h3>
              <p className="mt-4 text-gray-600">{t.services.software.description}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {t.services.software.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-700">
                {t.services.learnMore} <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Digital Tools */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative h-48 -mx-8 -mt-8 mb-8 rounded-t-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                  alt="Digital Tools"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/10"></div>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Wrench className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{t.services.tools.title}</h3>
              <p className="mt-4 text-gray-600">{t.services.tools.description}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {t.services.tools.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-700">
                {t.services.learnMore} <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2068"
            alt="Office Environment"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t.testimonials.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{t.testimonials.subtitle}</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-600 italic">{t.testimonials.testimonial1.text}</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{t.testimonials.testimonial1.author}</p>
                <p className="text-gray-600">{t.testimonials.testimonial1.position}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-600 italic">{t.testimonials.testimonial2.text}</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{t.testimonials.testimonial2.author}</p>
                <p className="text-gray-600">{t.testimonials.testimonial2.position}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
            alt="Team Collaboration"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">{t.about.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{t.about.subtitle}</p>
          </div>
          <div className="mt-16">
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>{t.about.description1}</p>
              <p className="mt-4">{t.about.description2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Modern Building"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t.contact.title}</h2>
              <p className="mt-4 text-lg text-gray-600">{t.contact.subtitle}</p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">contact@madigitech.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">+1 438 779 0402</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">130 -1200 Blvd. Saint-Martin O, Laval, QC  H7S 2E4 </span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.contact.form.name}</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.contact.form.email}</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">{t.contact.form.service.label}</label>
                  <select
                    id="service"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">{t.contact.form.service.placeholder}</option>
                    {Object.entries(t.contact.form.service.options).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700">{t.contact.form.budget.label}</label>
                  <select
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">{t.contact.form.budget.placeholder}</option>
                    {Object.entries(t.contact.form.budget.options).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.contact.form.message.label}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder={t.contact.form.message.placeholder}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-indigo-400">Madigitech</h3>
              <p className="mt-4 text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">{t.footer.quickLinks}</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">{t.nav.home}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">{t.nav.services}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">{t.nav.about}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">{t.footer.followUs}</h4>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

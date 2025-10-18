"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Moon, Sun, Menu, X, Mail, Linkedin, Twitter, Github, Award, Users, Target, Briefcase, ChevronRight, Send, ExternalLink } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'leadership', 'achievements', 'vision', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'vision', label: 'Vision' },
    { id: 'contact', label: 'Contact' },
  ]

  const leadershipRoles = [
    {
      title: 'Chief Executive Officer',
      organization: 'Innovation Corp',
      period: '2020 - Present',
      description: 'Leading strategic initiatives and driving organizational growth across multiple markets.'
    },
    {
      title: 'Board Member',
      organization: 'Tech Advisory Council',
      period: '2019 - Present',
      description: 'Providing strategic guidance on technology adoption and digital transformation.'
    },
    {
      title: 'Senior Director',
      organization: 'Global Solutions Ltd',
      period: '2015 - 2020',
      description: 'Managed cross-functional teams and delivered enterprise-level solutions.'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Excellence in Leadership',
      description: 'Recognized for outstanding leadership and innovation in business transformation.',
      year: '2023'
    },
    {
      icon: Users,
      title: 'Team Building Award',
      description: 'Built and mentored high-performing teams across multiple organizations.',
      year: '2022'
    },
    {
      icon: Target,
      title: 'Strategic Innovation',
      description: 'Implemented cutting-edge strategies resulting in 200% growth.',
      year: '2021'
    },
    {
      icon: Briefcase,
      title: 'Industry Recognition',
      description: 'Featured in leading business publications for transformative work.',
      year: '2020'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              PK Lade
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-secondary text-secondary-foreground shadow-md'
                      : 'hover:bg-muted hover:shadow-sm hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="default"
                size="sm"
                className="ml-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://ladestack.in" target="_blank" rel="noopener noreferrer">
                  Main Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-2 hover:bg-muted hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-muted hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-muted hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-secondary text-secondary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://ladestack.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
              >
                Main Website
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Professional Portfolio</Badge>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Praveenkumar Lade
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Visionary Leader | Strategic Innovator | Change Catalyst
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('about')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore My Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of experience in leadership and strategic innovation, I have dedicated my career to driving transformative change and fostering excellence across diverse industries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach combines visionary thinking with practical execution, empowering teams to achieve extraordinary results while maintaining a strong focus on sustainable growth and innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of collaborative leadership and the importance of creating environments where talent thrives and innovation flourishes.
                </p>
              </div>
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-primary p-1 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                      alt="Professional Portrait"
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Leadership Journey</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
            <div className="space-y-6">
              {leadershipRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-l-secondary hover:scale-[1.02] hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                        <p className="text-lg text-secondary font-semibold">{role.organization}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">{role.period}</Badge>
                    </div>
                    <p className="text-muted-foreground">{role.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Key Achievements</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 hover:border-secondary/50">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="mb-3 bg-secondary/20 text-secondary-foreground">{achievement.year}</Badge>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Philosophy Section */}
      <section id="vision" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Vision & Philosophy</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-transparent border-2 border-secondary/20 hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create a future where innovation, sustainability, and human potential converge to build organizations that not only succeed but also contribute meaningfully to society. I envision a world where leadership is defined by empathy, strategic foresight, and the courage to challenge the status quo.
                </p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-4 text-primary">Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe that true leadership is about empowering others to discover their own greatness. Success is measured not just by achievements, but by the positive impact we create and the legacy we leave behind. Continuous learning, adaptability, and integrity form the foundation of my approach to both professional and personal growth.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Get In Touch</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
            <Card className="p-8 hover:shadow-2xl transition-shadow duration-300">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" className="focus:shadow-md transition-shadow duration-300" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="focus:shadow-md transition-shadow duration-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="What's this about?" className="focus:shadow-md transition-shadow duration-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" rows={6} placeholder="Your message..." className="focus:shadow-md transition-shadow duration-300" />
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:shadow-xl hover:scale-[1.02] transition-all duration-300" size="lg">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground mb-4">Connect with me</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon" className="hover:shadow-lg hover:scale-110 hover:border-secondary transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:shadow-lg hover:scale-110 hover:border-secondary transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:shadow-lg hover:scale-110 hover:border-secondary transition-all duration-300">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:shadow-lg hover:scale-110 hover:border-secondary transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Visit our main website:</span>
              <a
                href="https://ladestack.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-secondary hover:underline hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                ladestack.in
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Praveenkumar Lade. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Brain, 
  GraduationCap, 
  Users, 
  Heart, 
  BookOpen, 
  Target, 
  Zap, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useUser } from './context/UserContext';
import { RoleSelectionPage } from './components/auth/RoleSelectionPage';
import { LoginPage } from './components/auth/LoginPage';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import ParentDashboard from './pages/dashboard/ParentDashboard';
import { Button } from './components/ui/Button';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { ScrollRevealSection } from './components/ScrollRevealSection';
import {BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
return (
  <div classname="App">
    {
<>
 
</>
      
    }
  
  
  </div>
):
  
}
const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/choose-role');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20 theme-transition">
      {/* Header */}
      <header className="glass-effect border-b border-white/20 dark:border-gray-800/20 theme-transition sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg glow-effect">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">Rafiq</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button onClick={handleGetStarted} className="hover-lift glow-effect">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 mix-blend-normal filter blur-[128px]"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 mix-blend-normal filter blur-[128px]"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 px-4 py-2 rounded-full border border-pink-500/20 mb-6">
                <Sparkles className="h-4 w-4 text-pink-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  AI-Powered Learning Revolution
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition">
                Meet{' '}
                <span className="gradient-text">Rafiq</span>
                <br />
                Your All-in-One Learning Companion
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed theme-transition">
                A new way to learn, teach, and parent – built for today's world of distractions. 
                Bringing calm, focus, and progress back into education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="hover-lift glow-effect text-lg px-8 py-4"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="hover-lift text-lg px-8 py-4"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: '10K+', label: 'Active Learners' },
                { number: '95%', label: 'Success Rate' },
                { number: '24/7', label: 'AI Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 theme-transition">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ScrollRevealSection>
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Why Choose Rafiq?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experience the future of education with our AI-powered platform designed for students, teachers, and parents.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Target className="h-8 w-8" />}
                title="Personalized Learning"
                description="AI adapts to your unique learning style, pace, and goals for maximum effectiveness."
                delay={0.1}
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8" />}
                title="Instant Feedback"
                description="Get real-time insights and corrections to accelerate your learning journey."
                delay={0.2}
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8" />}
                title="Safe Environment"
                description="A distraction-free, secure space designed for focused learning and growth."
                delay={0.3}
              />
              <FeatureCard
                icon={<BookOpen className="h-8 w-8" />}
                title="Rich Content Library"
                description="Access thousands of curated lessons, exercises, and educational resources."
                delay={0.4}
              />
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Collaborative Learning"
                description="Connect with peers, teachers, and mentors in a supportive community."
                delay={0.5}
              />
              <FeatureCard
                icon={<Heart className="h-8 w-8" />}
                title="Family Insights"
                description="Parents stay connected with beautiful progress cards and AI-powered guidance."
                delay={0.6}
              />
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Role-Based Benefits */}
      <ScrollRevealSection>
        <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-purple-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Built for Everyone
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: 'Students',
                  description: 'Personalized learning paths, AI tutoring, and distraction-free study environments.',
                  features: ['Smart study planner', 'AI tutor & mentor', 'Progress tracking', 'Gamified learning'],
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Users,
                  title: 'Teachers',
                  description: 'Powerful tools for classroom management, student analytics, and automated feedback.',
                  features: ['Student analytics', 'Automated grading', 'Lesson planning', 'Performance insights'],
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Heart,
                  title: 'Parents',
                  description: 'Stay connected with your child\'s learning journey through beautiful progress cards.',
                  features: ['Progress cards', 'Learning insights', 'AI guidance', 'Achievement tracking'],
                  gradient: 'from-pink-500 to-purple-500'
                }
              ].map((role, index) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="glass-effect-strong p-8 rounded-3xl hover-lift"
                  >
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 shadow-lg glow-effect`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 theme-transition">
                      {role.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 theme-transition">
                      {role.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {role.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 theme-transition">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* Testimonials */}
      <ScrollRevealSection>
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                What Our Users Say
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                role="Parent"
                content="Rafiq has transformed how my daughter approaches learning. The AI tutor is like having a personal teacher available 24/7."
                delay={0.1}
              />
              <TestimonialCard
                name="Michael Chen"
                role="High School Teacher"
                content="The analytics and insights help me understand each student's needs better. It's revolutionized my classroom management."
                delay={0.2}
              />
              <TestimonialCard
                name="Emma Rodriguez"
                role="College Student"
                content="I've never been more motivated to learn. The personalized study plans and instant feedback keep me engaged and on track."
                delay={0.3}
              />
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      {/* CTA Section */}
      <ScrollRevealSection>
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect-strong p-12 rounded-3xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 theme-transition">
                Join thousands of learners, teachers, and families who are already experiencing the future of education.
              </p>
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="hover-lift glow-effect text-lg px-12 py-4"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </ScrollRevealSection>
    </div>
  );
};

function App() {
  const { role } = useUser();

  return (
    <Routes>
      {/* Default route shows landing page */}
      <Route path="/" element={<LandingPage />} />
      
      {/* Role selection route */}
      <Route path="/choose-role" element={<RoleSelectionPage />} />
      
      {/* Login route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected dashboard routes */}
      <Route
        path="/dashboard/student"
        element={role === "student" ? <StudentDashboard /> : <Navigate to="/" replace />}
      />
      <Route
        path="/dashboard/teacher"
        element={role === "teacher" ? <TeacherDashboard /> : <Navigate to="/" replace />}
      />
      <Route
        path="/dashboard/parent"
        element={role === "parent" ? <ParentDashboard /> : <Navigate to="/" replace />}
      />

      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
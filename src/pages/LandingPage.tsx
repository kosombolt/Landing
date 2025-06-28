import React from 'react';
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
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/FeatureCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ScrollRevealSection } from '../components/ScrollRevealSection';
import { ThemeProvider } from '../components/ThemeProvider';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/choose-role');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/choose-role');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20 theme-transition">
        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20 dark:border-gray-800/20 theme-transition"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg glow-effect">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl gradient-text">Rafiq</span>
              </motion.div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 theme-transition font-medium">
                  Features
                </a>
                <a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 theme-transition font-medium">
                  Testimonials
                </a>
                <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 theme-transition font-medium">
                  Pricing
                </a>
                <Button variant="ghost" onClick={handleLogin}>
                  Sign In
                </Button>
                <Button onClick={handleSignup}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-6">
                  <Sparkles className="h-4 w-4 text-pink-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 theme-transition">
                    AI-Powered Learning Companion
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition text-balance">
                  Your All-in-One
                  <span className="gradient-text block">Learning Companion</span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed theme-transition">
                  A new way to learn, teach, and parent – built for today's world of distractions. 
                  Bringing calm, focus, and progress back into education.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg hover-lift glow-effect"
                  onClick={handleGetStarted}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg hover-lift"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Hero Image/Demo */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="glass-effect-strong p-8 rounded-3xl shadow-2xl hover-lift">
                <div className="aspect-video bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg glow-effect">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 theme-transition">
                      Interactive Demo
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 theme-transition">
                      Experience Rafiq's AI-powered learning interface
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <ScrollRevealSection>
          <section id="features" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Designed for Every Learner
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto theme-transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Whether you're a student, teacher, or parent, Rafiq adapts to your unique needs
                </motion.p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                <FeatureCard
                  icon={<GraduationCap className="h-8 w-8" />}
                  title="For Students"
                  description="Smart study planner, AI tutor, and distraction-free learning environment designed to help you achieve your academic goals."
                  delay={0}
                />
                <FeatureCard
                  icon={<Users className="h-8 w-8" />}
                  title="For Teachers"
                  description="Streamline your teaching with AI-powered insights, automated feedback, and comprehensive student analytics."
                  delay={0.1}
                />
                <FeatureCard
                  icon={<Heart className="h-8 w-8" />}
                  title="For Parents"
                  description="Stay connected with your child's learning journey through beautiful progress cards and AI-powered insights."
                  delay={0.2}
                />
                <FeatureCard
                  icon={<BookOpen className="h-8 w-8" />}
                  title="Personalized Learning"
                  description="AI adapts to your learning style, pace, and preferences to create a truly personalized educational experience."
                  delay={0.3}
                />
                <FeatureCard
                  icon={<Target className="h-8 w-8" />}
                  title="Goal Tracking"
                  description="Set, track, and achieve your learning goals with intelligent progress monitoring and milestone celebrations."
                  delay={0.4}
                />
                <FeatureCard
                  icon={<Shield className="h-8 w-8" />}
                  title="Safe & Secure"
                  description="Your data is protected with enterprise-grade security, ensuring a safe learning environment for all ages."
                  delay={0.5}
                />
              </div>
            </div>
          </section>
        </ScrollRevealSection>

        {/* Testimonials Section */}
        <ScrollRevealSection>
          <section id="testimonials" className="py-20 px-6 bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-pink-950/10 dark:to-purple-950/10 theme-transition">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Loved by Learners Everywhere
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto theme-transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  See what students, teachers, and parents are saying about Rafiq
                </motion.p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                  name="Sarah Chen"
                  role="High School Student"
                  content="Rafiq helped me improve my grades by 40% in just one semester. The AI tutor explains things in a way that actually makes sense!"
                  delay={0}
                />
                <TestimonialCard
                  name="Mr. Rodriguez"
                  role="Math Teacher"
                  content="The analytics dashboard gives me insights into my students' learning that I never had before. It's revolutionized how I teach."
                  delay={0.1}
                />
                <TestimonialCard
                  name="Jennifer Park"
                  role="Parent of Two"
                  content="Finally, a way to stay involved in my kids' education without being overwhelming. The progress cards are beautiful and informative."
                  delay={0.2}
                />
              </div>
            </div>
          </section>
        </ScrollRevealSection>

        {/* CTA Section */}
        <ScrollRevealSection>
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect-strong p-12 rounded-3xl shadow-2xl hover-lift"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg glow-effect">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 theme-transition">
                  Ready to Transform Your Learning?
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 theme-transition">
                  Join thousands of students, teachers, and parents who are already experiencing the future of education.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="px-8 py-4 text-lg hover-lift glow-effect"
                    onClick={handleGetStarted}
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free to start • No credit card required</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollRevealSection>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-200/50 dark:border-gray-800/50 theme-transition">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg gradient-text">Rafiq</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 theme-transition">
                <a href="#privacy" className="hover:text-pink-500 dark:hover:text-pink-400 theme-transition">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-pink-500 dark:hover:text-pink-400 theme-transition">
                  Terms of Service
                </a>
                <a href="#contact" className="hover:text-pink-500 dark:hover:text-pink-400 theme-transition">
                  Contact
                </a>
              </div>
              
              <div className="text-sm text-gray-500 dark:text-gray-500 theme-transition">
                © 2025 Rafiq. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
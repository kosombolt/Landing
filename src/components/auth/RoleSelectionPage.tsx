import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Brain, 
  GraduationCap, 
  Users, 
  Heart, 
  ArrowRight,
  BookOpen,
  Award,
  Home
} from 'lucide-react';
import { Button } from '../ui/Button';
import { StudentDataForm } from './forms/StudentDataForm';
import { TeacherDataForm } from './forms/TeacherDataForm';
import { ParentDataForm } from './forms/ParentDataForm';

type UserRole = 'student' | 'teacher' | 'parent';

interface RoleSelectionPageProps {
  onClose?: () => void;
}

const roles = [
  {
    id: 'student' as UserRole,
    title: 'Student',
    subtitle: 'I want to learn and grow',
    description: 'Access your personalized learning dashboard, track progress, and get AI-powered help with your studies.',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Smart study planner',
      'AI tutor & mentor',
      'Progress tracking',
      'Distraction-free interface'
    ]
  },
  {
    id: 'teacher' as UserRole,
    title: 'Teacher',
    subtitle: 'I want to inspire and educate',
    description: 'Streamline your teaching with AI-powered insights, automated feedback, and comprehensive student analytics.',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Student analytics dashboard',
      'AI-powered feedback',
      'Content management',
      'Class performance insights'
    ]
  },
  {
    id: 'parent' as UserRole,
    title: 'Parent',
    subtitle: 'I want to support my child',
    description: 'Stay connected with your child\'s learning journey through beautiful progress cards and AI-powered insights.',
    icon: Heart,
    gradient: 'from-pink-500 to-purple-500',
    features: [
      'Family progress cards',
      'Learning insights',
      'AI parenting guidance',
      'Achievement tracking'
    ]
  }
];

export const RoleSelectionPage: React.FC<RoleSelectionPageProps> = ({ onClose }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showDataForm, setShowDataForm] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setShowDataForm(true);
  };

  const handleBackToRoles = () => {
    setShowDataForm(false);
    setSelectedRole(null);
  };

  const renderDataForm = () => {
    if (!selectedRole) return null;

    switch (selectedRole) {
      case 'student':
        return <StudentDataForm onBack={handleBackToRoles} onClose={onClose} />;
      case 'teacher':
        return <TeacherDataForm onBack={handleBackToRoles} onClose={onClose} />;
      case 'parent':
        return <ParentDataForm onBack={handleBackToRoles} onClose={onClose} />;
      default:
        return null;
    }
  };

  if (showDataForm) {
    return renderDataForm();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20 flex items-center justify-center p-6 theme-transition">
      {/* Escape Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 h-12 w-12 rounded-full glass-effect shadow-lg hover:shadow-xl theme-transition flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-110 active:scale-95 transition-all duration-150"
        >
          <X className="h-6 w-6" />
        </button>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 mix-blend-normal filter blur-[128px] animate-pulse animation-delay-200" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 mix-blend-normal filter blur-[128px] animate-pulse animation-delay-800" />
      </div>

      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg glow-effect">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <span className="font-bold text-3xl gradient-text">
              Rafiq
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 theme-transition">
            Choose Your Path
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 theme-transition max-w-2xl mx-auto">
            Tell us who you are so we can personalize your Rafiq experience
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden"
              >
                <div 
                  className="glass-effect-strong p-8 rounded-3xl hover:glass-effect theme-transition hover-lift cursor-pointer h-full transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => handleRoleSelect(role.id)}
                >
                  
                  {/* Gradient Background */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${role.gradient} opacity-10 group-hover:opacity-20 rounded-full theme-transition animate-float`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center bg-gradient-to-br ${role.gradient} text-white rounded-2xl shadow-lg glow-effect group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 theme-transition">
                      {role.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 theme-transition">
                      {role.subtitle}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed theme-transition">
                      {role.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3">
                      {role.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                          className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 theme-transition"
                        >
                          <div className={`h-2 w-2 bg-gradient-to-r ${role.gradient} rounded-full group-hover:scale-125 transition-transform duration-300`} />
                          <span className="group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover indicator */}
                    <div className="mt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <span>Click to continue</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[BookOpen, Award, Home].map((Icon, index) => (
                  <div
                    key={index}
                    className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center"
                  >
                    <Icon className="h-4 w-4 text-pink-500" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
              Not sure which role fits you best? Don't worry! You can always change your preferences later in your account settings.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
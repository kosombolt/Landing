import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Calendar, 
  TrendingUp, 
  Award, 
  Clock,
  Brain,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';

const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 theme-transition">
      {/* Header */}
      <header className="glass-effect border-b border-white/20 dark:border-gray-800/20 theme-transition">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg glow-effect">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-gray-100 theme-transition">
                  Welcome back, Alex!
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                  Ready to continue your learning journey?
                </p>
              </div>
            </div>
            <Button className="hover-lift glow-effect">
              <BookOpen className="h-4 w-4 mr-2" />
              Start Learning
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-effect-strong hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">85%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Goals Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-effect-strong hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">24h</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Study Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="glass-effect-strong hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">12</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Achievements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass-effect-strong hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">92%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Average Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Courses */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Current Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Advanced Mathematics', progress: 78, color: 'from-blue-500 to-cyan-500' },
                      { name: 'Physics', progress: 65, color: 'from-green-500 to-emerald-500' },
                      { name: 'Computer Science', progress: 92, color: 'from-purple-500 to-pink-500' },
                      { name: 'Literature', progress: 84, color: 'from-orange-500 to-red-500' }
                    ].map((course, index) => (
                      <div key={index} className="glass-effect p-4 rounded-xl hover-lift-subtle">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">
                            {course.name}
                          </h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                            {course.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 theme-transition">
                          <div 
                            className={`bg-gradient-to-r ${course.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Today's Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { time: '9:00 AM', subject: 'Math Study Session', type: 'study' },
                      { time: '11:00 AM', subject: 'Physics Lab', type: 'lab' },
                      { time: '2:00 PM', subject: 'Literature Review', type: 'review' },
                      { time: '4:00 PM', subject: 'CS Project Work', type: 'project' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 glass-effect rounded-lg hover-lift-subtle">
                        <div className="h-2 w-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 theme-transition">
                            {item.subject}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { title: 'Math Master', description: 'Completed 50 math problems', icon: Star },
                      { title: 'Study Streak', description: '7 days in a row', icon: CheckCircle },
                      { title: 'Quick Learner', description: 'Finished course early', icon: Award }
                    ].map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 glass-effect rounded-lg hover-lift-subtle">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 theme-transition">
                              {achievement.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
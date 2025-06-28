import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Award, 
  Clock,
  Brain,
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';

const TeacherDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-green-950/20 theme-transition">
      {/* Header */}
      <header className="glass-effect border-b border-white/20 dark:border-gray-800/20 theme-transition">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg glow-effect">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-gray-100 theme-transition">
                  Good morning, Ms. Johnson!
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                  Your students are making great progress today
                </p>
              </div>
            </div>
            <Button className="hover-lift glow-effect">
              <Users className="h-4 w-4 mr-2" />
              View All Classes
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
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">124</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Total Students</p>
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
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">8</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Active Courses</p>
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
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">87%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Avg Performance</p>
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
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 theme-transition">45</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Assignments Due</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Class Performance */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Class Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { class: 'Mathematics 101', students: 28, avgScore: 85, trend: 'up', color: 'from-blue-500 to-cyan-500' },
                      { class: 'Physics Advanced', students: 22, avgScore: 78, trend: 'up', color: 'from-green-500 to-emerald-500' },
                      { class: 'Calculus II', students: 31, avgScore: 92, trend: 'up', color: 'from-purple-500 to-pink-500' },
                      { class: 'Statistics', students: 25, avgScore: 76, trend: 'down', color: 'from-orange-500 to-red-500' }
                    ].map((classData, index) => (
                      <div key={index} className="glass-effect p-4 rounded-xl hover-lift-subtle">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">
                              {classData.class}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                              {classData.students} students
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900 dark:text-gray-100 theme-transition">
                              {classData.avgScore}%
                            </span>
                            <TrendingUp className={`h-4 w-4 ${classData.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 theme-transition">
                          <div 
                            className={`bg-gradient-to-r ${classData.color} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${classData.avgScore}%` }}
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
                    Today's Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { time: '9:00 AM', class: 'Mathematics 101', room: 'Room 204', status: 'current' },
                      { time: '11:00 AM', class: 'Physics Advanced', room: 'Lab 3', status: 'upcoming' },
                      { time: '2:00 PM', class: 'Calculus II', room: 'Room 301', status: 'upcoming' },
                      { time: '4:00 PM', class: 'Statistics', room: 'Room 205', status: 'upcoming' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 glass-effect rounded-lg hover-lift-subtle">
                        <div className={`h-2 w-2 rounded-full ${
                          item.status === 'current' ? 'bg-green-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 theme-transition">
                            {item.class}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                            {item.time} • {item.room}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { type: 'success', message: '5 students completed assignments early', icon: CheckCircle },
                      { type: 'warning', message: '3 students need extra help', icon: AlertCircle },
                      { type: 'info', message: 'New analytics report available', icon: BarChart3 }
                    ].map((alert, index) => {
                      const Icon = alert.icon;
                      const colorMap = {
                        success: 'from-green-500 to-emerald-500',
                        warning: 'from-yellow-500 to-orange-500',
                        info: 'from-blue-500 to-cyan-500'
                      };
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 glass-effect rounded-lg hover-lift-subtle">
                          <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${colorMap[alert.type as keyof typeof colorMap]} flex items-center justify-center`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900 dark:text-gray-100 theme-transition">
                              {alert.message}
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

export default TeacherDashboard;
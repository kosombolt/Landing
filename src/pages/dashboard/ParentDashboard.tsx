import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  TrendingUp, 
  Calendar, 
  Award, 
  Clock,
  Brain,
  BookOpen,
  Star,
  Target,
  Users
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';

const ParentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-pink-950/20 theme-transition">
      {/* Header */}
      <header className="glass-effect border-b border-white/20 dark:border-gray-800/20 theme-transition">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg glow-effect">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900 dark:text-gray-100 theme-transition">
                  Welcome, Sarah!
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                  Your children are doing amazing this week
                </p>
              </div>
            </div>
            <Button className="hover-lift glow-effect">
              <Heart className="h-4 w-4 mr-2" />
              Family Progress
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Children Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-effect-strong hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                    E
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 theme-transition">Emma (Grade 8)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Mathematics & Science</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Overall Progress</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 theme-transition">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 theme-transition">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500" style={{ width: '88%' }} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>Improved 12% this month</span>
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                    L
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 theme-transition">Liam (Grade 5)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Reading & Writing</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400 theme-transition">Overall Progress</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 theme-transition">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 theme-transition">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500" style={{ width: '76%' }} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>Improved 8% this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Recent Learning Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { 
                        child: 'Emma', 
                        activity: 'Completed Algebra Quiz', 
                        score: '95%', 
                        time: '2 hours ago',
                        subject: 'Mathematics',
                        color: 'from-blue-500 to-cyan-500'
                      },
                      { 
                        child: 'Liam', 
                        activity: 'Finished Reading Assignment', 
                        score: '88%', 
                        time: '4 hours ago',
                        subject: 'Literature',
                        color: 'from-green-500 to-emerald-500'
                      },
                      { 
                        child: 'Emma', 
                        activity: 'Science Lab Report', 
                        score: '92%', 
                        time: '1 day ago',
                        subject: 'Science',
                        color: 'from-purple-500 to-pink-500'
                      },
                      { 
                        child: 'Liam', 
                        activity: 'Creative Writing Exercise', 
                        score: '85%', 
                        time: '2 days ago',
                        subject: 'Writing',
                        color: 'from-orange-500 to-red-500'
                      }
                    ].map((activity, index) => (
                      <div key={index} className="glass-effect p-4 rounded-xl hover-lift-subtle">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center text-white font-bold text-sm`}>
                              {activity.child.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-gray-100 theme-transition">
                                {activity.activity}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                                {activity.child} • {activity.subject}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-900 dark:text-gray-100 theme-transition">
                              {activity.score}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                              {activity.time}
                            </p>
                          </div>
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
            {/* Weekly Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Weekly Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { child: 'Emma', goal: 'Complete 5 math exercises', progress: 80, color: 'from-blue-500 to-cyan-500' },
                      { child: 'Liam', goal: 'Read 3 chapters', progress: 67, color: 'from-green-500 to-emerald-500' },
                      { child: 'Emma', goal: 'Science project research', progress: 90, color: 'from-purple-500 to-pink-500' }
                    ].map((goal, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`h-6 w-6 rounded-lg bg-gradient-to-br ${goal.color} flex items-center justify-center text-white font-bold text-xs`}>
                              {goal.child.charAt(0)}
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 theme-transition">
                              {goal.goal}
                            </span>
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                            {goal.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 theme-transition">
                          <div 
                            className={`bg-gradient-to-r ${goal.color} h-1.5 rounded-full transition-all duration-500`}
                            style={{ width: `${goal.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
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
                      { child: 'Emma', achievement: 'Math Star', description: 'Perfect score on quiz', icon: Star },
                      { child: 'Liam', achievement: 'Reading Champion', description: 'Finished book early', icon: BookOpen },
                      { child: 'Emma', achievement: 'Science Explorer', description: 'Excellent lab work', icon: Target }
                    ].map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 glass-effect rounded-lg hover-lift-subtle">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 theme-transition">
                              {achievement.child}: {achievement.achievement}
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

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="glass-effect-strong">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-100 theme-transition">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start hover-lift">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Study Time
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover-lift">
                      <Users className="h-4 w-4 mr-2" />
                      Contact Teachers
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover-lift">
                      <Award className="h-4 w-4 mr-2" />
                      View Full Reports
                    </Button>
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

export default ParentDashboard;
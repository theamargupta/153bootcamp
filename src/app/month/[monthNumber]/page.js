import Link from "next/link";
import { notFound } from "next/navigation";
import learningPlan from "../../../../153-days-compressed-plan.json";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, ArrowRight, Rocket, ChevronLeft, ChevronRight, BarChart3, Zap, Calendar, Target, Trophy, BookOpen, Code } from "lucide-react";

// Data Constants
const MONTH_THEMES = [
  {
    name: "Foundation",
    colors: "from-pink-300 to-rose-300",
    darkColors: "dark:from-rose-600 dark:to-pink-700",
    bgGradient: "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
    borderColor: "border-rose-300 dark:border-rose-700",
    accentColor: "text-rose-600 dark:text-rose-400",
    buttonGradient: "from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
  },
  {
    name: "Framework",
    colors: "from-sky-400 to-blue-500",
    darkColors: "dark:from-sky-600 dark:to-blue-700",
    bgGradient: "bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20",
    borderColor: "border-sky-300 dark:border-sky-700",
    accentColor: "text-sky-600 dark:text-sky-400",
    buttonGradient: "from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600"
  },
  {
    name: "Advanced",
    colors: "from-purple-400 to-indigo-500",
    darkColors: "dark:from-purple-600 dark:to-indigo-700",
    bgGradient: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    borderColor: "border-purple-300 dark:border-purple-700",
    accentColor: "text-purple-600 dark:text-purple-400",
    buttonGradient: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
  },
  {
    name: "Professional",
    colors: "from-emerald-400 to-green-500",
    darkColors: "dark:from-emerald-600 dark:to-green-700",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
    borderColor: "border-emerald-300 dark:border-emerald-700",
    accentColor: "text-emerald-600 dark:text-emerald-400",
    buttonGradient: "from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
  },
  {
    name: "Mastery",
    colors: "from-orange-400 to-red-500",
    darkColors: "dark:from-orange-600 dark:to-red-700",
    bgGradient: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    borderColor: "border-orange-300 dark:border-orange-700",
    accentColor: "text-orange-600 dark:text-orange-400",
    buttonGradient: "from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
  }
];

// Helper functions
const getDaysInRange = (range) => {
  const [start, end] = range.split('-').map(Number);
  return [start, end];
};

const getProjectCount = (dailyTopics) => {
  return dailyTopics.filter(day => day.topic.toLowerCase().includes('project')).length;
};

const getDayCount = (range) => {
  const [start, end] = getDaysInRange(range);
  return end - start + 1;
};

export default function MonthPage({ params }) {
  const monthNumber = parseInt(params.monthNumber);
  
  if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 5) {
    notFound();
  }

  const monthKey = `month_${monthNumber}`;
  const monthData = learningPlan.detailed_plan[monthKey];
  const overviewData = learningPlan.overview.months.find(m => m.month === monthNumber);
  
  if (!monthData || !overviewData) {
    notFound();
  }

  const monthNames = overviewData?.calendar_month || `Month ${monthNumber}`;
  const theme = MONTH_THEMES[monthNumber - 1];
  const [startDay] = getDaysInRange(overviewData.days_range);

  return (
    <div className={`min-h-screen ${theme.bgGradient}`}>
      {/* Navigation Header */}
      <nav className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild className="hover:bg-white/60 dark:hover:bg-slate-800/60">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              {monthNumber > 1 && (
                <Button variant="outline" asChild className={`${theme.borderColor} ${theme.accentColor} hover:bg-white/60 dark:hover:bg-slate-800/60`}>
                  <Link href={`/month/${monthNumber - 1}`} className="flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Previous Month
                  </Link>
                </Button>
              )}
              {monthNumber < 5 && (
                <Button asChild className={`bg-gradient-to-r ${theme.buttonGradient} text-white border-0 hover:scale-105 transition-transform`}>
                  <Link href={`/month/${monthNumber + 1}`} className="flex items-center gap-2">
                    Next Month
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className={`bg-gradient-to-br ${theme.colors} ${theme.darkColors} text-white py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors px-4 py-2">
            Month {monthNumber} of 5 • {theme.name} Track
          </Badge>
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
            {monthNames}
          </h1>
          <h2 className="text-2xl mb-6 opacity-95 font-semibold">
            {monthData.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="w-4 h-4" />
              <span>Days {overviewData.days_range}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Target className="w-4 h-4" />
              <span>Focus: {overviewData.focus}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Quick Start */}
        <div className="text-center mb-16">
          <Card className={`max-w-lg mx-auto ${theme.bgGradient} border-2 ${theme.borderColor} shadow-xl hover:shadow-2xl transition-shadow`}>
            <CardContent className="p-8">
              <div className={`w-16 h-16 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${theme.accentColor}`}>Ready to Begin?</h3>
              <Button asChild size="lg" className={`bg-gradient-to-r ${theme.buttonGradient} text-white border-0 text-lg px-8 h-14 rounded-full shadow-lg hover:scale-105 transition-all duration-300`}>
                <Link href={`/day/${startDay}`} className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Start Day {startDay}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Daily Topics Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className={`w-16 h-16 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${theme.colors} bg-clip-text text-transparent`}>
              Daily Learning Topics
            </h3>
            <p className="text-lg text-muted-foreground">
              {getDayCount(overviewData.days_range)} days of intensive learning await you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthData.daily_topics.map((dayData, index) => (
              <DayCard 
                key={dayData.day} 
                dayData={dayData} 
                theme={theme}
                index={index}
              />
            ))}
          </div>
        </div>

        <Separator className={`my-16 bg-gradient-to-r from-transparent via-${theme.accentColor.split(' ')[0].split('-')[1]}-300 to-transparent h-px opacity-60`} />

        {/* Month Summary */}
        <Card className={`shadow-2xl ${theme.bgGradient} border-2 ${theme.borderColor} hover:shadow-3xl transition-shadow`}>
          <CardHeader className="text-center">
            <div className={`w-16 h-16 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className={`text-3xl font-bold ${theme.accentColor}`}>
              Month {monthNumber} Analytics
            </CardTitle>
            <CardDescription className="text-base">
              Your learning journey at a glance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: getDayCount(overviewData.days_range),
                  label: "Learning Days",
                  icon: Calendar,
                  color: "text-blue-600"
                },
                {
                  value: getProjectCount(monthData.daily_topics),
                  label: "Projects",
                  icon: Code,
                  color: "text-green-600"
                },
                {
                  value: `${Math.round((monthNumber / 5) * 100)}%`,
                  label: "Course Progress",
                  icon: Trophy,
                  color: "text-purple-600"
                },
                {
                  value: "High",
                  label: "Intensity",
                  icon: Zap,
                  color: "text-orange-600"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors">
                  <div className={`w-12 h-12 bg-gradient-to-br ${theme.colors} rounded-xl mx-auto mb-3 flex items-center justify-center shadow-md`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-2xl font-bold ${theme.accentColor} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function DayCard({ dayData, theme, index }) {
  const isProject = dayData.topic.toLowerCase().includes('project');
  const isQuiz = dayData.topic.toLowerCase().includes('quiz') || dayData.topic.toLowerCase().includes('revision') || dayData.topic.toLowerCase().includes('assessment');
  const isCombined = dayData.combined_topics && dayData.combined_topics.length > 1;
  
  const badgeConfigs = [
    { condition: isProject, text: "Project", className: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700" },
    { condition: isQuiz, text: "Assessment", className: "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700" },
    { condition: isCombined, text: "Combined", className: "bg-sky-500/20 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700" }
  ];
  
  return (
    <Link href={`/day/${dayData.day}`}>
      <Card className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 ${theme.borderColor} bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-slate-800/90 hover:scale-[1.02]`}>
        <div className={`w-full h-1 bg-gradient-to-r ${theme.colors} rounded-t-lg`} />
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className={`w-12 h-12 bg-gradient-to-br ${theme.colors} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform`}>
              {dayData.day}
            </div>
            <div className="flex flex-col gap-1">
              {badgeConfigs.map((badge, badgeIndex) => 
                badge.condition && (
                  <Badge 
                    key={badgeIndex} 
                    variant="outline" 
                    className={`text-xs px-2 py-1 hover:scale-105 transition-transform ${badge.className}`}
                  >
                    {badge.text}
                  </Badge>
                )
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 space-y-3">
          <CardTitle className={`text-sm leading-5 group-hover:${theme.accentColor} transition-colors font-semibold`}>
            {dayData.topic}
          </CardTitle>
          
          {dayData.date && (
            <CardDescription className="text-xs flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-full px-3 py-1">
              <Calendar className="w-3 h-3" />
              {new Date(dayData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </CardDescription>
          )}
          
          {isCombined && (
            <CardDescription className="text-xs flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(Math.min(dayData.combined_topics.length, 3))].map((_, i) => (
                  <div key={i} className={`w-4 h-4 bg-gradient-to-br ${theme.colors} rounded-full border-2 border-white dark:border-slate-800`} />
                ))}
              </div>
              <span>{dayData.combined_topics.length} topics combined</span>
            </CardDescription>
          )}
          
          <div className="pt-2">
            <ArrowRight className={`w-4 h-4 ${theme.accentColor} group-hover:translate-x-1 transition-transform ml-auto`} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

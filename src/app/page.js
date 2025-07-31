import Link from "next/link";
import learningPlan from "../../153-days-compressed-plan.json";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

import { BookOpen, Wrench, Clock, Target, Star, Zap, Rocket, Dumbbell, ArrowRight, Calendar, Trophy, Users, Code } from "lucide-react";

// Data Constants
const STATS_DATA = [
  {
    number: "153",
    label: "Intensive Days",
    icon: BookOpen,
    color: "text-sky-500",
    bgColor: "bg-sky-100 dark:bg-sky-900/20",
    borderColor: "border-sky-300",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    number: "15+",
    label: "Major Projects",
    icon: Wrench,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    borderColor: "border-emerald-300",
    gradient: "from-emerald-400 to-green-500"
  },
  {
    number: "2-3",
    label: "Hours Daily",
    icon: Clock,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    borderColor: "border-purple-300",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    number: "100%",
    label: "Job Ready",
    icon: Target,
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    borderColor: "border-orange-300",
    gradient: "from-orange-400 to-red-500"
  }
];

const MONTH_THEME_DATA = [
  {
    color: "from-rose-200 to-rose-300",
    darkColor: "dark:from-rose-700 dark:to-rose-800",
    icon: Star,
    accentColor: "text-rose-600",
    borderColor: "hover:border-rose-300",
    bgGradient: "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20"
  },
  {
    color: "from-sky-200 to-sky-300",
    darkColor: "dark:from-sky-700 dark:to-sky-800",
    icon: Zap,
    accentColor: "text-sky-600",
    borderColor: "hover:border-sky-300",
    bgGradient: "bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20"
  },
  {
    color: "from-purple-200 to-purple-300",
    darkColor: "dark:from-purple-700 dark:to-purple-800",
    icon: Rocket,
    accentColor: "text-purple-600",
    borderColor: "hover:border-purple-300",
    bgGradient: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
  },
  {
    color: "from-emerald-200 to-emerald-300",
    darkColor: "dark:from-emerald-700 dark:to-emerald-800",
    icon: Dumbbell,
    accentColor: "text-emerald-600",
    borderColor: "hover:border-emerald-300",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
  },
  {
    color: "from-orange-200 to-orange-300",
    darkColor: "dark:from-orange-700 dark:to-orange-800",
    icon: Target,
    accentColor: "text-orange-600",
    borderColor: "hover:border-orange-300",
    bgGradient: "bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20"
  }
];

const HERO_BADGES = [
  { text: "2-3 hours daily", variant: "outline", color: "border-blue-300 text-blue-700 dark:text-blue-300" },
  { text: "Combined topics", variant: "outline", color: "border-purple-300 text-purple-700 dark:text-purple-300" },
  { text: "Maximum efficiency", variant: "outline", color: "border-green-300 text-green-700 dark:text-green-300" }
];

// Helper function
const getDaysInRange = (range) => {
  const [start, end] = range.split('-').map(Number);
  return end - start + 1;
};

export default function Home() {
  const { overview, title, description } = learningPlan;

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:scale-105 transition-transform">
              🚀 Transform Your Career in 5 Months
            </Badge>
            <h1 className="text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            
            {/* Key Metrics Card */}
            <Card className="max-w-2xl mx-auto mb-10 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-purple-200 dark:border-purple-800 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      Aug - Dec 2025
                    </div>
                    <p className="text-sm text-muted-foreground">5 Intensive Months</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      153 Days
                    </div>
                    <p className="text-sm text-muted-foreground">High-Impact Learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild size="lg" className="text-lg px-8 h-14 rounded-full shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 hover:scale-105 transition-all duration-300">
              <Link href="/day/1" className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Path Overview */}
      <section className="py-20 bg-gradient-to-br from-white/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Your 5-Month Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              From beginner to <span className="font-semibold text-primary">job-ready frontend developer</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {HERO_BADGES.map((badge, index) => (
                <Badge key={index} variant={badge.variant} className={`${badge.color} hover:scale-105 transition-transform px-4 py-2`}>
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {overview.months.map((month) => (
              <MonthCard key={month.month} month={month} />
            ))}
          </div>

          <Separator className="my-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px" />

          {/* Statistics Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Program Highlights
            </h3>
            <p className="text-lg text-muted-foreground">
              Everything you need to succeed in your coding journey
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS_DATA.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MonthCard({ month }) {
  const theme = MONTH_THEME_DATA[month.month - 1];
  const IconComponent = theme.icon;
  
  return (
    <Link href={`/month/${month.month}`}>
      <Card className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border-2 ${theme.borderColor} ${theme.bgGradient} hover:scale-[1.02]`}>
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${theme.color} ${theme.darkColor} rounded-2xl flex items-center justify-center text-white text-xl shadow-xl hover:shadow-2xl transition-shadow`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <CardTitle className={`text-lg group-hover:${theme.accentColor} transition-colors font-bold`}>
                {month.calendar_month}
              </CardTitle>
              <CardDescription className="text-sm">
                Days {month.days_range}
              </CardDescription>
            </div>
            <Badge variant="secondary" className={`ml-auto ${theme.accentColor} bg-white/20 backdrop-blur-sm border-0`}>
              Month {month.month}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <h4 className={`font-bold text-base leading-tight ${theme.accentColor} group-hover:scale-105 transition-transform`}>
            {month.focus}
          </h4>
          
          <Card className="border-2 border-dashed border-muted bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Key Milestone:
                </p>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {month.key_milestone}
              </p>
            </CardContent>
          </Card>
          
          <div className="flex justify-between items-center text-sm pt-2 bg-white/40 dark:bg-slate-800/40 rounded-lg p-3 backdrop-blur-sm">
            <span className="flex items-center gap-2 font-medium text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {getDaysInRange(month.days_range)} days
            </span>
            <ArrowRight className={`w-4 h-4 ${theme.accentColor} group-hover:translate-x-1 transition-transform`} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function StatsCard({ number, label, icon: IconComponent, color, bgColor, borderColor, gradient }) {
  return (
    <Card className={`text-center hover:shadow-xl transition-all duration-300 hover:scale-105 ${bgColor} border-2 ${borderColor} hover:border-opacity-50`}>
      <CardContent className="p-6 space-y-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl mx-auto flex items-center justify-center shadow-lg`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div className={`text-3xl font-bold ${color} bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {number}
        </div>
        <div className="text-sm font-medium text-muted-foreground">
          {label}
        </div>
        <div className={`w-full h-1 bg-gradient-to-r ${gradient} rounded-full opacity-30`} />
      </CardContent>
    </Card>
  );
}

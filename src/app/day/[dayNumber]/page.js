import Link from "next/link";
import { notFound } from "next/navigation";
import learningPlan from "../../../../153-days-compressed-plan.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  BookOpen,
  CheckCircle,
  Target,
  Lightbulb,
  FileText,
  ListChecks,
  PartyPopper,
  ArrowRight,
  Calendar,
  Trophy,
  Clock,
  Zap,
  PlayCircle,
  ExternalLink,
} from "lucide-react";

// Data Constants
const DAY_THEMES = [
  {
    colors: "from-rose-400 to-pink-500",
    accentColor: "text-rose-600",
    bgGradient:
      "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
  },
  {
    colors: "from-sky-400 to-blue-500",
    accentColor: "text-sky-600",
    bgGradient:
      "bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20",
  },
  {
    colors: "from-purple-400 to-indigo-500",
    accentColor: "text-purple-600",
    bgGradient:
      "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
  },
  {
    colors: "from-emerald-400 to-green-500",
    accentColor: "text-emerald-600",
    bgGradient:
      "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20",
  },
  {
    colors: "from-orange-400 to-red-500",
    accentColor: "text-orange-600",
    bgGradient:
      "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
  },
];

const LEARNING_RESOURCES = [
  {
    title: "MDN: Frontend Developer Path",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer",
    icon: BookOpen,
  },
  {
    title: "Frontend Roadmap 2024",
    url: "https://roadmap.sh/frontend",
    icon: Target,
  },
  {
    title: "What is Frontend Development?",
    url: "https://www.freecodecamp.org/news/what-is-frontend-development/",
    icon: Lightbulb,
  },
];

const DAY_1_TASKS = [
  {
    task: 'Watch: "What is Frontend Development?" (20 min)',
    time: "20 min",
    icon: PlayCircle,
  },
  {
    task: "Read: Career paths overview (15 min)",
    time: "15 min",
    icon: BookOpen,
  },
  {
    task: "Set up: Create your learning journal (10 min)",
    time: "10 min",
    icon: FileText,
  },
  {
    task: "Reflect: Write 3 reasons why you want to learn frontend (15 min)",
    time: "15 min",
    icon: Target,
  },
];

const getThemeForMonth = (monthNumber) =>
  DAY_THEMES[(monthNumber - 1) % DAY_THEMES.length];

export default function DayPage({ params }) {
  const dayNumber = parseInt(params.dayNumber);

  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 153) {
    notFound();
  }

  // Find which month this day belongs to and get the topic
  const dayData = findDayData(dayNumber);

  if (!dayData) {
    notFound();
  }

  const theme = getThemeForMonth(dayData.month);

  return (
    <div className={`min-h-screen ${theme.bgGradient}`}>
      {/* Navigation Header */}
      <nav className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              asChild
              className="hover:bg-white/60 dark:hover:bg-slate-800/60"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              {dayNumber > 1 && (
                <Button
                  variant="outline"
                  asChild
                  className={`border-2 ${theme.accentColor} hover:bg-white/60 dark:hover:bg-slate-800/60`}
                >
                  <Link
                    href={`/day/${dayNumber - 1}`}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous Day
                  </Link>
                </Button>
              )}
              {dayNumber < 153 && (
                <Button
                  asChild
                  className={`bg-gradient-to-r ${theme.colors} text-white border-0 hover:scale-105 transition-transform`}
                >
                  <Link
                    href={`/day/${dayNumber + 1}`}
                    className="flex items-center gap-2"
                  >
                    Next Day
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Day Header */}
        <div className="text-center mb-12">
          <div
            className={`w-20 h-20 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl`}
          >
            <div className="text-2xl font-bold text-white">{dayNumber}</div>
          </div>
          <Badge
            variant="secondary"
            className={`mb-4 ${theme.accentColor} bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-2`}
          >
            Day {dayNumber} • {dayData.date} • {dayData.monthName}
          </Badge>
          <h1
            className={`text-5xl font-bold mb-4 bg-gradient-to-r ${theme.colors} bg-clip-text text-transparent`}
          >
            {dayData.topic}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            <span className={`font-semibold ${theme.accentColor}`}>
              Month {dayData.month}:
            </span>{" "}
            {dayData.monthFocus}
          </p>
          {dayData.combined_topics && dayData.combined_topics.length > 0 && (
            <Card
              className={`max-w-3xl mx-auto bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-${
                theme.accentColor.split(" ")[0].split("-")[1]
              }-200 shadow-xl`}
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-center gap-2">
                  <BookOpen className={`w-5 h-5 ${theme.accentColor}`} />
                  Today&apos;s Combined Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {dayData.combined_topics.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`${theme.accentColor} hover:scale-105 transition-transform`}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Learning Content */}
        <Card
          className={`mb-8 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-${
            theme.accentColor.split(" ")[0].split("-")[1]
          }-200`}
        >
          <CardContent className="p-8">
            <LearningContent
              dayNumber={dayNumber}
              topic={dayData.topic}
              theme={theme}
            />
          </CardContent>
        </Card>

        {/* Progress Tracker */}
        <Card
          className={`shadow-2xl ${theme.bgGradient} border-2 border-${
            theme.accentColor.split(" ")[0].split("-")[1]
          }-200`}
        >
          <CardHeader className="text-center">
            <div
              className={`w-16 h-16 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
            >
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <CardTitle className={`text-2xl font-bold ${theme.accentColor}`}>
              Your Learning Progress
            </CardTitle>
            <CardDescription>
              Day {dayNumber} of your 153-day journey
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Overall Progress</span>
                <span className={`font-bold text-lg ${theme.accentColor}`}>
                  {Math.round((dayNumber / 153) * 100)}%
                </span>
              </div>
              <Progress value={(dayNumber / 153) * 100} className="h-4" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-2 flex items-center justify-center`}
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className={`text-xl font-bold ${theme.accentColor}`}>
                  {dayNumber}
                </div>
                <div className="text-xs text-muted-foreground">Days Done</div>
              </div>

              <div className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-2 flex items-center justify-center`}
                >
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className={`text-xl font-bold ${theme.accentColor}`}>
                  {153 - dayNumber}
                </div>
                <div className="text-xs text-muted-foreground">Days Left</div>
              </div>

              <div className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${theme.colors} rounded-full mx-auto mb-2 flex items-center justify-center`}
                >
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className={`text-xl font-bold ${theme.accentColor}`}>
                  {dayData.month}
                </div>
                <div className="text-xs text-muted-foreground">
                  Current Month
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function findDayData(dayNumber) {
  const { detailed_plan, overview } = learningPlan;

  // Find the day across all months
  for (let monthNumber = 1; monthNumber <= 5; monthNumber++) {
    const monthKey = `month_${monthNumber}`;
    const monthDetails = detailed_plan[monthKey];
    const monthData = overview.months.find((m) => m.month === monthNumber);

    if (monthDetails && monthDetails.daily_topics) {
      const dayTopic = monthDetails.daily_topics.find(
        (d) => d.day === dayNumber
      );

      if (dayTopic) {
        return {
          month: monthNumber,
          monthName: monthData?.calendar_month || `Month ${monthNumber}`,
          monthFocus: monthData?.focus || monthDetails.title,
          topic: dayTopic.topic,
          date: dayTopic.date,
          combined_topics: dayTopic.combined_topics || [],
          dayInMonth:
            dayNumber -
            parseInt(monthData?.days_range?.split("-")[0] || "1") +
            1,
        };
      }
    }
  }

  return null;
}

function getMonthName(monthNumber) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber - 1] || "Unknown";
}

function LearningContent({ dayNumber, topic, theme }) {
  // Generic content for other days
  return (
    <div className="space-y-8">
      <div>
        <h2
          className={`text-2xl font-bold mb-4 flex items-center gap-2 ${theme.accentColor}`}
        >
          <BookOpen className="w-6 h-6" />
          Today&apos;s Learning Focus
        </h2>
        <Card
          className={`${theme.bgGradient} border-2 border-${
            theme.accentColor.split(" ")[0].split("-")[1]
          }-200 p-6`}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            {topic}
          </p>
        </Card>
      </div>

      <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50 dark:border-yellow-700 dark:from-yellow-950/50 dark:to-orange-950/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
            <FileText className="w-5 h-5" />
            Content Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-700 dark:text-yellow-300 leading-relaxed">
            Detailed learning content for Day {dayNumber} is being prepared.
            Check back soon for comprehensive tutorials, exercises, and
            resources!
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button
          asChild
          size="lg"
          className={`bg-gradient-to-r ${theme.colors} text-white border-0 text-lg px-8 h-12 rounded-full shadow-lg hover:scale-105 transition-all duration-300`}
        >
          <Link
            href={dayNumber < 153 ? `/day/${dayNumber + 1}` : "/"}
            className="flex items-center gap-2"
          >
            {dayNumber < 153 ? (
              <>
                Continue to Day {dayNumber + 1}
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                🎓 Back to Home - You&apos;re Done!
                <CheckCircle className="w-5 h-5" />
              </>
            )}
          </Link>
        </Button>
      </div>
    </div>
  );
}

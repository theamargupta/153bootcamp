import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code2,
  Calendar,
  Award,
  Star,
  Users,
  BookOpen,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Data Constants
const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "Delhi 110031",
    color: "text-green-600"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9540508292",
    color: "text-blue-600"
  },
  {
    icon: Mail,
    label: "Email",
    value: "theamargupta.tech@gmail.com",
    color: "text-purple-600"
  }
];

const SKILLS_DATA = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Google Apps Script"],
    variant: "default",
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Vue", "Next.js", "Nuxt.js", "Remix", "PWA"],
    variant: "secondary",
    bgColor: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
  {
    category: "State Management",
    skills: ["Redux", "Redux-saga", "Thunk", "Vuex"],
    variant: "outline",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    category: "UI Libraries",
    skills: ["Material-UI", "Tailwind CSS", "Bootstrap", "Ant Design", "Chakra UI"],
    variant: "destructive",
    bgColor: "bg-gradient-to-r from-orange-500 to-red-500"
  }
];

const EXPERIENCE_DATA = [
  {
    title: "React Frontend Engineer",
    company: "Agusta Software Pvt. Ltd.",
    period: "Sep 2022 – Present",
    location: "Delhi, India",
    description: "Developing and deploying dynamic web applications using React, crafting responsive UI components, integrating APIs, and managing state with Redux.",
    isCurrent: true,
    color: "border-green-500"
  },
  {
    title: "React Frontend Engineer",
    company: "Spark Eighteen Lifestyle Pvt. Ltd.",
    period: "Dec 2021 – Aug 2022",
    location: "Delhi, India",
    description: "Worked on a cloud-based project management platform, enabling efficient task allocation, team collaboration, and project monitoring.",
    isCurrent: false,
    color: "border-blue-500"
  },
  {
    title: "React & Vue Frontend Engineer",
    company: "LoudCloud Systems Private Limited",
    period: "Dec 2020 – Oct 2021",
    location: "Mumbai, India",
    description: "Contributed to a service-based e-commerce platform for fashion and lifestyle brand, focusing on personalized recommendations and seamless shopping experiences.",
    isCurrent: false,
    color: "border-purple-500"
  },
  {
    title: "React & Vue Frontend Engineer",
    company: "Les Transformations Learning Pvt. Ltd.",
    period: "Sep 2020 – Nov 2020",
    location: "Gurgaon, India",
    description: "Developed an online learning management system (LMS) for a leading EdTech company to provide interactive and engaging educational experiences.",
    isCurrent: false,
    color: "border-orange-500"
  }
];

const PROJECTS_DATA = [
  {
    title: "Devfrend Startup",
    description: "High-velocity web development startup offering premium websites for $99. Built with Next.js, Bootstrap, and Supabase, serving 500+ clients globally with 1-2 day delivery.",
    technologies: ["Next.js", "Bootstrap", "React", "JavaScript", "Supabase", "Vercel"],
    url: "http://devfrend.com/",
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    title: "InvenSync360",
    description: "Modern real-time inventory and billing automation tool for SMBs. Features Google Sheets integration, PDF billing, and analytics dashboard with NextAuth security.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Google API", "Vercel"],
    url: "https://inven-sync360.vercel.app/",
    gradient: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    title: "Ecommerce Seller Admin Panel",
    description: "Feature-rich dashboard for multichannel sellers managing products across Flipkart, Amazon, Meesho. Built with React, Redux, and Material UI with Auth0 security.",
    technologies: ["React", "Redux", "Auth0", "GraphQL", "Material UI", "JavaScript"],
    url: "https://ecomadmin.vercel.app",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600"
  }
];

const SOCIAL_LINKS = [
  {
    label: "Email Me",
    href: "mailto:theamargupta.tech@gmail.com",
    icon: Mail,
    variant: "default"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/theamargupta",
    icon: Linkedin,
    variant: "outline"
  },
  {
    label: "GitHub",
    href: "https://github.com/theamargupta",
    icon: Github,
    variant: "outline"
  },
  {
    label: "Portfolio",
    href: "https://amargupta.tech",
    icon: ExternalLink,
    variant: "outline"
  }
];

// Reusable Components
const ContactInfoItem = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-start gap-3">
    <Icon className={`w-4 h-4 mt-1 ${color}`} />
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-muted-foreground">{value}</p>
    </div>
  </div>
);

const SkillSection = ({ category, skills, variant, bgColor }) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-3 h-3 rounded-full ${bgColor}`}></div>
      <p className="text-sm font-medium">{category}</p>
    </div>
    <div className="flex flex-wrap gap-1">
      {skills.map((skill) => (
        <Badge key={skill} variant={variant} className="text-xs hover:scale-105 transition-transform">
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ title, company, period, location, description, isCurrent, color }) => (
  <div className={`border-l-4 ${color} pl-4 py-2`}>
    <div className="flex items-center gap-2 mb-2">
      {isCurrent && <Badge variant="default" className="bg-green-500">Current</Badge>}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground mb-1">{company}</p>
    <p className="text-xs text-muted-foreground mb-2">{period} | {location}</p>
    <p className="text-sm">{description}</p>
  </div>
);

const ProjectCard = ({ title, description, technologies, url, gradient }) => (
  <Card className="border-muted hover:shadow-lg transition-all duration-300 hover:scale-105 group">
    <CardContent className="p-4">
      <div className={`w-full h-2 rounded-t-lg ${gradient} mb-3`}></div>
      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <Badge
            key={tech}
            variant={index % 2 === 0 ? "outline" : "secondary"}
            className="text-xs"
          >
            {tech}
          </Badge>
        ))}
      </div>
      <Button size="sm" variant="outline" asChild className="hover:bg-primary hover:text-white transition-colors">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-3 h-3 mr-1" />
          View Project
        </a>
      </Button>
    </CardContent>
  </Card>
);

export const metadata = {
  title: "Meet Your Instructor - Amar Gupta | 153 Days of Code",
  description:
    "Learn about Amar Gupta, your instructor for the 153 Days of Code bootcamp. React Frontend Engineer with 6+ years of experience.",
};

export default function InstructorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Image src="https://i.ibb.co/FZw98qJ/Whats-App-Image-2025-08-01-at-04-51-49.jpg" alt="Amar Gupta" width={128} height={128} className="rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-white font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105" />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Meet Your Instructor
          </h1>
          <h2 className="text-2xl text-primary mb-2">Amar Gupta</h2>
          <p className="text-lg text-muted-foreground mb-6">
            React Frontend Engineer & Bootcamp Creator
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, variant }) => (
              <Button key={label} variant={variant} asChild className="hover:scale-105 transition-transform">
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              </Button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "6+", label: "Years Experience", color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/20" },
              { value: "50+", label: "Projects Built", color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/20" },
              { value: "100+", label: "Students Mentored", color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/20" },
              { value: "3.96/4", label: "College GPA", color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/20" }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-4 rounded-lg ${stat.bg} hover:scale-105 transition-transform`}>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {CONTACT_INFO.map((contact, index) => (
                  <ContactInfoItem key={index} {...contact} />
                ))}
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {SKILLS_DATA.map((skillData, index) => (
                  <SkillSection key={index} {...skillData} />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/20 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  About Your Instructor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to the <span className="font-semibold text-primary">153 Days of Code bootcamp!</span> I&apos;m Amar Gupta, a
                  passionate React Frontend Engineer with over <span className="font-semibold text-green-600">6+ years of
                  experience</span> in building dynamic web applications. I specialize
                  in developing responsive UI components, integrating APIs, and
                  managing complex state with Redux.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout my career, I&apos;ve worked with various companies from
                  startups to established organizations, building everything
                  from <span className="font-semibold text-blue-600">e-commerce platforms</span> to <span className="font-semibold text-purple-600">learning management systems</span>. I
                  believe in hands-on learning and practical application, which
                  is why this bootcamp focuses on real-world projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;ll be posting daily content, challenges, and insights to
                  help you master frontend development. My goal is to transform
                  you from a beginner to a <span className="font-semibold text-orange-600">job-ready developer</span> in just 153 days!
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-gradient-to-br from-white to-orange-50 dark:from-slate-800 dark:to-orange-900/20 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  {EXPERIENCE_DATA.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-purple-900/20 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-600" />
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {PROJECTS_DATA.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-to-br from-white to-cyan-50 dark:from-slate-800 dark:to-cyan-900/20 border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-l-blue-400 pl-4 py-2">
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                    Bachelor of Arts in Computer Science
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pgdav College (Delhi University)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2017 – 2020 | Delhi, India
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium text-green-600">GPA:</span> <span className="font-bold text-green-700">3.96/4.0</span>
                  </p>
                </div>
                <Separator className="bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="border-l-4 border-l-purple-400 pl-4 py-2">
                  <h3 className="font-semibold text-purple-700 dark:text-purple-300">Secondary School CBSE</h3>
                  <p className="text-sm text-muted-foreground">
                    Greenfields Public School
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2015 – 2017 | Delhi, India
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium text-orange-600">Class 12:</span> <span className="font-bold text-orange-700">85%</span> •{" "}
                    <span className="font-medium text-red-600">Class 10:</span> <span className="font-bold text-red-700">8.2 CGPA</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="bg-white dark:bg-slate-900 rounded-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Join me in this intensive <span className="font-semibold text-primary">153-day program</span> and transform into a
                    job-ready frontend developer!
                  </p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Link href="/day/1" className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Begin Day 1
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

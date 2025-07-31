import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  Code2,
  Heart,
  ExternalLink
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">153 Days of Code</h3>
                <p className="text-sm text-muted-foreground">Frontend Bootcamp</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your career with intensive frontend development training. 
              From beginner to job-ready in 153 days.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/instructor" className="text-muted-foreground hover:text-primary transition-colors">
                  Meet Your Instructor
                </Link>
              </li>
              <li>
                <Link href="/day/1" className="text-muted-foreground hover:text-primary transition-colors">
                  Start Learning
                </Link>
              </li>
              <li>
                <Link href="/month/1" className="text-muted-foreground hover:text-primary transition-colors">
                  Monthly Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Instructor Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Instructor</h4>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Amar Gupta</p>
              <p className="text-muted-foreground">React Frontend Engineer</p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91-9540508292</span>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                <a 
                  href="mailto:theamargupta.tech@gmail.com"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>theamargupta.tech@gmail.com</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                <a 
                  href="https://linkedin.com/in/theamargupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                <a 
                  href="https://github.com/theamargupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start p-0 h-auto">
                <a 
                  href="https://amargupta.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm"
                >
                  <Code2 className="h-4 w-4" />
                  <span>Portfolio</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} 153 Days of Code. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Amar Gupta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
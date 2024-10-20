// Icons
import {
  FileText,
  MessageSquare,
  Code,
  Briefcase,
  User,
  Mail,
  Trash2Icon,
} from "lucide-react";

// Components
import AboutMe from "@/components/Desktop/about-me";
import Resume from "@/components/Desktop/resume";
import Chatbot from "@/components/Desktop/chatbot";
import Skills from "@/components/Desktop/skills";
import Experiences from "@/components/Desktop/experiences";
import Contact from "@/components/Desktop/contact";
import Trash from "@/components/Desktop/trash";

export const apps = [
  { name: "About Me", icon: User, component: AboutMe },
  { name: "Resume", icon: FileText, component: Resume },
  { name: "Skills", icon: Code, component: Skills },
  { name: "Experiences", icon: Briefcase, component: Experiences },
  { name: "Chatbot", icon: MessageSquare, component: Chatbot },
  { name: "Contact", icon: Mail, component: Contact },
  { name: "Trash", icon: Trash2Icon, component: Trash },
];

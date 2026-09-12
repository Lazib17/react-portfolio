import {
  Globe,
  Server,
  Layers,
  Brain,
  Circle,
  MonitorSmartphone,
  Plug,
  Theater,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNextdotjs,
  SiExpo,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiHono,
  SiCloudflareworkers,
  SiSwagger,
  SiSqlite,
  SiSupabase,
  SiJson,
  SiGit,
  SiGithub,
  SiFigma,
  SiVscodium,
} from "react-icons/si";

const LUCIDE_ICONS = {
  Globe,
  Server,
  Layers,
  Brain,
  MonitorSmartphone,
  Plug,
  Theater,
};

const SIMPLE_ICONS = {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiCss3: SiCss,
  SiTailwindcss,
  SiNextdotjs,
  SiExpo,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiHono,
  SiCloudflareworkers,
  SiSwagger,
  SiSqlite,
  SiSupabase,
  SiJson,
  SiGit,
  SiGithub,
  SiFigma,
  SiVisualstudiocode: SiVscodium,
  FaJava,
  Theater,
  MonitorSmartphone,
  Plug,
  Brain,
};

export const getLucideIcon = (name) => LUCIDE_ICONS[name] ?? Circle;

export const getSimpleIcon = (name) => SIMPLE_ICONS[name] ?? SiGithub;

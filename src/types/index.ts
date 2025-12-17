import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  path: string;
  image: string;
  features: string[];
  process?: { title: string; description: string }[];
  indications?: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  image: string;
  doctolibUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Simplified for this demo
  category: string;
  date: string;
  author: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}
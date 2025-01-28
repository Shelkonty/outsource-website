import { TFunction } from "react-i18next";
export interface ContactProps {
  title: string;
  content: string;
  id: string;
  t: TFunction;
}

export interface ValidationTypeProps {
  type: string;
}

export type SiteType = 'landing' | 'businessCard' | 'corporate' | 'redesign' | 'consultation';

export type SiteTypeMap = {
  [K in SiteType]: string;
};

export const siteTypeMap: SiteTypeMap = {
  landing: 'Landing',
  businessCard: 'Business Card',
  corporate: 'Corporate',
  redesign: 'Website redesign',
  consultation: 'Need consultation'
};
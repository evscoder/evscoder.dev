import { copy, type SupportedLanguage } from "@/app/components/home/model/site-content";

export type Content = (typeof copy)[SupportedLanguage];

export type SectionProps = {
  content: Content;
};

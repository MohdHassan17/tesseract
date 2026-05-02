import {
  ResolvedHeroSection,
  ResolvedPlainContentSection,
} from "@/types/contentful";

export function isHeroSection(section: any): section is ResolvedHeroSection {
  return (
    "headline" in (section?.fields ?? {}) &&
    "mainHeading" in (section?.fields ?? {}) &&
    "subHeading" in (section?.fields ?? {})
  );
}

export function isPlainContentSection(
  section: any
): section is ResolvedPlainContentSection {
  return (
    "heading" in (section?.fields ?? {}) &&
    "paragraph" in (section?.fields ?? {})
  );
}
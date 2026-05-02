// Add these at the bottom of your existing contentful.ts

/* =========================
   Resolved Field Types
   (use these in components)
========================= */

export interface ResolvedHeroSectionFields {
  headline: string;
  mainHeading: string;
  subHeading: string;
}

export interface ResolvedHeadingFields {
  mainHeading: string;
  emphasisText: string;
}

export interface ResolvedButtonFields {
  title: string;
  href: string;
}

export interface ResolvedPlainContentSectionFields {
  title: string;
  heading: { fields: ResolvedHeadingFields };
  paragraph: string;
  button: { sys: { id: string }; fields: ResolvedButtonFields }[];
}

export interface ResolvedHeroSection {
  sys: { id: string; contentType: { sys: { id: "heroSection" } } };
  fields: ResolvedHeroSectionFields;
}

export interface ResolvedPlainContentSection {
  sys: { id: string; contentType: { sys: { id: "plainHeadingTextCta" } } };
  fields: ResolvedPlainContentSectionFields;
}

export interface ResolvedSEOFields {
  metaTitle: string;
  metaDescription: string;
}

export interface ResolvedHomePage {
  fields: {
    title: string;
    slug: string;
    section: (ResolvedHeroSection | ResolvedPlainContentSection)[];
    seo: { fields: ResolvedSEOFields };
  };
}
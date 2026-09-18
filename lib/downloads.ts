// Downloads center data model — modeled on explo.at's resource library:
// manuals / spec sheets / catalogue / media kit, grouped by category.
// TODO: Replace with real downloadable assets (PDF catalogue, product manuals, media kit).

export type DownloadItem = {
  label: string;
  href: string;
  date?: string;
};

export type DownloadGroup = {
  title: string;
  items: DownloadItem[];
};

export const downloadGroups: DownloadGroup[] = [
  {
    title: "Catalogue",
    items: [{ label: "TODO Product Catalogue (PDF)", href: "/downloads/catalogue.pdf" }]
  },
  {
    title: "Manuals",
    items: [{ label: "TODO Product Manual", href: "/downloads/manual-sample.pdf" }]
  },
  {
    title: "Media Kit",
    items: [{ label: "TODO Brand Logo Pack", href: "/downloads/logo-pack.zip" }]
  }
];

// Downloads center — Zhuxing Pyrotechnics resource library.

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
    title: "Company",
    items: [
      { label: "Zhuxing Company Profile (PDF)", href: "/downloads/zhuxing-company-profile.pdf" }
    ]
  },
  {
    title: "Safety & Compliance",
    items: [
      { label: "MSDS — Electric Igniter (PDF)", href: "/downloads/MSDS-electric-igniter.pdf" }
    ]
  }
];

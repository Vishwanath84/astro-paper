export const SITE = {
  website: "https://s-portfolio.vercel.ap", // replace this with your deployed domain
  author: "Shreya Khanduri",
  profile: "https://iitrpr.ac.in",
  desc: "PhD candidate at IIT Ropar studying rare nuclear decays. Her research focuses on improving experimental sensitivity via detector development and background suppression.",
  title: "Shreya Khanduri | Rare Decay Physics",
  ogImage: "astro-paper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/Vishwanath84/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

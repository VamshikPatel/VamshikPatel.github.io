import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://vamshikpatel.github.io/",
    title: "Vamshik Patel",
    description: "20-year-old B.Tech AI & ML student passionate about technology, history, football, and books.",
    author: "Vamshik Patel",
    profile: "https://vamshiktwt.vercel.app",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/VamshikPatel/VamshikPatel.github.io/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/VamshikPatel" },
    { name: "x",        url: "https://x.com/Vamshiktwt" },
    { name: "linkedin", url: "https://www.linkedin.com/in/vamshik-patela-es-686151327/" },
    { name: "mail",     url: "mailto:iamvamshik7@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});

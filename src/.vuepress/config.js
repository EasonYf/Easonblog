import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default {
  base: "/Easonblog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "EasonYF",
      description: "This is my Blog",
    },
  },

  theme,
  plugins: [

    // 搜索插件
    searchPlugin({
      //多语言支持
      locales: {
        '/': {
          placeholder: '搜索本站',
        },
      },
      // 热键支持
      hotKeys: ["command", "k"],
      // 最大推荐个数
      maxSuggestions: 7,
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
    // 只要把这个放进 config的plugins中就可以了 
  ],

 
  
  // Enable it with pwa
  // shouldPrefetch: false,
};

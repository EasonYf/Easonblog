import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "D:/web/前端/项目实战/myBlogs/node_modules/@vueuse/core/index.mjs";
import { useStyleTag } from "D:/web/前端/项目实战/myBlogs/node_modules/@vueuse/core/index.mjs";
import Badge from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("/public/icon/iconfont.css");
`);
    useScriptTag(`/public/icon/iconfont.js`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});

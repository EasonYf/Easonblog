import { defineClientConfig } from "@vuepress/client";
import VPCard from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import CodeTabs from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import Playground from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/web/前端/项目实战/myBlogs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {

  }
});

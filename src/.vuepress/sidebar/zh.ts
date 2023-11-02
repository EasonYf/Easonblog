import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  //前端的侧边栏
  "/demo/front-end/": [
    {
      text: "ajax",
      icon: "linter",
      collapsible: true,
      link: "/demo/front-end/",
      children: [
        {
          text: "客户端和服务器",
          icon: "write",
          link: "/demo/front-end/ajax/客户端和服务器.md",
        },
        {
          text: "跨域和JSONP",
          icon: "write",
          link: "/demo/front-end/ajax/跨域和JSONP.md",
        },
        {
          text: "ajax表单",
          icon: "write",
          link: "/demo/front-end/ajax/Ajax--表单.md",
        },
        {
          text: "Ajax 加强",
          icon: "write",
          link: "/demo/front-end/ajax/Ajax 加强.md",
        },
        {
          text: "HTTP加强",
          icon: "write",
          link: "/demo/front-end/ajax/HTTP加强.md",
        },
      ]
    }
  ],
  "/demo/algorithm": [
    {
      text: "C/C++基础",
      icon: "linter",
      collapsible: true,
      link: "/demo/algorithm",
      children:[
        {
          text: "变量、表达式与顺序语句",
          icon: "write",
          link: "/demo/algorithm/c/变量、表达式与顺序语句.md",
        }
      ]
    }
  ]

});

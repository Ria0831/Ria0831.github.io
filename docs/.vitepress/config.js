import sidebar from "./config/sideBar";
console.log(sidebar, "有吗");

export default {
  title: "一路向北", //站点标题
  description: "路", //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "少年等等我",
    logo: "/.vitepress/public/logo.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "分类", //默认显示
        ariaLabel: "分类", //用于识别的label
        items: [
          { text: "组件库", link: "/guide/" },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: "前端", link: "/article/vue/why/ym-1" },
        ],
      },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: sidebar,
  },
};

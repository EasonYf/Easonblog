export const categoryMap = {"category":{"/":{"path":"/category/","map":{"前端":{"path":"/category/%E5%89%8D%E7%AB%AF/","keys":["v-d914ec7c","v-b7e173e2","v-343a2816","v-4dec8caa","v-15f64fce"]}}}},"tag":{"/":{"path":"/tag/","map":{"前端":{"path":"/tag/%E5%89%8D%E7%AB%AF/","keys":["v-d914ec7c","v-b7e173e2","v-343a2816","v-4dec8caa","v-15f64fce"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });



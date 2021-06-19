/**
 * 路由表
 * @type {import ("vue-router").RouteRecordRaw[]}
 */

 export const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@v/common/NotFound.vue")
  },
  {
      path: "/",
      redirect: "/index"
  },
  {
    path: "/index",
    name: "ShowHome",
    component: () => import("@v/show/Body.vue"),
  },
  {
    path: "/swift",
    name: "ShowSwift",
    component: () => import("@v/show/Swift.vue")
  },
  {
    path: "/manage",
    name: "Manage",
    component: () => import("@v/manage/Index.vue"),
    children: [
      {
        path: "",
        redirect: "/manage/articles/1"
      },
      {
        path: "login",
        name: "ManageLogin",
        component: () => import("@v/manage/Login.vue")
      },
      {
        path: "editor",
        name: "ManageEditor",
        component: () => import("@v/manage/Editor.vue")
      },
      {
        path: "articles/:pageNum",
        name: "ManageArticle",
        component: () => import("@v/manage/Article.vue")
      },
      {
        path: "/details/:id",
        name: "Details",
        component: () => import("@v/details/Index.vue")
      }
    ]
  }
]           



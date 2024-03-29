import { useWarningNotice } from '@u/notification.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from "./routes.js"

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(to => {
  const token = localStorage.getItem("token")
  
  const isInManageRouterGroup = /^Manage(?!(Login))/.test(to.name)

  const isToLogin = !token && isInManageRouterGroup
  if(isToLogin) {
    useWarningNotice({ message: "Login First" })
    return { name: "ManageLogin" } 
  }
  return true
})

export default router
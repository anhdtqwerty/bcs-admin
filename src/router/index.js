import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'

const DEFAULT_PAGE_TITLE = 'LMS Manager'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  routes,
})

router.beforeEach((to, from, next) => {
  next(_authGuard(to))
})

router.afterEach((to) => {
  _setDocumentTitle(to.meta.title)
})

function _setDocumentTitle(title = DEFAULT_PAGE_TITLE) {
  document.title = title
}

function _authGuard(to) {
  if (!to.name) {
    return '/home'
  }

  let hasAuthRule = false
  let requriedAuth = false
  const {isAuthenticated} = store.state.auth

  for (let route of to.matched) {
    if (!Object.prototype.hasOwnProperty.call(route.meta, 'auth')) {
      continue
    }
    hasAuthRule = true
    if (route.meta.auth) {
      requriedAuth = true
      break
    }
  }

  return hasAuthRule ? (requriedAuth ? (isAuthenticated ? true : '/signin') : isAuthenticated && to.name !== 'resetPassword' ? '/home' : true) : true
}

export default router

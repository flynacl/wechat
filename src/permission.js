import router from './router'
import { getToken, setToken } from '@/utils/auth' // 验权

const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  let token = to.query.token;
  console.log(to)
  console.log(token)
  if (token) {
    setToken(token);
    next({path: to.path})
  } else {
    next()
  }
});

// router.afterEach(() => {
// })

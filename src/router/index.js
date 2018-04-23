import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/vue', name: 'HelloWorld', component: () => import('@/components/HelloWorld')},
    {
      path: '/', name: 'index', component: () => import('@/views/Layout'), redirect: '/home',
      // beforeEnter: (to, from, next) => {
        // window.location.href =
        //   'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1dd9305e7b5a2e6a&redirect_uri=http://192.168.50.97:8080/wechat/fetchAuthResult&response_type=code&scope=snsapi_base&state=http%3A%2F%2F192.168.50.97%3A8882%2F%23%2Fmy#wechat_redirect';
        // next({path: '/home',});
        // if (to.query.code) {
        //   next({
        //     path: '/home',
        //     query: {
        //       code: to.query.code
        //     }
        //   })
        // } else {
        //   next({path: '/home',});
        // }

      // },
      children: [
        {path: '/home', name: 'Home', component: () => import('@/views/Home')},
        {path: '/service', name: 'Service', component: () => import('@/views/Service')},
        {path: '/my', name: 'My', component: () => import('@/views/My')},
      ]
    },


  ]
})

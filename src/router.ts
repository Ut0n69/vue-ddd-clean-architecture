import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MemberList',
      component: () =>
        import(/* webpackChunkName: "MemberList" */ './Presentation/view/pages/MemberList.vue')
    }
  ]
})

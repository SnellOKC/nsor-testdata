/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import addpost from '@/components/AddPost'
import editpost from '@/components/EditPost'
import PHDetail from '@/components/PHDetail'
import BPSDetail from '@/components/BPSDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/add',
      component: addpost,
      name: 'addpost'
    },
    {
      path: '/posts/:id/edit',
      component: editpost,
      name: 'editpost'
    },
    {
      path: '/phdetail',
      name: 'PHDetail',
      component: PHDetail
    },
    {
      path: '/bpsdetail',
      name: 'BPSDetail',
      component: BPSDetail
    }
  ]
})
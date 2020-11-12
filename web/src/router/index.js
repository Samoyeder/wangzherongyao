import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/home/Home.vue'
import Article from '../views/article/Article.vue'
import Hero from '../views/hero/Hero.vue'
import Video from '../views/video/Video.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Main,
    children: [{
      path: '/',
      name: Home,
      component: Home
    }, {
      path: '/articles/:id',
      name: "article",
      component: Article,
      props: true
    }, {
      path: '/videos/:id',
      name: "video",
      component: Video,
      props: true
    }]
  }, {
    path: '/heroes/:id',
    name: "hero",
    component: Hero,
    props: true
  }

]

const router = new VueRouter({
  routes
})

export default router
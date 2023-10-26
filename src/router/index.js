import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import GallaryView from '../views/GallaryView.vue';
import ImageView from '../views/ImageView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'gallary',
    component: GallaryView,
  }, 
  {
    path:'/:id/:file',
    name: 'ImageView',
    component: ImageView,
    props: true 
  }
      
    
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

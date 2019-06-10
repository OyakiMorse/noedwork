import Vue from 'vue';
import Router from 'vue-router';
import UserProfile from './components/UserProfile';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/adminp',
      name: 'UserProfile',
      component: UserProfile,
    },

  ],
});

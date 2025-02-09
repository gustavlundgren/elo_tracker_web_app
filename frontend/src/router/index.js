import { createRouter, createWebHistory } from 'vue-router'
import PlayerLeaderboard from '../components/PlayerLeaderboard.vue'
import AddGame from '../components/AddGame.vue'
import MyProfile from '../components/MyProfile.vue'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import Slots from '../components/Slots.vue'

import { authState } from '../components/firebaseAuth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PlayerLeaderboard,
    },
    {
      path: "/add-game",
      name: "addgame",
      component: AddGame,
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: PlayerLeaderboard,
    },
    {
      path: "/my-profile",
      name: "myprofile",
      component: MyProfile,
    },
    {
      path: "/login",
      name: "loginpage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerpage",
      component: RegisterPage
    },
    {
      path: '/slots',
      name: 'slots',
      component: Slots,
    }

  ],
})

export default router

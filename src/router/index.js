import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
const Login = () => import("views/profile/Login")
const Profile = () => import("views/profile/Profile");
const Find = () => import("views/find/Find");
const Video = () => import("views/video/Video");
const Village = () => import("views/village/Village");
const SongList = () => import("views/songlist/SongList");
const PlayMusic = () => import("components/content/playmusic/PlayMusic");
const Search = () => import("views/search/Search");

const routes = [
  {
    path: '', // 访问空路由让它加载Home主页
    redirect: '/find', // 从‘’ 重定向到‘/find’ 解决router-link默认选中状态的问题
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    meta: {
      title: '发现'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '我的'
    },
    beforeEnter: (to, from, next) => {
      if(store.state.user?.isLogin) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/village',
    name: 'Village',
    component: Village,
    meta: {
      title: '云村'
    }
  },
  {
    path: '/video',
    name: 'Video',
    component: Video,
    meta: {
      title: '视频'
    }
  },
  {
    path: '/songlist',
    name: 'SongList',
    component: SongList,
    meta: {
      title: '歌单'
    }
  },
  {
    path: '/playmusic',
    name: 'PlayMusic',
    component: PlayMusic,
    meta: {
      title: '播放'
    }
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
    meta: {
      title: '搜索'
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 添加路由导航守卫：路由跳转之前
router.beforeEach((to, from, next) => {
  next();
  document.title = to.meta.title
})

export default router

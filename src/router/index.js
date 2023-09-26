import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Unitindex from "@/views/Units/Unitindex.vue";
import GroupIndex from "@/views/Group/GroupIndex.vue";
import Posts from "@/views/Group/Posts.vue";
import Events from "@/views/Group/Events.vue";
import Videos from "@/views/Group/Videos.vue";
import Discussion from "@/views/Group/Discussion.vue";
import Links from "@/views/Group/Links.vue";
import Index from "@/views/Dashboard/Index.vue";
import Profile from "@/views/Dashboard/Profile.vue";
import Mygroups from "@/views/Dashboard/Mygroups.vue";
import Mylinks from "@/views/Dashboard/Mylinks.vue";
import Myvideos from "@/views/Dashboard/Myvideos.vue";
import Mydiscussion from "@/views/Dashboard/Mydiscussion.vue";
import Login from "@/views/auth/Login.vue"
import Register from "@/views/auth/Register.vue"
import Group from "@/views/Group/Group.vue";
import Unit from "@/views/Units/Unit.vue";
import Notes from "@/views/Units/Notes.vue";
import Relevant_Videos from "@/views/Units/Relevant_Videos.vue";
import Relevant_Links from "@/views/Units/Relevant_Links.vue";
import AllUnits from "@/views/Units/AllUnits.vue";
import NotesRead from "@/views/Units/NotesRead.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/all_units',
      component: AllUnits,
    },
    {
      path: '/unit',
      component: Unit,
      children:[
        {
          path: '/unit',
          component: Unitindex,
        },
        {
          path: '/unit/notes',
          component: Notes
        },
        {
          path: '/unit/notes/read',
          component: NotesRead
        },

        {
          path: '/unit/relevant_videos',
          component: Relevant_Videos
        },
        {
          path: '/unit/relevant_links',
          component: Relevant_Links
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path:'/dashboard',
      component:Index,
      children:[
        {
          path:'/dashboard',
          component:Profile
        },
        {
          path:'/dashboard/group',
          component:Mygroups
        },
        {
          path:'/dashboard/links',
          component:Mylinks
        },
        {
          path:'/dashboard/videos',
          component:Myvideos
        },
        {
          path:'/dashboard/discussion',
          component:Mydiscussion
        }
      ]
    },

    {
      path: '/show_group',
      component: GroupIndex,
      children:[
        {
          path: '/show_group',
          component: Group
        },
        {
          path: '/show_group/posts',
          component: Posts
        },
        {
          path: '/show_group/events',
          component: Events
        },
        {
          path: '/show_group/videos',
          component: Videos
        },
        {
          path: '/show_group/discussion',
          component: Discussion
        },
        {
          path: '/show_group/links',
          component: Links
        }
      ]
    }
  ]
})

export default router

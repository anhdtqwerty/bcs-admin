import SignIn from '@/views/auth/SignIn'
import SignUp from '@/views/auth/SignUp'
import ForgotPassword from '@/views/auth/ForgotPassword'
import ResetPassword from '@/views/auth/ResetPassword'
import ComfirmEmail from '@/views/auth/ComfirmEmail'
// ---------------- LAYOUT -------------------------------
import GuestLayout from '@/layout/GuestLayout'
import MainLayout from '@/layout/MainLayout'
import Page404 from '@/views/Page404'
// ---------------- LAYOUT -------------------------------
import Home from '@/views/Home.vue'
import IDOPools from '@/views/IDOPools.vue'

const routes = [
  {
    path: '/',
    component: GuestLayout,
    children: [
      {
        path: 'signin',
        name: 'signIn',
        component: SignIn,
        meta: {
          title: 'Sign In',
          auth: false,
        },
      },
      {
        path: 'signup',
        name: 'signUp',
        component: SignUp,
        meta: {
          title: 'Sign Up',
          auth: false,
        },
      },
      {
        path: '/forgot-password',
        name: 'forgotPassword',
        component: ForgotPassword,
        meta: {
          title: 'Quên mật khẩu',
          auth: false,
        },
      },
      {
        path: '/confirm-email',
        name: 'confirmEmail',
        component: ComfirmEmail,
        meta: {
          title: 'Xác nhận email',
          auth: false,
        },
      },
      {
        path: '/reset-password',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
          title: 'Tạo lại mật khẩu',
          auth: false,
        },
      },
    ],
  },
  {
    path: '*',
    name: 'page404',
    component: Page404,
    meta: {
      title: 'Page not found',
    },
  },
  {
    path: '/',
    component: MainLayout,
    meta: {
      title: 'Trang chủ',
    },

    children: [
      {
        path: 'home',
        name: 'Trang chủ',
        component: Home,
        meta: {
          title: 'Trang chủ',
          auth: true,
        },
      },
      {
        path: 'fixed-pools',
        name: 'Fixed Pools',
        component: IDOPools,
        meta: {
          title: 'Fixed Pools',
          auth: true,
        },
      },
    ],
  },
]
export default routes

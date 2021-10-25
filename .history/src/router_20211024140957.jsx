import Mainlayout from "./layout/mainLayout";
import Courses from './page/khoahoc'
import Course_detail from './page/course__detail'
import Page404 from './page/404'
import Home from './page/home';
import Team from "./page/team";
import Register from "./page/register";
import Profile from "./page/profile";
import MyInfor from "./page/profile/components/myInfo";
import Coins from "./page/profile/components/coins";
const routers = [
    {
        path: '/cfd__template/',
        component: Mainlayout,
        routers: [
            {
                path: '/team',
                component: Team,
            },
            {
                path: '/courses',
                component: Courses,
            },
            {
                path: '/course/:slug',
                component: Course_detail,
            },
            {
                path: '/register/:slug',
                component: Register,
            },
            {
                path: '/thong-tin-ca-nhan',
                component: Profile,
                routers: [
                    {
                        path: '/coins',
                        component: Coins,

                    },
                    {
                        path: '/',
                        component: MyInfor,
                        exact: true
                    }

                ]
            },
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                component: Page404,
            },

        ]
    },


]
export default routers;
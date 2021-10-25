import Mainlayout from "./layout/mainLayout";
import Courses from './page/khoahoc'
import Course_detail from './page/course__detail'
import Page404 from './page/404'
import Home from './page/home';
import Team from "./page/team";
import Register from "./page/register";
import Profile from "./page/profile";

import Info from './page/profile/components/info';
import MyCourse from './page/profile/components//myCourse'
import MyProject from './page/profile/components/myProject'
import HistoryPayment from './page/profile/components/historyPayment'
import Coins from './page/profile/components/coins';
const routers = [
    {
        path: '/',
        component: Mainlayout,
        routers: [
            {
                path: '/cfd__template/team',
                component: Team,

            },
            {
                path: '/cfd__template/courses',
                component: Courses,
            },
            {
                path: '/cfd__template/course/:slug',
                component: Course_detail,
            },
            {
                path: '/cfd__template/register/:slug',
                component: Register,
            },
            {
                path: '/cfd__template/thong-tin-ca-nhan',
                component: Profile,
                routers: [
                    {
                        path: '/course',
                        component: MyCourse,
                    },
                    {
                        path: '/project',
                        component: MyProject
                    },
                    {
                        path: '/payment',
                        component: HistoryPayment
                    },
                    {
                        path: '/Coins',
                        component: Coins
                    },
                    {
                        path: '/',
                        component: Info,
                        exact: true
                    }
                ]
            },
            {
                path: '/cfd__template/',
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
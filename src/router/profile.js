import Profile from '@/components/user/Profile';
import Auth from '@/middleware/auth';

export default [
    {
        name: 'Profile',
        path: '/profile',
        component: Profile,
        meta: {
            middleware: {
                ignore: Auth,
                //attach: 
            },
            nav: {
                addToNav: false,
                navText: 'Profile',
                navIcon: '',
            }
        }
    }
]
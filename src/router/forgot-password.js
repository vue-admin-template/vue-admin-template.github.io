import ForgotPassword from '@/components/login/ForgotPassword';
import Auth from '@/middleware/auth';

export default [
    {
        name: 'ForgotPassword',
        path: '/forgot-password',
        component: ForgotPassword,
        meta: {
            middleware: {
                ignore: Auth,
                //attach: 
            },
            nav: {
                addToNav: false,
                navText: 'Forgot Password',
                navIcon: '',
            }
        }
    }
]
import ResetPassword from '@/components/login/ResetPassword';
import Auth from '@/middleware/auth';

export default [
    {
        name: 'ResetPassword',
        path: '/reset-password/:token',
        component: ResetPassword,
        meta: {
            middleware: {
                ignore: Auth,
                //attach: 
            },
            nav: {
                addToNav: false,
                navText: 'Reset Password',
                navIcon: '',
            }
        }
    }
]
const FrontLayout = () => import(/* webpackChunkName: 'js/chunks/FrontLayout' */ "@/view/layout/FrontLayout");
const Home = () => import(/* webpackChunkName: 'js/chunks/Home' */ '@/view/Home');
const MyPosts = () => import(/* webpackChunkName: 'js/chunks/MyPosts' */ '@/view/Post/MyPosts');
const Create = () => import(/* webpackChunkName: 'js/chunks/Create' */ '@/view/Post/Create');
const PostCategory = () => import(/* webpackChunkName: 'js/chunks/PostCategory' */ '@/view/Post/PostCategory');
const Edit = () => import(/* webpackChunkName: 'js/chunks/Edit' */ '@/view/Post/Edit');
const UpdatePost = () => import(/* webpackChunkName: 'js/chunks/UpdatePost' */ '@/view/Post/UpdatePost');
const SavePost = () => import(/* webpackChunkName: 'js/chunks/SavePost' */ '@/view/Post/SavePost');
const PostShow = () => import(/* webpackChunkName: 'js/chunks/PostShow' */ '@/view/Post/PostShow');
const Profile = () => import(/* webpackChunkName: 'js/chunks/Profile' */ '@/view/User/Profile');
const UserLikedPost = () => import(/* webpackChunkName: 'js/chunks/UserLikedPost' */ '@/view/User/UserLikedPost');
const UserBookmarkedPost = () => import(/* webpackChunkName: 'js/chunks/UserBookmarkedPost' */ '@/view/User/UserBookmarkedPost');
const Index = () => import(/* webpackChunkName: 'js/chunks/Index' */ '@/view/Search/Index');
const UserPosts = () => import(/* webpackChunkName: 'js/chunks/UserPosts' */ '@/view/User/UserPosts');
const AdminLayout = () => import(/* webpackChunkName: 'js/chunks/AdminLayout' */ '@/view/layout/AdminLayout');
const Dashboard = () => import(/* webpackChunkName: 'js/chunks/Dashboard' */ '@/view/Admin/Dashboard');
const UserIndex = () => import(/* webpackChunkName: 'js/chunks/UserIndex' */ '@/view/Admin/User/UserIndex');
const UserCreateOrUpdate = () => import(/* webpackChunkName: 'js/chunks/UserCreateOrUpdate' */ '@/view/Admin/User/UserCreateOrUpdate');
const RoleIndex = () => import(/* webpackChunkName: 'js/chunks/RoleIndex' */ '@/view/Admin/Role/RoleIndex');
const RoleCreateOrEdit = () => import(/* webpackChunkName: 'js/chunks/RoleCreateOrEdit' */ '@/view/Admin/Role/RoleCreateOrEdit');
const PostIndex = () => import(/* webpackChunkName: 'js/chunks/PostIndex' */ '@/view/Admin/Post/PostIndex');
const DraftIndex = () => import(/* webpackChunkName: 'js/chunks/DraftIndex' */ '@/view/Admin/Draft/DraftIndex');
const CategoryIndex = () => import(/* webpackChunkName: 'js/chunks/CategoryIndex' */ '@/view/Admin/Category/CategoryIndex');
const CategoryCreateOrUpdate = () => import(/* webpackChunkName: 'js/chunks/CategoryCreateOrUpdate' */ '@/view/Admin/Category/CategoryCreateOrUpdate');
const CommentIndex = () => import(/* webpackChunkName: 'js/chunks/CommentIndex' */ '@/view/Admin/Comment/CommentIndex');
const Login = () => import(/* webpackChunkName: 'js/chunks/Login' */ '@/view/Auth/Login');
const Register = () => import(/* webpackChunkName: 'js/chunks/Register' */ '@/view/Auth/Register');
const Verify = () => import(/* webpackChunkName: 'js/chunks/Verify' */ '@/view/Auth/Verify');
const ResetEmailPassword = () => import(/* webpackChunkName: 'js/chunks/ResetEmailPassword' */ '@/view/Auth/ResetEmailPassword');
const ResetPassword = () => import(/* webpackChunkName: 'js/chunks/ResetPassword' */ '@/view/Auth/ResetPassword');
const NotFound = () => import(/* webpackChunkName: 'js/chunks/NotFound' */ '@/view/Error/NotFound');
const AccessDenied = () => import(/* webpackChunkName: 'js/chunks/AccessDenied' */ '@/view/Error/AccessDenied');

export default [
    {
        path: '/',
        component: FrontLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'home'
            },
            {
                path: 'posts/draft',
                component: MyPosts,
                name: 'my-posts',
                meta: {
                    auth: true
                }
            },
            {
                path: 'posts/create',
                component: Create,
                name: 'create-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'posts/category/:slug',
                component: PostCategory,
                name: 'post-category'
            },
            {
                path: 'posts/:slug/edit',
                component: Edit,
                name: 'edit-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'posts/:slug/update',
                component: UpdatePost,
                name: 'update-post',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'drafts/:link/save',
                component: SavePost,
                name: 'save-post',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'drafts/:link',
                component: Create,
                name: 'update-draft',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'post/:slug',
                component: PostShow,
                name: 'post-show'
            },
            {
                path: 'profile',
                component: Profile,
                name: 'profile',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'liked-posts',
                component: UserLikedPost,
                name: 'liked-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'bookmarked-posts',
                component: UserBookmarkedPost,
                name: 'bookmarked-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'search/:type',
                component: Index,
                name: 'search'
            },
            {
                path: '@:username',
                component: UserPosts,
                name: 'user-posts'
            },
        ]
    },
    {
        path: '/admin',
        component: AdminLayout,
        meta: {
            auth: true,
            verified: true
        },
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'admin-dashboard'
            },
            {
                path: 'users',
                component: UserIndex,
                name: 'admin-user-index'
            },
            {
                path: 'users/create',
                component: UserCreateOrUpdate,
                name: 'admin-user-create'
            },
            {
                path: 'users/:id',
                component: UserCreateOrUpdate,
                name: 'admin-user-edit'
            },
            {
                path: 'roles',
                component: RoleIndex,
                name: 'admin-role-index'
            },
            {
                path: 'roles/create',
                component: RoleCreateOrEdit,
                name: 'admin-role-create'
            },
            {
                path: 'roles/:id',
                component: RoleCreateOrEdit,
                name: 'admin-role-edit'
            },
            {
                path: 'posts',
                component: PostIndex,
                name: 'admin-post-index'
            },
            {
                path: 'drafts',
                component: DraftIndex,
                name: 'admin-draft-index'
            },
            {
                path: 'categories',
                component: CategoryIndex,
                name: 'admin-category-index'
            },
            {
                path: 'categories/create',
                component: CategoryCreateOrUpdate,
                name: 'admin-category-create'
            },
            {
                path: 'categories/:id',
                component: CategoryCreateOrUpdate,
                name: 'admin-category-edit'
            },
            {
                path: 'comments',
                component: CommentIndex,
                name: 'admin-comment-index'
            },
        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            guest: true
        }
    },
    {
        path: '/email/verify',
        component: Verify,
        name: 'email-verify',
        meta: {
            auth: true
        }
    },
    {
        path: '/reset/password',
        component: ResetEmailPassword,
        name: 'reset-email-password',
        meta: {
            guest: true
        }
    },
    {
        path: '/reset/password/:token',
        component: ResetPassword,
        name: 'reset-password',
        meta: {
            guest: true
        }
    },
    {
        path: '/404',
        component: NotFound,
        name: 'not-found'
    },
    {
        path: '/403',
        component: AccessDenied,
        name: 'access-denied'
    },
    {
        path: '*',
        component: NotFound,
        redirect: '/404'
    },
]

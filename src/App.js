import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterPath } from './utils/path';

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import ConfigMyInfo from './pages/ConfigMyInfo';
import TeamInfo from './pages/TeamInfo';
import Start from './pages/Start';
import Loading from './pages/Loading';
import MyPageEdit from './pages/MyPageEdit';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: RouterPath.loading.path,
                element: <Loading />,
            },
            {
                path: RouterPath.start.path,
                element: <Start />,
            },
            {
                path: RouterPath.home.path,
                element: <Home />,
            },
            {
                path: RouterPath.login.path,
                element: <Login />,
            },
            {
                path: RouterPath.mypage.path,
                element: <MyPage />,
            },
            {
                path: RouterPath.mypageEdit.path,
                element: <MyPageEdit />,
            },
            {
                path: RouterPath.configMyInfo.path,
                element: <ConfigMyInfo />,
            },

            {
                path: RouterPath.teamInfo.path,
                element: <TeamInfo />,
            },
            {
                path: RouterPath.notFound.path,
                element: <div>not found~</div>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

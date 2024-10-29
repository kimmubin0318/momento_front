import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RouterPath } from "./utils/path";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import ConfigMyInfo from "./pages/ConfigMyInfo";
import TeamBuilding from "./pages/TeamBuilding";
import TeamInfo from "./pages/TeamInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: RouterPath.main.path,
        element: <Main />,
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
        path: RouterPath.configMyInfo.path,
        element: <ConfigMyInfo />,
      },
      {
        path: RouterPath.teamBuilding.path,
        element: <TeamBuilding />,
      },
      {
        path: RouterPath.teamInfo.path,
        element: <TeamInfo />,
      },
      {
        path: RouterPath.notFound.path,
        element: <div>not found~</div>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

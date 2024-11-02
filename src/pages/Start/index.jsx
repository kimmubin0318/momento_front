import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/path";
import Logo from "./logo";
import style from "./style.module.scss";
export default function StartPage() {
  const navigate = useNavigate();

<<<<<<< HEAD
  // navigate 를 사용하여 3.5초 뒤에 /login 으로 이동하는 함수
  const navigateLogin = () => {
    setTimeout(() => {
      navigate(RouterPath.login.getPath());
    }, 3500);
  };
  // useEffect를 사용하여 페이지가 렌더링 되면 함수 시작
  useEffect(() => {
    navigateLogin();
  }, []);
=======
    // navigate 를 사용하여 3.5초 뒤에 /login 으로 이동하는 함수
    const navigateLogin = () => {
        setTimeout(() => {
            navigate('/login');
        }, 3500);
    };
    // useEffect를 사용하여 페이지가 렌더링 되면 함수 시작
    useEffect(() => {
        navigateLogin();
    }, []);
>>>>>>> 01d5d0c (아! 잠 온다)

  return (
    <div className={style.LogoContainer}>
      <Logo />
    </div>
  );
}

import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeButton from './images/HomeButton.png';
import ListButton from './images/List.png';
import Profile from './images/Profile.png';
import style from './layout.module.scss';
/**
 * 전체 페이지에 랜더링되는 컴포넌트 입니다.
 * 헤더, 푸터를 여기에 만들어주세요
 * @returns
 */

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
    const hidePage = ['/', '/login'];

    const navigateHome = () => {
        navigate('/home');
    };

    return (
        <div className={style.phoneFrame}>
            {/* <header className="header">Header</header> */}
            {/* 저희 해더가 없지 않나요? */}
            <div className={style.mainContent}>
                <Outlet />
            </div>
            {/* 스플화면에서는 보여지지 않게 하기 위해 */}
            {!hidePage.includes(location.pathname) && (
                <div className={style.footer}>
                    <div className="left">
                        <button onClick={navigateHome}>
                            <img
                                src={HomeButton}
                                alt="HomeButton"
                                width="60%"
                            />
                        </button>
                    </div>
                    <div className="right">
                        <button>
                            <img
                                src={ListButton}
                                alt="ListButton"
                                width="105%"
                            />
                        </button>
                        <button>
                            <img src={Profile} alt="Profile" width="105%" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

import { Outlet, useLocation } from 'react-router-dom';
import './Layout.scss';
/**
 * 전체 페이지에 랜더링되는 컴포넌트 입니다.
 * 헤더, 푸터를 여기에 만들어주세요
 * @returns
 */

export default function Layout() {
    const location = useLocation();
    const hidePage = ['/'];
    return (
        <div className="phone-frame">
            {/* <header className="header">Header</header> */}
            {/* 저희 해더가 없지 않나요? */}
            <div className="main-content">
                <Outlet />
            </div>
            {/* 스플화면에서는 보여지지 않게 하기 위해 */}
            {!hidePage.includes(location.pathname) && (
                <footer className="footer">Footer</footer>
            )}
        </div>
    );
}

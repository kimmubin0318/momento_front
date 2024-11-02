import KloginBar from './images/KloginBar.svg';
import logo from './images/logo.svg';
import word from './images/word.svg';
import teamup from './images/TeamUp.svg';
import style from './Login.module.scss';
export default function Login() {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    return (
        <div className={style.loginContainer}>
            <img src={teamup} alt="teamUp logo" className={style.loginTitle} />
            <img src={logo} alt="puzzle logo" className={style.loginTitle} />
            <img src={word} alt="" className={style.loginSNS} />
            <button onClick={loginHandler}>
                <img
                    src={KloginBar}
                    alt=""
                    className={style.loginKakaoButton}
                />
            </button>
        </div>
    );
}

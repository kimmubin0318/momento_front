const K_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const K_REDIRECT_URL = process.env.REACT_APP_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URL}&response_type=code`;

export default function Login() {
    const handleKaKaoLogin = () => {
        window.location.href = kakaoURL;
    };
    return (
        <div>
            <button onClick={handleKaKaoLogin}>카카오 로그인</button>
        </div>
    );
}

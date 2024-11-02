import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const K_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const K_REDIRECT_URL = process.env.REACT_APP_REDIRECT_URI;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URL}&response_type=code`;

// 로그인 컴포넌트
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

// 인가 코드 처리 및 토큰 요청 컴포넌트
export function KakaoRedirect() {
    const navigate = useNavigate();
    const [tokenReceived, setTokenReceived] = useState(false); // 토큰 수신 여부

    const code = new URL(window.location.href).searchParams.get('code'); // 인가 코드 추출
    console.log('인가 코드:', code);

    useEffect(() => {
        if (code) {
            // 인가 코드를 백엔드로 보내서 토큰을 받아옴
            axios
                .get(`https://duoh.site/api/v1/auth/callback?code=${code}`)
                .then((response) => {
                    console.log('응답 데이터:', response.data);
                    if (response.data.statusCode === 0) {
                        // 성공 시 처리
                        setTokenReceived(true);
                        navigate('/config-my-info'); // 다음 페이지로 이동
                    } else {
                        console.log('로그인 실패:', response.data.message);
                        navigate('/login'); // 실패 시 로그인 페이지로 이동
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                    navigate('/login'); // 오류 발생 시 로그인 페이지로 이동
                });
        } else {
            console.log('인가 코드가 없습니다.');
            navigate('/login');
        }
    }, [code, navigate]);

    if (!tokenReceived) {
        return <h1>로그인 중...</h1>; // 토큰 수신 전 로딩 메시지
    }

    return null; // 토큰 수신 후 이 컴포넌트는 리다이렉트되므로 렌더링할 내용이 없음
}

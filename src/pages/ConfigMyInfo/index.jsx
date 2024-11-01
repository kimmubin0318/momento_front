import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function ConfigMyInfo() {
    const navigate = useNavigate();
    const [tokenReceived, setTokenReceived] = useState(false); // 토큰 여부
    const code = new URL(window.location.href).searchParams.get('code');

    useEffect(() => {
        if (code) {
            // 인가 코드를 백엔드에 보내서 토큰을 받아옴
            axios
                .get(`https://duoh.site/api/v1/auth/callback?code=${code}`)
                .then((response) => {
                    console.log('Access Token:', response.data.accessToken);
                    console.log('Refresh Token:', response.data.refreshToken);
                    if (response.statusCode === 200) {
                        setTokenReceived(true); // 토큰 수신 완료
                        navigate('/config-my-info');
                    } else {
                        console.log('로그인 실패:', response.message);
                        navigate('/login'); // 실패 시 로그인 페이지로 이동
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                    navigate('/login');
                });
        } else {
            console.log('인가 코드가 없습니다.');
            navigate('/login');
        }
    }, [code, navigate]);

    if (!tokenReceived) {
        return <h1>로그인 중...</h1>; // 토큰 수신 전
    }

    return (
        // 후
        <div>
            <h1>정보 입력 페이지</h1>
        </div>
    );
}

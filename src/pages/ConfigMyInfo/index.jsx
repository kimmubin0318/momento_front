import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConfigMyInfo() {
    const navigate = useNavigate();
    // 인가코드
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    useEffect(() => {
        fetch(`https://duoh.site/api/v1/auth/callback?code=${code}`, {
            method: 'POST',
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => {
                navigate('/config-my-info');
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    });
    return (
        <div>
            <h1>로그인 성공</h1>
        </div>
    );
}

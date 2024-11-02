import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Redirection = () => {
    const code = new URLSearchParams(window.location.search).get('code'); // 인가 코드 추출
    const navigate = useNavigate();
    console.log(code);

    useEffect(() => {
        if (code) {
            console.log('Sending code to backend:', code);
            // GET 요청으로 쿼리스트링에 인가 코드 포함
            axios
                .get(
                    'https://duoh.site/api/v1/auth/callback?code=VTS4GY0TT9ARXQ8i4ERfcVy2tr87L0ZgHC2oLVc2QM7VimEowIfk3wAAAAQKKwymAAABkuy1TiAtjdRiIM79qQ'
                )
                .then((response) => {
                    console.log(
                        'Response from server:',
                        response.status,
                        response.data
                    );

                    // 응답에서 엑세스 토큰이나 사용자 이름을 받아 로컬에 저장
                    localStorage.setItem(
                        'accessToken',
                        response.data.accessToken
                    );

                    navigate('/config-my-info'); // 로그인 후 이동할 페이지
                })
                .catch((error) => {
                    console.error('카카오 로그인 실패:', error.ㄱㄷㄴ);
                    alert('로그인 중 오류가 발생했습니다.');
                });
        } else {
            console.error('No code found in the query string.'); // 인가 코드가 없을 경우 오류 출력
        }
    }, [navigate, code]);

    return (
        <div>
            <h2>로그인 중입니다.</h2>
        </div>
    );
};

export default Redirection;

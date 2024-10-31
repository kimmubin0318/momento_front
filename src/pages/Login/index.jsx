import React from 'react';

const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
const REDIRECT_URI = 'https://moodfriend.vercel.app/auth/callback/kakao';
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const handleKakaoLogin = () => {
    // 카카오 로그인 페이지로 리디렉션
    window.location.href = kakaoURL;
};

const Login = () => (
    <button onClick={handleKakaoLogin}>카카오로 시작하기</button>
);

export default Login;

const axios = require('axios');

async function getKakaoToken(authCode) {
    try {
        const response = await axios.post('/api/v1/auth/callback', null, {
            params: {
                grant_type: 'authorization_code',
                client_id: process.env.REACT_APP_REST_API_KEY,
                redirect_uri: process.env.REACT_APP_REDIRECT_URI,
                code: authCode,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data.access_token; // 액세스 토큰 반환
    } catch (error) {
        console.error('Failed to get Kakao token:', error);
        return null;
    }
}

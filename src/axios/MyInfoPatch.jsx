import axios from 'axios';

async function MyInfoPatch(data) {
    try {
        const baseUrl = '/api/v1/member/';
        const endPoint = '/update-profile';
        const response = await axios.patch(baseUrl + endPoint, {
            persona: data.changePersona,
            ability: data.changeAbility,
            stack: data.changeStack,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update user info:', error);
    }
}

export default MyInfoPatch;

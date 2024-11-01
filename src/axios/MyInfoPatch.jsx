import axios from 'axios';

async function MyInfoPatch(changeData) {
    console.log(changeData);

    try {
        const baseUrl = '/api/v1/member/';
        const endPoint = '/update-profile';
        const response = await axios.patch(baseUrl + endPoint, {
            persona: changeData.changePersona,
            ability: changeData.changeAbility,
            stack: changeData.changeStack,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update user info:', error);
    }
}

export default MyInfoPatch;

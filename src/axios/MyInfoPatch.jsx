import axios from 'axios';

async function MyInfoPatch(changeData) {
    console.log(changeData);

    try {
        const baseUrl = 'https://duoh.site/api/v1/member';
        const endPoint = '/update-profile';

        const response = await axios.patch(
            baseUrl + endPoint,
            {
                name: changeData.name,
                stack: changeData.stack,
                persona: changeData.persona,
                ability: changeData.ability,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Failed to update user info:', error);
    }
}

export default MyInfoPatch;

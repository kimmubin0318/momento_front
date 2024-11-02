import { fetchInstance } from './instance';

async function MyInfoPatch(changeData) {
    console.log(changeData);

    try {
        const response = await fetchInstance().path(
            'api/v1/member/update-profile',
            {
                name: changeData.name,
                stack: changeData.stack,
                persona: changeData.persona,
                ability: changeData.ability,
            }
        );

        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Failed to update user info:', error);
    }
}

export default MyInfoPatch;

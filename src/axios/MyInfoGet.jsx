import { useEffect, useState } from 'react';
import { fetchInstance } from './instance';

// 정보 가져오기 axios
export default function MyInfoGet() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [persona, setPersona] = useState('');
    const [stack, setStack] = useState('');
    const [ability, setAbility] = useState('');
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const fetchData = async () => {
            try {
                const response = await fetchInstance().get(
                    'api/v1/member/profile',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                const data = response.data.data;
                console.log(data);

                setName(data.name); // name
                setMail(data.email); // email
                setPersona(data.persona); // mbti
                setStack(data.stack); // 기술 스택
                setAbility(data.ability); // 능력 ( 상 중 하 )
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return {
        name,
        mail,
        persona,
        stack,
        ability,
    };
}

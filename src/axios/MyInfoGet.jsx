import { useEffect, useState } from 'react';
import axios from 'axios';
// 정보 가져오기 axios
export default function MyInfoGet() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [persona, setPersona] = useState('');
    const [stack, setStack] = useState('');
    const [ability, setAbility] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseUrl = '/api/v1/member';
                const endPoint = '/profile';
                const response = await axios.get(baseUrl + endPoint);
                console.log(response);

                const data = response.data.data;
                console.log(data);

                setName(data.name); // name
                setMail(data.email); // email
                setPersona(data.persona); // mbti
                setStack(data.stack); // 기술 스택
                setAbility(data.ability); // 능력 ( 상 중 하 )
            } catch (error) {
                console.error(error.response.data.message);
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

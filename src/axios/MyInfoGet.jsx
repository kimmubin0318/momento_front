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
        const baseUrl = '/api/v1/member';
        const endPoint = '/profile';
        axios
            .get(baseUrl + endPoint)
            .then((res) => {
                const data = res.data.data;
                setName(data.name); // name
                setMail(data.email); // email
                setPersona(data.persona); // mbti
                setStack(data.stack); // 기술 스택
                setAbility(data.ability); // 능력 ( 상 중 하 )
            })
            .catch((error) => {
                console.error(error.response.data.message);
            });
    });
    return {
        name,
        mail,
        persona,
        stack,
        ability,
    };
}

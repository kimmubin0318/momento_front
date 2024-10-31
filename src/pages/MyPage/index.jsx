import { useEffect, useState } from 'react';

import axios from 'axios';
import style from './style.module.scss';
import hr from './images/Line.png';
export default function MyPage() {
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
                setPersona(data.data); // mbti
                setStack(data.data); // 기술 스택
                setAbility(data.data); // 능력 ( 상 중 하 )
            })
            .catch((error) => {
                console.error(error.response.data.message);
            });
    });
    return (
        <div className={style.myPage}>
            {/* 상단 프로필 */}
            <div className={style.profile}>
                <div className={style.profileWord}>profile</div>
                <div className={style.profileImg}>
                    {/* <img src={서버에서 받아오기} alt="" /> */}
                </div>
                <button className={style.Button}>
                    <div className={style.word}>정보수정</div>
                </button>
            </div>
            <div>
                <img src={hr} alt="선" />
            </div>
            {/* 사용자 정보 */}
            <div className={style.info}>
                <div>
                    이름 <input type="text" />
                </div>{' '}
                <div>
                    mail
                    <input type="text" />
                </div>
                <div>
                    mbti
                    <input
                        type="text"
                        onChange={(e) => setPersona(e.target.value)}
                    />
                </div>
                <div>
                    기술 스택
                    <input
                        type="text"
                        onChange={(e) => setStack(e.target.value)}
                    />
                </div>
                <div>
                    능력
                    <input
                        type="text"
                        onChange={(e) => setAbility(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

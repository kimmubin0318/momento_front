import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import style from './style.module.scss';
import hr from './images/Line.png';
export default function MyPageEdit() {
    const [persona, setPersona] = useState('');
    const [stack, setStack] = useState('');
    const [ability, setAbility] = useState('');
    const router = useNavigate();

    const backPage = () => {
        router(-1);
    };
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
                <button className={style.cancel} onClick={backPage}>
                    <div className={style.word}>취소</div>
                </button>
                <div className={style.profileImg}>
                    {/* <img src={서버에서 받아오기} alt="" /> */}
                </div>
                <button className={style.complete} onClick={backPage}>
                    <div className={style.word}>완료</div>
                </button>
            </div>
            <div>
                <img src={hr} alt="선" />
            </div>
            {/* 사용자 정보 */}
            <div className={style.info}>
                <div className={style.name}>
                    <p>이름 :</p>
                    <input type="text" />
                </div>
                <div className={style.mail}>
                    <p>mail :</p>
                    <input type="text" />
                </div>
                <div className={style.mbti}>
                    <p>mbti :</p>
                    <input
                        type="text"
                        onChange={(e) => setPersona(e.target.value)}
                    />
                </div>
                <div className={style.stack}>
                    <p>기술 스택 :</p>
                    <input
                        type="text"
                        onChange={(e) => setStack(e.target.value)}
                    />
                </div>
                <div className={style.ability}>
                    <p>능력 :</p>
                    <>
                        <label>
                            상
                            <input type="radio" name="ability" value="upper" />
                        </label>
                        <label>
                            중
                            <input type="radio" name="ability" value="middle" />
                        </label>
                        <label>
                            하
                            <input type="radio" name="ability" value="lower" />
                        </label>
                    </>
                </div>
            </div>
        </div>
    );
}

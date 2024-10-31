import { useEffect, useState } from 'react';

import axios from 'axios';
import style from './style.module.scss';
import hr from './images/Line.png';
export default function MyPage() {
    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        const baseUrl = '/api/v1/member';
        const endPoint = '/profile';

        axios
            .get(baseUrl + endPoint)
            .then((res) => {
                setProfileList(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error.response.data.message);
            });
    });
    return (
        <div className={style.myPage}>
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
            <div className={style.info}>
                <div>{/* 이름 <input type="text" value={} /> */}</div>
                <div>
                    이메일
                    <input type="text" />
                </div>
                <div>
                    역할
                    <input type="text" />
                </div>
                <div>
                    기술 스택
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}

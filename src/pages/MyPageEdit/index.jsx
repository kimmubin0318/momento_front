import { useNavigate } from 'react-router-dom';
import MyInfoGet from '../../axios/MyInfoGet';
import MyInfoPatch from '../../axios/MyInfoPatch';
import { useEffect, useState } from 'react';
import style from './style.module.scss';
import hr from './images/Line.png';
export default function MyPageEdit() {
    const { name, mail, persona, stack, ability } = MyInfoGet();
    const router = useNavigate();

    // 서버에서 받아온 값들을 useState로 관리
    // 값들을 변경해서 다시 서버에 보낼 예정
    const [changePersona, setChangePersona] = useState('');
    const [changeAbility, setChangeAbility] = useState('');
    const [changeStack, setChangeStack] = useState('');
    // ability 값을 불러오기 전에 useState값을 넣으니
    // 빈string 값이 반환돼서 useEffect 와 조건문을 사용하여 해결
    // 어싱크 어웨잇 사용해도됨
    useEffect(() => {
        if (ability) {
            setChangeAbility(ability);
        }
        if (persona) {
            setChangePersona(persona);
        }
        if (stack) {
            setChangeStack(stack);
        }
    }, [ability, persona, stack]);

    const cancelButton = () => {
        router(-1);
    };
    const completeButton = async () => {
        const changeData = {
            stack: changeStack,
            persona: changePersona,
            ability: changeAbility,
        };
        await MyInfoPatch(changeData);
        router('/mypage');
    };

    return (
        <div className={style.myPage}>
            {/* 상단 프로필 */}
            <div className={style.profile}>
                <button className={style.cancel} onClick={cancelButton}>
                    <div className={style.word}>취소</div>
                </button>
                <div className={style.profileImg}>
                    {/* <img src={서버에서 받아오기} alt="" /> */}
                </div>
                <button className={style.complete} onClick={completeButton}>
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
                    <input type="text" value={name} disabled />
                </div>
                <div className={style.mail}>
                    <p>mail :</p>
                    <input type="text" value={mail} disabled />
                </div>
                <div className={style.mbti}>
                    <p>mbti :</p>
                    <input
                        type="text"
                        defaultValue={persona}
                        onChange={(e) => setChangePersona(e.target.value)}
                    />
                </div>
                <div className={style.stack}>
                    <p>기술 스택 :</p>
                    <input
                        type="text"
                        defaultValue={stack}
                        onChange={(e) => setChangeStack(e.target.value)}
                    />
                </div>
                <div className={style.ability}>
                    <p>능력 :</p>
                    <>
                        <label>
                            상
                            <input
                                type="radio"
                                name="ability"
                                value="상"
                                checked={changeAbility === '상'}
                                onChange={(e) =>
                                    setChangeAbility(e.target.value)
                                }
                            />
                        </label>
                        <label>
                            중
                            <input
                                type="radio"
                                name="ability"
                                value="중"
                                checked={changeAbility === '중'}
                                onChange={(e) =>
                                    setChangeAbility(e.target.value)
                                }
                            />
                        </label>
                        <label>
                            하
                            <input
                                type="radio"
                                name="ability"
                                value="하"
                                checked={changeAbility === '하'}
                                onChange={(e) =>
                                    setChangeAbility(e.target.value)
                                }
                            />
                        </label>
                    </>
                </div>
            </div>
        </div>
    );
}

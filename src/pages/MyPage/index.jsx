import style from './style.module.scss';
import hr from './images/Line.png';
import { useNavigate } from 'react-router-dom';
import MyInfoGet from '../../axios/MyInfoGet';
export default function MyPage() {
    const { name, mail, persona, stack, ability } = MyInfoGet();
    const router = useNavigate();

    const navigateEdit = () => {
        router('/mypage-edit');
    };

    return (
        <div className={style.myPage}>
            {/* 상단 프로필 */}
            <div className={style.profile}>
                <div className={style.profileWord}>profile</div>
                <div className={style.profileImg}>
                    {/* <img src={서버에서 받아오기} alt="" /> */}
                </div>
                <button className={style.Button} onClick={navigateEdit}>
                    <div className={style.word}>정보수정</div>
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
                    <input type="text" value={persona} disabled />
                </div>
                <div className={style.stack}>
                    <p>기술 스택 :</p>
                    <input type="text" value={stack} disabled />
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
                                checked={ability === '상'}
                            />
                        </label>
                        <label>
                            중
                            <input
                                type="radio"
                                name="ability"
                                value="중"
                                checked={ability === '중'}
                            />
                        </label>
                        <label>
                            하
                            <input
                                type="radio"
                                name="ability"
                                value="하"
                                checked={ability === '하'}
                            />
                        </label>
                    </>
                </div>
            </div>
        </div>
    );
}

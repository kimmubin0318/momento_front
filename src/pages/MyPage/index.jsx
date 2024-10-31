import style from './style.module.scss';
import hr from './images/Line.png';
export default function MyPage() {
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
                <div>이름</div>
                <div>이메일</div>
                <div>역할</div>
                <div>기술 스택</div>
            </div>
        </div>
    );
}

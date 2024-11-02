import gsap from "gsap";
import { useEffect } from "react";
import RedPuzzle from "./images/red.png";
import GreenPuzzle from "./images/green.png";
import YellowPuzzle from "./images/yellow.png";
import BluePuzzle from "./images/blue.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

import { RouterPath } from "../../utils/path";

export default function Loading() {
  const dots = Array(3).fill(".");
  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1, // 페이지가 렌더링 되는 동안 무한 반복
      yoyo: true, // 애니메이션이 끝나면 원래 상태로 돌아감
      repeatDelay: 0.5, // 애니메이션 반복시에 딜레이
    });
    //duration은 애니메이션이 지속되는 시간입니당
    timeline.to(".yellowPuzzle", { x: 15, y: 10, duration: 1.5 });
    timeline.to(".greenPuzzle", { x: -10.5, y: 10, duration: 1.5 }, "<");
    timeline.to(".redPuzzle", { x: 20, y: -25, duration: 1.5 }, "-=1.5");
    timeline.to(".bluePuzzle", { x: -10, y: -25, duration: 1.5 }, "<");

    gsap.fromTo(
      ".dot",
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 1,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className={style.bodyContainer}>
      <div className={style.AnimationContainer}>
        <div className={style.top}>
          <img
            className="yellowPuzzle"
            src={YellowPuzzle}
            width="80px"
            alt="YellowPuzzle"
          />
          <img
            className="greenPuzzle"
            src={GreenPuzzle}
            width="80px"
            alt="GreenPuzzle"
          />
        </div>
        <div className={style.bottom}>
          <img
            className="redPuzzle"
            src={RedPuzzle}
            width="80px"
            alt="RedPuzzle"
          />
          <img
            className="bluePuzzle"
            src={BluePuzzle}
            width="80px"
            alt="BluePuzzle"
          />
        </div>
      </div>
      <div className={style.loadingText}>
        Team Building
        {dots.map((dot, index) => (
          <span key={index} className={`dot ${style.dot}`}>
            {dot}
          </span>
        ))}
        <div className={style.description}>
          14시에 팀 빌딩이 완료됩니다.
          <Link to={RouterPath.home.getPath()} className={style.description}>
            돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}

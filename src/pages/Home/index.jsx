import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/path";
import icon from "../../assets/icon.png";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={style.buttonContainer}>
      <div>
        <img src={icon} alt="" width="150" />
      </div>
      <button
        className={style.button}
        onClick={() => navigate(RouterPath.teamBuilding.getPath())}
      >
        Team Up
      </button>
    </div>
  );
}

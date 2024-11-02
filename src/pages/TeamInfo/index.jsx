import { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.scss";
import line from "../MyPage/images/Line.png";
export default function TeamInfo() {
  const [selectedTeam, setSelectedTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = "/api/v1/member";
        const endPoint = "/completed-profile";
        const response = await axios.get(baseUrl + endPoint);

        const data = response.data.data;
        console.log(data);
        setSelectedTeam(data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchData();
  });

  return (
    <div className={style.teamInfo}>
      <div className={style.teamList}>
        {/* 팀 리스트 */}
        {Object.entries(selectedTeam).map(([key, team]) => (
          <div
            key={key}
            className={style.teamItem}
            onClick={() => setSelectedTeam(key)}
          >
            <span>{team.teamName.substring(0, 7)}</span>
          </div>
        ))}
      </div>
      <div className={style.line}>
        <img src={line} alt="" width />
      </div>
      <div className={style.logo}>
        <div>Team,</div>
        <div className={style.teamName}>
          {selectedTeam ? selectedTeam[selectedTeam].teamName : "Name"}
        </div>
      </div>
    </div>
  );
}

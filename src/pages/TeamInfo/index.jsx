import { useState, useEffect } from "react";
import style from "./style.module.scss";
import line from "../MyPage/images/Line.png";
import { fetchInstance } from "../../axios/instance";
export default function TeamInfo() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchInstance().get(
          "api/v1/team/completed-profile"
        );

        const data = response.data.data;
        setTeams([...data]);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchData();
  }, []);

  if (!teams) return <div>로딩중...</div>;
  if (teams.length === 0) return <div>배정된 팀이 없습니다</div>;

  return (
    <div className={style.teamInfo}>
      <div className={style.teamList}>
        {/* 팀 리스트 */}
        {teams.map((team, index) => (
          <div
            key={index}
            className={style.teamItem}
            onClick={() => setSelectedTeam(index)}
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
        <div>{teams[selectedTeam].teamName}</div>
      </div>
      <div className={style.teamMemberInfo}>
        {teams[selectedTeam].members.map((member, index) => (
          <div key={index} className={style.memberList}>
            <div className={style.name}>{member.name}</div>
            <div className={style.partMail}>
              {member.position} / {member.email}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

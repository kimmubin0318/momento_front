import { useState } from "react";
import style from "./style.module.scss";
import line from "../MyPage/images/Line.png";
import exit from "./images/exit.png";
export default function TeamInfo() {
  // 더미 데이터
  const dummyTeamList = {
    team1: {
      teamName: "Momento1",
      member: [
        { name: "mubin", part: "front", mail: "kimmubin@gmail.com" },
        { name: "kimmubin", part: "back", mail: "kimmubin@gmail.com" },
      ],
    },
    team2: {
      teamName: "Momen",
      member: [
        { name: "mubin", part: "design", mail: "kimmubin@gmail.com" },
        { name: "mubin", part: "design", mail: "kimmubin@gmail.com" },
        { name: "mubin", part: "design", mail: "kimmubin@gmail.com" },
        { name: "mubin", part: "design", mail: "kimmubin@gmail.com" },
        { name: "kimmubin", part: "front", mail: "kimmubin@gmail.com" },
        { name: "kimmubin", part: "front", mail: "kimmubin@gmail.com" },
      ],
    },
    team3: {
      teamName: "Momen",

      member: [
        { name: "john", part: "dev", mail: "john@example.com" },
        { name: "kimmubin", part: "back", mail: "kimmubin@gmail.com" },
      ],
    },
    team4: {
      teamName: "Momento4",
      member: [
        { name: "john", part: "dev", mail: "john@example.com" },
        { name: "john", part: "dev", mail: "john@example.com" },

        { name: "jane", part: "marketing", mail: "jane@example.com" },
      ],
    },
    team5: {
      teamName: "Momento4",
      member: [
        { name: "john", part: "dev", mail: "john@example.com" },
        { name: "john", part: "dev", mail: "john@example.com" },

        { name: "jane", part: "marketing", mail: "jane@example.com" },
      ],
    },
    team6: {
      teamName: "Momento4",
      member: [
        { name: "john", part: "dev", mail: "john@example.com" },
        { name: "john", part: "dev", mail: "john@example.com" },
        { name: "jane", part: "marketing", mail: "jane@example.com" },
      ],
    },
  };

  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div className={style.teamInfo}>
      <div className={style.teamList}>
        {/* 팀 리스트 */}
        {Object.entries(dummyTeamList).map(([key, team]) => (
          <div
            key={key}
            className={style.teamItem}
            onClick={() => setSelectedTeam(key)}
          >
            <span>{team.teamName}</span>
          </div>
        ))}
      </div>
      <div className={style.line}>
        <img src={line} alt="" width />
      </div>
      <div className={style.logo}>
        <div>Team,</div>
        <div className={style.teamName}>
          {selectedTeam ? dummyTeamList[selectedTeam].teamName : "Name"}
        </div>
      </div>

      {/* 선택한 팀의 멤버 정보 */}
      <div className={style.teamMemberInfo}>
        {selectedTeam && dummyTeamList[selectedTeam].member ? (
          dummyTeamList[selectedTeam].member.map((member, index) => (
            <div key={index} className={style.memberList}>
              <div className={style.name}>{member.name}</div>
              <div className={style.partMail}>
                {member.part} / {member.mail}
              </div>
            </div>
          ))
        ) : (
          <div>팀을 선택해주세요</div>
        )}
      </div>
    </div>
  );
}

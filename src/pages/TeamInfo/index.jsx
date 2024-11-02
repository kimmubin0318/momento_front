import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.module.scss';
import line from '../MyPage/images/Line.png';
import exit from './images/exit.png';
import { dummyTeamList } from './dummyData';
export default function TeamInfo() {
    const [selectedTeam, setSelectedTeam] = useState(null);
    useEffect(() => {
        const base = '/api/v1/member';
        const endPoint = '/profile';
    });
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
                    {selectedTeam
                        ? dummyTeamList[selectedTeam].teamName
                        : 'Name'}
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

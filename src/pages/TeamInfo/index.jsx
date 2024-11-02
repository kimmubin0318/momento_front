import { useState, useEffect } from "react";
import style from "./style.module.scss";
import line from "../MyPage/images/Line.png";
import TeamSave from "./images/TeamSave.svg";
import { fetchInstance } from "../../axios/instance";

export default function TeamInfo() {
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetchInstance().get(
          "api/v1/team/completed-profile"
        );
        const teamData = response.data.data;
        setTeams(teamData);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };
    fetchTeams();
  }, []);

  const dummyTeamList = [
    {
      teamName: "Momento1",
      members: [
        { name: "mubin", email: "kimmubin@gmail.com", position: "front" },
        { name: "kimmubin", email: "kimmubin@gmail.com", position: "back" },
      ],
    },
    {
      teamName: "Momen",
      members: [
        { name: "mubin", email: "kimmubin@gmail.com", position: "design" },
        { name: "mubin", email: "kimmubin@gmail.com", position: "design" },
        { name: "mubin", email: "kimmubin@gmail.com", position: "design" },
        { name: "mubin", email: "kimmubin@gmail.com", position: "design" },
        { name: "kimmubin", email: "kimmubin@gmail.com", position: "front" },
        { name: "kimmubin", email: "kimmubin@gmail.com", position: "front" },
      ],
    },
    {
      teamName: "Momen",
      members: [
        { name: "john", email: "john@example.com", position: "dev" },
        { name: "kimmubin", email: "kimmubin@gmail.com", position: "back" },
      ],
    },
    {
      teamName: "Momento4",
      members: [
        { name: "john", email: "john@example.com", position: "dev" },
        { name: "john", email: "john@example.com", position: "dev" },
        { name: "jane", email: "jane@example.com", position: "marketing" },
      ],
    },
    {
      teamName: "Momento4",
      members: [
        { name: "john", email: "john@example.com", position: "dev" },
        { name: "john", email: "john@example.com", position: "dev" },
        { name: "jane", email: "jane@example.com", position: "marketing" },
      ],
    },
    {
      teamName: "Momento4",
      members: [
        { name: "john", email: "john@example.com", position: "dev" },
        { name: "john", email: "john@example.com", position: "dev" },
        { name: "jane", email: "jane@example.com", position: "marketing" },
      ],
    },
  ];

  const [teams, setTeams] = useState(dummyTeamList);
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    if (selectedTeamIndex !== null) {
      setNewTeamName(teams[selectedTeamIndex].teamName);
    }
  };

  const handleSaveClick = async () => {
    if (selectedTeamIndex !== null) {
      const updatedTeam = {
        ...teams[selectedTeamIndex],
        teamName: newTeamName,
      };

      try {
        // 서버에 팀 이름을 업데이트
        const response = await fetchInstance().put(
          "api/v1/team/update",
          updatedTeam
        );

        if (response.status === 200) {
          // 서버에서 처리 성공 시 팀 리스트 업데이트
          setTeams((prevTeams) =>
            prevTeams.map((team, index) =>
              index === selectedTeamIndex ? updatedTeam : team
            )
          );
          setIsEditing(false);
        } else {
          alert("팀 정보 업데이트에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("Error updating:", error);
        alert("팀 정보 업데이트 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className={style.teamInfo}>
      <div className={style.teamList}>
        {/* 팀 리스트 */}
        {teams.map((team, index) => (
          <div
            key={index}
            className={style.teamItem}
            onClick={() => setSelectedTeamIndex(index)}
          >
            <span>{team.teamName}</span>
          </div>
        ))}
      </div>
      <div className={style.line}>
        <img src={line} alt="" />
      </div>
      <div className={style.logo}>
        <div>Team,</div>
        <div className={style.teamName}>
          {isEditing ? (
            <input
              type="text"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              className={style.teamNameInput}
            />
          ) : (
            <span onClick={handleEditClick} className={style.teamName}>
              {selectedTeamIndex !== null
                ? teams[selectedTeamIndex].teamName
                : "Name"}
            </span>
          )}
        </div>
      </div>

      {/* 선택한 팀의 멤버 정보 */}
      <div className={style.teamMemberInfo}>
        {selectedTeamIndex !== null && teams[selectedTeamIndex].members ? (
          teams[selectedTeamIndex].members.map((member, index) => (
            <div key={index} className={style.memberList}>
              <div className={style.name}>{member.name}</div>
              <div className={style.partMail}>
                {member.position} / {member.email}
              </div>
            </div>
          ))
        ) : (
          <div>팀을 선택해주세요</div>
        )}
      </div>

      <div className={style.saveButtonContainer}>
        <button onClick={handleSaveClick} className={style.saveButton}>
          <img src={TeamSave} alt="저장하기" />
        </button>
      </div>
    </div>
  );
}

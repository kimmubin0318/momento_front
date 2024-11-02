import { Form, Button } from "react-bootstrap";

import styles from "./index.module.scss";
import icon from "../../assets/icon.png";
import { fetchInstance } from "../../axios/instance";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "../../utils/path";

export default function TeamBuilding() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      teamSize: e.target.teamSize.value,
      myPosition: e.target.myPosition.value,
      positionCombination: e.target.positionCombination.value,
    };
    fetchInstance()
      .post("api/v1/team/check-duplicate")
      .then((res) => {
        if (res.data.message === "true") {
          alert("중복된 팀 빌딩 요청이 있습니다. 다음 날에 다시 시도해주세요");
          return;
        }

        fetchInstance()
          .post("api/v1/team/building", data)
          .then(() => {
            alert("저장되었습니다.");
            navigate(RouterPath.loading.getPath());
          })
          .catch((err) => {
            alert("저장에 실패했습니다.");
            console.log(err);
          });
      })
      .catch((err) => {
        alert("저장에 실패했습니다.");
        console.log(err);
      });
  };

  return (
    <div>
      <div className={styles.icon}>
        <img src={icon} alt="icon" />
      </div>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group>
          <Form.Label>프로젝트 기간</Form.Label>
          <div className={styles.date}>
            <Form.Control id="startDate" aria-label="startDate" type="date" />
            <div>~</div>
            <Form.Control id="endDate" aria-label="endDate" type="date" />
          </div>
        </Form.Group>

        <Form.Group controlId="teamSize">
          <Form.Label>인원 수</Form.Label>
          <Form.Control type="number" max={6} min={0} />
        </Form.Group>

        <Form.Group controlId="myPosition">
          <Form.Label>포지션</Form.Label>
          <div className={styles.examble}>ex) frontend, 기획, 디자인</div>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="positionCombination">
          <Form.Label>어떤 프로젝트를 하고 싶나요?</Form.Label>
          <div className={styles.examble}>
            ex) open ai를 활용한 웹페이지.. 실제로 서비스도 해보고 싶어요
          </div>
          <Form.Control type="text" as="textarea" rows={5} />
        </Form.Group>

        <Button variant="primary" type="submit">
          저장
        </Button>
      </Form>
    </div>
  );
}

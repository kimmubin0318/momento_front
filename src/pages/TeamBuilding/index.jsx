import { Form, Button } from "react-bootstrap";

import styles from "./index.module.scss";
import icon from "../../assets/icon.png";

export default function TeamBuilding() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.startDate.value,
      e.target.endDate.value,
      e.target.teamSize.value,
      e.target.myPosition.value,
      e.target.positionCombination.value
    );
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

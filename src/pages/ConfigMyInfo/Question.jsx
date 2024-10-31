import { Card, Form } from "react-bootstrap";

import styles from "./index.module.scss";

const Question = ({ question, name, value, setValue }) => {
  const handleChange = (e) => {
    setValue((v) => ({ ...v, [name]: e.target.value }));
  };

  return (
    <>
      <Card.Title>{question}</Card.Title>
      <Form>
        <Form.Group controlId={name}>
          <Form.Control
            className={styles.textarea}
            type="text"
            autoFocus
            as="textarea"
            value={value[name] ?? ""}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default Question;

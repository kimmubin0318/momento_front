import { Card, Form } from "react-bootstrap";

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
            type="text"
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

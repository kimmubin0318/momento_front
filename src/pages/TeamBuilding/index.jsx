import { Form, Button } from "react-bootstrap";

export default function TeamBuilding() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO Handle form submission logic here
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
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control id="startDate" aria-label="startDate" type="date" />
          <Form.Control id="endDate" aria-label="endDate" type="date" />
        </Form.Group>

        <Form.Group controlId="teamSize">
          <Form.Label>Team Size</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group controlId="myPosition">
          <Form.Label>My Position</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="positionCombination">
          <Form.Label>Position Combination</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

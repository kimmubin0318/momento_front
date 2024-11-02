import { Card, Form } from 'react-bootstrap';

import styles from './index.module.scss';

const Question = ({ question, description, name, value, setValue }) => {
    const handleChange = (e) => {
        setValue((v) => ({ ...v, [name]: e.target.value }));
    };

    return (
        <>
            <Card.Title className={styles.question}>{question}</Card.Title>
            <div className={styles.description}>{description}</div>
            <Form>
                <Form.Group controlId={name}>
                    <Form.Control
                        className={styles.textarea}
                        type="text"
                        autoFocus
                        as="textarea"
                        value={value[name] ?? ''}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
        </>
    );
};

export default Question;

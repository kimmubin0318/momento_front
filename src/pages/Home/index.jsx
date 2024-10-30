import style from './style.module.scss';
import Button from './images/Button.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

export default function Home() {
    const navigate = useNavigate();

    const personnelNumber = [
        { value: '2', label: '2명' },
        { value: '3', label: '3명' },
        { value: '4', label: '4명' },
        { value: '5', label: '5명' },
    ];

    const [personnelSave, setPersonnelSave] = useState(personnelNumber[0]);

    return (
        <div className={style.buttonContainer}>
            <button
                className={style.button}
                onClick={() => navigate('/loading')}
            >
                <img src={Button} alt="Button Icon" />
            </button>
            <Select
                options={personnelNumber}
                onChange={setPersonnelSave}
                defaultValue={personnelNumber[0]}
                classNamePrefix="react-select" // 클래스 이름 접두사 설정
            />
        </div>
    );
}

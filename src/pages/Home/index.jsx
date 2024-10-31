import style from './style.module.scss';
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
        { value: '6', label: '6명' },
    ];
    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,

            fontSize: '12px',
            color: state.isSelected ? '#212529' : '#000000',
            backgroundColor: state.isSelected ? '#a0a0a0' : '#ffffff',
        }),
        control: (defaultStyles) => ({
            ...defaultStyles,
            display: 'flex',
            justifyContent: 'center',
            fontSize: '15px',
            backgroundImage:
                'linear-gradient(90deg, #935ec8 20%, #1e60d3 100%)',
            paddingLeft: '10px',
            paddingRight: '10px',
            paddingTop: '5px',
            paddingBottom: '5px',
            border: 'none',
            borderRadius: '20px',
            boxShadow: 'none',
            width: '219px',
            minHeight: '48px',
        }),
        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            color: '#282828',
            lineHeight: 'normal', // 텍스트가 잘리지 않도록 설정
        }),
        placeholder: (defaultStyles) => ({
            ...defaultStyles,
            padding: '2px',
            color: '#282828',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }),
    };
    const [personnelSave, setPersonnelSave] = useState(personnelNumber[0]);
    // personnelSave을 서버에 던져줌 ( 인원 수 정보 )
    return (
        <div className={style.buttonContainer}>
            <button
                className={style.button}
                onClick={() => navigate('/loading')}
            >
                Building Start
            </button>
            <Select
                placeholder="인원 선택"
                options={personnelNumber}
                onChange={setPersonnelSave}
                styles={customStyles}
            />
        </div>
    );
}

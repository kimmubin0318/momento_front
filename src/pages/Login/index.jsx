import React from 'react';
import Button from '../../components/Login/LoginButton.jsx';
import KLogoImage from './images/KloginBar.svg';
import picture from './images/LoginPicture.png';
import TeamLogo from './images/Teamlogo.svg';
import SNSlogo from './images/SNS.svg';
import styles from './Login.module.scss';

export default function Login() {
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = link;
    };

    const buttonProps = [
        {
            type: {},
            image: KLogoImage,
            click: loginHandler,
        },
    ];

    return (
        <div className={styles.loginContainer}>
            <img
                src={TeamLogo}
                alt="Team Up Logo"
                className={styles.loginTitle}
            />
            <img
                src={picture}
                alt="Login-picture"
                className={styles.loginImage}
            />
            <img src={SNSlogo} alt="SNS text" className={styles.loginSNS} />
            {buttonProps.map((button, i) => (
                <Button
                    className={styles.loginKakaoButton}
                    image={button.image}
                    click={button.click}
                    key={i}
                />
            ))}
        </div>
    );
}

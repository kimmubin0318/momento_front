import React from "react";
import "./Login.scss";
import Button from "../../components/LoginButton.jsx";
import KLogoImage from "../../assets/Klogo.png";
import picture from "../../assets/LoginPicture.png";
import TeamLogo from "../../assets/Teamlogo.svg";
import SNSlogo from "../../assets/SNS.svg";

export default function Login() {
  const REST_API_KEY = "백엔드한테 달라고 하자1";
  const REDIRECT_URI = "백엔드한테 달라고 하자2";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  const buttonProps = [
    {
      type: "login-kakao-button",
      name: "카카오로 시작하기",
      logo: "KLogo",
      image: KLogoImage,
      click: loginHandler,
    },
  ];

  return (
    <div className="login-container">
      <img src={TeamLogo} alt="Team Up Logo" className="login-title" />
      <img src={picture} alt="Login-picture" className="login-image" />
      <img src={SNSlogo} alt="SNS text" className="login-SNS" />
      {buttonProps.map((button, i) => (
        <Button
          type={button.type}
          name={button.name}
          logo={button.logo}
          image={button.image}
          click={button.click}
          key={i}
        />
      ))}
    </div>
  );
}

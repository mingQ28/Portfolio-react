import React from "react";
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <div className="mt-80 mr-30 text-right">
      <ReactTyped
        strings={["안녕하세요.&nbsp; <br>프론트엔드 개발자 박민서입니다."]}
        typeSpeed={70} // 타이핑 속도
        backSpeed={25} // 타이핑 지우는 속도
        loop={false} // 반복 안함
        style={{
          fontSize: "70px",
          fontWeight: 600,
          lineHeight: "1.2em", // span 기준으로 높이 적용
          verticalAlign: "middle",
        }}
      />
    </div>
  );
};

export default TypingEffect;

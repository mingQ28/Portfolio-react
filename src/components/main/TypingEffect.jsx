import React from "react";
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <div className="flex mt-70 flex-col items-center space-y-2 px-5 py-10 text-center">
      <ReactTyped
        strings={["안녕하세요. <br>프론트엔드 개발자 박민서입니다."]}
        typeSpeed={70} // 타이핑 속도
        backSpeed={25} // 타이핑 지우는 속도
        loop={false} // 반복 안함
        style={{
          fontSize: "50px",
        }}
      />
    </div>
  );
};
export default TypingEffect;

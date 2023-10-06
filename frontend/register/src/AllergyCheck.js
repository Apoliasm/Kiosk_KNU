import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Common.css";

export default function AllergyCheck() {
    const navigate = useNavigate(); // useNavigate hook to get the navigate function
    const location = useLocation();

    const PhoneNumber = location.state.PhoneNumber;
    const inputValue = location.state.inputValue;
    let ReligioncheckboxValue = location.state.checkedBox;

    if (typeof ReligioncheckboxValue === 'undefined') {
        ReligioncheckboxValue = 0;
        console.log('종교 체크박스 없는상태.')
    }

    let VegancheckboxValue = location.state.checkedBox;
    if (typeof VegancheckboxValue === 0) {
        VegancheckboxValue = 0;
        console.log('비건쪽 체크박스 없는상태.')
    }

    //서버로 사용자의 입력값을 보내준다. 등록버튼 클릭 시 호출.
    const handleButtonClick = () => {
      // 서버로 데이터 전송
      const postData = {
          user_name: inputValue,
          user_phonenum: PhoneNumber,
      };
      
      if (VegancheckboxValue !== 0) {
        postData.user_vegetarian = VegancheckboxValue;
      }

      if (ReligioncheckboxValue !== 0) {
        postData.religion = ReligioncheckboxValue;
      }

      axios.post('서버 URL', postData)  // '서버 URL' 부분에 테스트할 서버 주소 넣어주면 됨.
          .then(response => {
              console.log(response.data);  // 요청 성공시 alert 하나 해줄 예정.
              alert("사용자 등록이 완료되었습니다");
          })
          .catch(error => {
              console.error(error);
              alert("사용자 등록이 실패했습니다. 다시 시도해주세요.");
          });
    };
    return (
      <div>
        <set>
          <header>Easy KIOSK</header>
          <body>
            <div className="upper-t">알러지가 있으신가요?</div>
            <br/>
            <button className= "next-button" onClick={() => navigate("/allergy", { state : {inputValue, PhoneNumber } })}>네</button>
            <br/>
            <br/>
            {/*알러지 해당없으면 바로 등록 모달창으로 보내주기.*/}
            <button className = "next-button" onClick={(handleButtonClick)}>등록</button> {/* Button to navigate to the next page */}
          </body>
          <footer>
          </footer>
        </set>
        {/* Face recognition content... */}
      </div>
    );
}
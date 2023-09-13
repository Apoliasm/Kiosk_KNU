import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./Common.css";

export default function FaceReco() {
    const navigate = useNavigate(); // useNavigate hook to get the navigate function
  
    return (
      <div>
        <set>
          <header>Easy KIOSK</header>
          <body>body자리</body>
          <footer>
            <div className="blinking-text">나의 정보를 등록하세요 1/5</div>
            <button className = "next-button" onClick={() => navigate("/username")}>얼굴인식페이지</button> {/* Button to navigate to the next page */}
          </footer>
        </set>
        {/* Face recognition content... */}
      </div>
    );
}
// /*
// We're constantly improving the code you see. 
// Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
// */

// import React from "react";

// export const Hambugerbutton = ({ className }) => {
//   return (
//     <svg
//       className={`hambugerbutton ${className}`}
//       fill="none"
//       height="48"
//       viewBox="0 0 48 48"
//       width="48"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g className="g" clipPath="url(#clip0_4_85)">
//         <path
//           className="path"
//           d="M40 35C40.7704 35.0004 41.5112 35.2972 42.0688 35.8288C42.6264 36.3605 42.958 37.0863 42.995 37.8558C43.0321 38.6254 42.7716 39.3797 42.2677 39.9624C41.7637 40.5451 41.0548 40.9117 40.288 40.986L40 41H8C7.22957 40.9996 6.48881 40.7028 5.93123 40.1712C5.37364 39.6395 5.04198 38.9137 5.00495 38.1442C4.96793 37.3746 5.22838 36.6203 5.73235 36.0376C6.23632 35.4549 6.94516 35.0883 7.712 35.014L8 35H40ZM40 21C40.7957 21 41.5587 21.3161 42.1213 21.8787C42.6839 22.4413 43 23.2044 43 24C43 24.7956 42.6839 25.5587 42.1213 26.1213C41.5587 26.6839 40.7957 27 40 27H8C7.20435 27 6.44129 26.6839 5.87868 26.1213C5.31607 25.5587 5 24.7956 5 24C5 23.2044 5.31607 22.4413 5.87868 21.8787C6.44129 21.3161 7.20435 21 8 21H40ZM40 7C40.7957 7 41.5587 7.31607 42.1213 7.87868C42.6839 8.44129 43 9.20435 43 10C43 10.7956 42.6839 11.5587 42.1213 12.1213C41.5587 12.6839 40.7957 13 40 13H8C7.20435 13 6.44129 12.6839 5.87868 12.1213C5.31607 11.5587 5 10.7956 5 10C5 9.20435 5.31607 8.44129 5.87868 7.87868C6.44129 7.31607 7.20435 7 8 7H40Z"
//           fill="#545454"
//         />
//       </g>
//       <defs className="defs">
//         <clipPath className="clip-path" id="clip0_4_85">
//           <rect className="rect" fill="white" height="48" width="48" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// };

import React, { useState } from "react";

export const Hambugerbutton = ({ className }) => {
  // 로그인 상태를 저장하는 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 프로필 창이 열렸는지를 저장하는 상태
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // 로그인 창이 열렸는지를 저장하는 상태
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // 햄버거 버튼 클릭 시 호출되는 함수
  const handleHamburgerClick = () => {
    console.log("Hamburger clicked!");
    // 로그인 상태에 따라 동작 분기
    if (isLoggedIn) {
      // 이미 로그인된 경우, 프로필 창 토글
      setIsProfileOpen((prevIsProfileOpen) => !prevIsProfileOpen);
    } else {
      // 로그인되지 않은 경우, 로그인 창 열기
      setIsLoginOpen(true);
    }
  };

  return (
    <div>
      {/* 햄버거 버튼 */}
      <svg
      className={`hambugerbutton ${className}`}
      onClick={handleHamburgerClick}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_4_85)">
        <path
          className="path"
          d="M40 35C40.7704 35.0004 41.5112 35.2972 42.0688 35.8288C42.6264 36.3605 42.958 37.0863 42.995 37.8558C43.0321 38.6254 42.7716 39.3797 42.2677 39.9624C41.7637 40.5451 41.0548 40.9117 40.288 40.986L40 41H8C7.22957 40.9996 6.48881 40.7028 5.93123 40.1712C5.37364 39.6395 5.04198 38.9137 5.00495 38.1442C4.96793 37.3746 5.22838 36.6203 5.73235 36.0376C6.23632 35.4549 6.94516 35.0883 7.712 35.014L8 35H40ZM40 21C40.7957 21 41.5587 21.3161 42.1213 21.8787C42.6839 22.4413 43 23.2044 43 24C43 24.7956 42.6839 25.5587 42.1213 26.1213C41.5587 26.6839 40.7957 27 40 27H8C7.20435 27 6.44129 26.6839 5.87868 26.1213C5.31607 25.5587 5 24.7956 5 24C5 23.2044 5.31607 22.4413 5.87868 21.8787C6.44129 21.3161 7.20435 21 8 21H40ZM40 7C40.7957 7 41.5587 7.31607 42.1213 7.87868C42.6839 8.44129 43 9.20435 43 10C43 10.7956 42.6839 11.5587 42.1213 12.1213C41.5587 12.6839 40.7957 13 40 13H8C7.20435 13 6.44129 12.6839 5.87868 12.1213C5.31607 11.5587 5 10.7956 5 10C5 9.20435 5.31607 8.44129 5.87868 7.87868C6.44129 7.31607 7.20435 7 8 7H40Z"
          fill="#545454"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_4_85">
          <rect className="rect" fill="white" height="48" width="48" />
        </clipPath>
      </defs>
    </svg>
      {/* <button className={`hamburger-button ${className}`} onClick={handleHamburgerClick}>
        Hamburger Button
      </button> */}

      {/* 프로필 창 */}
      {isLoggedIn && isProfileOpen && (
        <div className="profile-container">
          {/* 프로필 내용 */}
          <p>Profile Content</p>
        </div>
      )}

      {/* 로그인 창 */}
      {!isLoggedIn && isLoginOpen && (
        <div className="login-container">
          {/* 로그인 내용 */}
          <p>Login Content</p>
        </div>
      )}
    </div>
  );
};

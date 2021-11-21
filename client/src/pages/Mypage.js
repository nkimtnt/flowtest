import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function Mypage(props) {
  /* TODO : props로 받은 유저정보를 화면에 표시하세요. */
  if (props.userinfo) {
    return (
      <div>
        <center>
          <h1>Mypage</h1>
          <div className="nickname">{props.userinfo.username}</div>
          <div className="email">{props.userinfo.email}</div>
          <button className="btn btn-logout" onClick={props.handleLogout}>
            logout
          </button>
        </center>
      </div>
    );
  } else {
    return <div />;
  }
}
export default Mypage;

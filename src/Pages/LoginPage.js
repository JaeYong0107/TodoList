import React from "react";

const Login = () => {

    const jaeyong = {
        id: 'dwd07',
        password: 'wodyd123!'
    }

    return (
        <div className="Login-content">
            <h1>로그인 페이지</h1>
            <div className="Login">
                <h1>Todo List</h1>
                <input type="text" palceholder="아이디를 입력하세요." /><br />
                <input type="text" palceholder="비밀번호를 입력하세요." />
                <button className="LoginBtn">로그인</button>
            </div>
        </div>
    )
}

export default Login;
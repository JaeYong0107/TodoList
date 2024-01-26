import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const jaeyong = {
        id: 'dwd07',
        password: 'wodyd123!'
    }

    const [idValue, setIdValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const navigate = useNavigate();

    const getId = (event) => {
        setIdValue(event.target.value);
        console.log(idValue);
    }

    const getPass = (event) => {
        setPassValue(event.target.value);
        console.log(passValue);
    }

    const toTodoPage = () => {
        if (jaeyong.id == idValue && jaeyong.password == passValue) {
            navigate('/Todo');
        }
    }

    return (
        <div className="Login-content">
            <h1>로그인 페이지</h1>
            <div className="Login">
                <h1>Todo List</h1>
                <input
                    className="id"
                    type="text"
                    palceholder="아이디를 입력하세요."
                    value={idValue}
                    onChange={getId}
                /><br />
                <input
                    className="password"
                    type="text"
                    palceholder="비밀번호를 입력하세요."
                    value={passValue}
                    onChange={getPass}
                />
                <button className="LoginBtn" onClick={toTodoPage}>로그인</button>
            </div>
        </div>
    )
}

export default Login;
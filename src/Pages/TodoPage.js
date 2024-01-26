import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {

    const [inputs, setInputs] = useState([
        { input: '' }
    ]);

    console.log(inputs);

    const navigate = useNavigate();

    const Logout = () => {
        navigate('/');
    }

    const AddTextBox = () => {
        setInputs([...inputs, { input: '' }]);
    }

    const DelTextBox = (index) => {
        const list = [...inputs]; // 원본을 훼손하지 않기 위해
        list.splice(index, 1);
        setInputs(list);
    }

    const ChangeTexBox = (event, index) => { //입력한 값들을 저장. 이 코드가 없으면 input의 마지막 상태만 저장이되고
        const { name, value } = event.target; // 이전 값들은 저장이 되지 않는다. value뿐만 아니라 index를 저장하기 위해서도
        const list = [...inputs];             // 이 함수가 필요하다. 그래야 input을 제거할 때 해당 index의 input을 제거할 수 있다.
        list[index][name] = value;
        setInputs(list);
    }

    return (
        <div className="Todo-content">
            <nav className="Todo-nav">
                <h1>TodoList 페이지</h1>
                <button className="LogoutBtn" onClick={Logout}>로그아웃</button>
            </nav>
            <div className="Todo">
                <div className="bar" />
                <div className="Todo-List">
                    {inputs.map((name, index) => (
                        <div key={index} className="Todo-row">
                            <input className="checkbox" type="checkbox" />
                            <input name="input" className="text" type="text" required
                                value={name.input}
                                onChange={(event) => ChangeTexBox(event, index)}
                            />
                            {inputs.length - 1 === index && inputs.length < 10 && (
                                <button className="AddBtn" onClick={AddTextBox}>추가</button>
                            )}
                            {inputs.length > 1 && (
                                <button className="DelBtn" onClick={() => DelTextBox(index)}>제거</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Todo;
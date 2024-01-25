import React from "react";

const Todo = () => {
    return (
        <div className="Todo-content">
            <h1>TodoList 페이지</h1>
            <div className="Todo">
                <div className="bar" />
                <div className="Todo-List">
                    <input className="checkbox" type="checkbox"></input>
                    <input type="text" />
                </div>
                <button>추가</button>
            </div>
        </div>
    )
}

export default Todo;
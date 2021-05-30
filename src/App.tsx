import * as React from "react";
import { memo } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    );
}

export default memo(App);

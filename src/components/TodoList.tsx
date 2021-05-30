import * as React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, getLastRemoved } from "../redux/selectors";
import { restoreLastRemoved, setTodos } from "../redux/actions";

const TodoList: FC = () => {
    const dispatch = useDispatch();

    const items = useSelector(getItems);
    const lastRemoved = useSelector(getLastRemoved);

    useEffect(() => {
        const items = localStorage.getItem("items");

        if (items !== null) {
            dispatch(setTodos(JSON.parse(items)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items.length]);

    const restoreItem = () => {
        if (!lastRemoved) return;

        dispatch(restoreLastRemoved());
    };

    return (
        <div>
            <TodoInput />
            <br />
            {!!items.length
                ? items.map((item, index) => (
                      <div className="App-listitem" key={index}>
                          <TodoItem id={index} todoItem={item} />
                      </div>
                  ))
                : ""}
            <br />
            {!!lastRemoved ? (
                <button className="App-button" style={{}} onClick={restoreItem}>
                    Restore deleted item
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default memo(TodoList);

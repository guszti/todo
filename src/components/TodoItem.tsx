import * as React from "react";
import { FC, memo } from "react";
import { Item } from "../types";
import { removeTodo, setLastRemoved, setTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/selectors";

type OwnProps = {
    todoItem: Item;
    id: number;
};

const TodoItem: FC<OwnProps> = ({ todoItem, id }) => {
    const dispatch = useDispatch();

    const items = useSelector(getItems);

    const removeItem = (id: number) => {
        const newList = [...items];
        newList.splice(id, 1);

        dispatch(removeTodo(id));
        dispatch(setLastRemoved({ ...items[id], index: id }));
    };

    const itemUp = (id: number) => {
        if (id > 0) {
            const newList = [...items];
            const temp = newList[id - 1];

            newList[id - 1] = newList[id];
            newList[id] = temp;

            dispatch(setTodos(newList));
        }
    };

    const itemDown = (id: number) => {
        if (id < items.length - 1) {
            const newList = [...items];
            const temp = newList[id + 1];

            newList[id + 1] = newList[id];
            newList[id] = temp;

            dispatch(setTodos(newList));
        }
    };

    const handleCheck = (id: number) => {
        const newList = [...items];
        newList[id].isChecked = !newList[id].isChecked;

        dispatch(setTodos(newList));
    };

    return (
        <div>
            <input
                type="checkbox"
                onChange={() => handleCheck(id)}
                checked={todoItem.isChecked}
            />
            {todoItem.isChecked ? (
                <del> {todoItem.title}</del>
            ) : (
                "   " + todoItem.title
            )}
            <button
                onClick={() => removeItem(id)}
                style={{
                    float: "right",
                    height: 27,
                    width: 27,
                    color: "yellow",
                    backgroundColor: "Salmon",
                }}
            >
                X
            </button>
            <button
                onClick={() => itemDown(id)}
                style={{
                    float: "right",
                    height: 27,
                    width: 27,
                    color: "yellow",
                    backgroundColor: "Teal",
                }}
            >
                -
            </button>
            <button
                onClick={() => itemUp(id)}
                style={{
                    float: "right",
                    height: 27,
                    width: 27,
                    color: "yellow",
                    backgroundColor: "Teal",
                }}
            >
                +
            </button>
            <small
                style={{
                    float: "right",
                    paddingRight: "10px",
                    fontSize: 12,
                    paddingTop: "7px",
                }}
            >
                {todoItem.date}
            </small>
        </div>
    );
};

export default memo(TodoItem);

import * as React from "react";
import { FC, memo } from "react";

type OwnProps = {
    todoItem: any;
    handleDelete(id: number): void;
    handleCheck(id: number): void;
    id: number;
    itemDown(id: number): void;
    itemUp(id: number): void;
};

const TodoItem: FC<OwnProps> = ({
    todoItem,
    handleDelete,
    handleCheck,
    id,
    itemDown,
    itemUp,
}) => {
    return (
        <div>
            {todoItem.checked ? (
                <input
                    type="checkbox"
                    onChange={handleCheck.bind(this, id)}
                    checked
                />
            ) : (
                <input type="checkbox" onChange={handleCheck.bind(this, id)} />
            )}
            {todoItem.checked ? (
                <del> {todoItem.title}</del>
            ) : (
                "   " + todoItem.title
            )}
            <button
                onClick={handleDelete.bind(this, id)}
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
                onClick={itemDown.bind(this, id)}
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
                onClick={itemUp.bind(this, id)}
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

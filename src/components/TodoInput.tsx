import * as React from "react";
import { ChangeEvent, FC, FormEvent, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

enum InputNames {
    Title = "title",
    Date = "date",
}

const TodoInput: FC = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case InputNames.Title:
                setTitle(e.target.value);
                break;
            default:
                setDate(e.target.value);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!title) return;

        const todo = {
            title,
            date,
            isChecked: false,
        };

        dispatch(addTodo(todo));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="App-input"
                    placeholder="enter title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
                <input
                    className="App-input"
                    placeholder="add date"
                    type="text"
                    name="date"
                    value={date}
                    onChange={handleChange}
                />
                <input className="App-button" type="submit" value="add todo" />
            </form>
        </div>
    );
};

export default memo(TodoInput);

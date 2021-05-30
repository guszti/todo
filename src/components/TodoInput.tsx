import * as React from "react";
import { ChangeEvent, FC, FormEvent, memo, useState } from "react";

enum InputNames {
    Title = "title",
    Date = "date",
}

type OwnProps = {
    addItem(newTodo: any): void;
};

const TodoInput: FC<OwnProps> = ({ addItem }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [isChecked, setIsChecked] = useState(false);

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
        if (!!title) {
            const newTodo = {
                title,
                date,
                isChecked,
            };
            addItem(newTodo);
        }
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

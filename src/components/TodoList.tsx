import * as React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { FC, memo, useEffect, useState } from "react";

export type Item = {
    id: number;
    title: string;
    isChecked: boolean;
};

const TodoList: FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [last, setLast] = useState<Item | null>(null);

    useEffect(() => {
        const items = localStorage.getItem("items");

        if (items !== null) {
            setItems(JSON.parse(items));
        }
    }, []);

    /*
    componentDidUpdate(){
      const items = this.state.items;
      localStorage.setItem('items', JSON.stringify(items));
    }
     */

    const restoreItem = () => {
        if (last === null) return;

        const newList = [...items];

        newList.splice(last.id, 0);

        setItems(newList);
        setLast(null);
    };

    const addItem = (item: Item) => setItems([...items, item]);

    const removeItem = (id: number) => {
        const newList = [...items];
        newList.splice(id, 1);

        setItems(newList);
        setLast(items[id]);
    };

    const itemUp = (id: number) => {
        if (id > 0) {
            const newList = [...items];
            const temp = newList[id - 1];

            newList[id - 1] = newList[id];
            newList[id] = temp;

            setItems(newList);
        }
    };

    const itemDown = (id: number) => {
        if (id < items.length - 1) {
            const newList = [...items];
            const temp = newList[id + 1];

            newList[id + 1] = newList[id];
            newList[id] = temp;

            setItems(newList);
        }
    };

    const handleCheck = (id: number) => {
        const newList = [...items];
        newList[id].isChecked = !newList[id].isChecked;

        setItems(newList);
    };

    return (
        <div>
            <TodoInput addItem={addItem} />
            <br />
            {items !== null
                ? items.map((item, index) => (
                      <div className="App-listitem" key={index}>
                          <TodoItem
                              id={index}
                              todoItem={item}
                              handleDelete={removeItem}
                              itemUp={itemUp}
                              itemDown={itemDown}
                              handleCheck={handleCheck}
                          />
                      </div>
                  ))
                : ""}
            <br />
            {last ? (
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

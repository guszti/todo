import { Item, RemovedItem } from "../types";
import { TodoActions } from "./constants";

export const setTodos = (items: Item[]) => ({
    type: TodoActions.SetTodos,
    payload: {
        items,
    },
});

export const addTodo = (item: Item) => ({
    type: TodoActions.AddTodo,
    payload: {
        item,
    },
});

export const removeTodo = (index: number) => ({
    type: TodoActions.RemoveTodo,
    payload: {
        index,
    },
});

export const setLastRemoved = (item: RemovedItem | null) => ({
    type: TodoActions.SetLastRemoved,
    payload: {
        item,
    },
});

export const restoreLastRemoved = () => ({
    type: TodoActions.RestoreLastRemoved,
});

import { StoreState } from "../types";
import { addTodo, removeTodo, setLastRemoved, setTodos } from "./actions";
import { TodoActions } from "./constants";

const initialState: StoreState = {
    todoItems: [],
    lastRemoved: null,
};

type Actions = ReturnType<typeof addTodo> &
    ReturnType<typeof removeTodo> &
    ReturnType<typeof setLastRemoved> &
    ReturnType<typeof setTodos>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case TodoActions.SetTodos:
            return {
                ...state,
                todoItems: action.payload.items,
            };
        case TodoActions.AddTodo:
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload.item],
            };
        case TodoActions.RemoveTodo:
            return {
                ...state,
                todoItems: state.todoItems.filter(
                    (item, index) => index !== action.payload.index
                ),
            };
        case TodoActions.SetLastRemoved:
            return {
                ...state,
                lastRemoved: action.payload.item,
            };
        case TodoActions.RestoreLastRemoved:
            return {
                ...state,
                todoItems: [...state.todoItems, state.lastRemoved!],
                lastRemoved: null,
            };
        default:
            return state;
    }
};

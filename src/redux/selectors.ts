import { StoreState } from "../types";

export const getItems = (state: StoreState) => state.todoItems;

export const getLastRemoved = (state: StoreState) => state.lastRemoved;

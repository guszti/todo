export type StoreState = {
    todoItems: Item[];
    lastRemoved: RemovedItem | null;
};

export type Item = {
    title: string;
    date: string;
    isChecked: boolean;
};

export type RemovedItem = Item & {
    index: number;
};

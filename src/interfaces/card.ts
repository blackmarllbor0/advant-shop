import { seacrList } from "./searchList";

export interface PropsCards {
    data: seacrList[];
    category: string;
}

interface Comment {
    userName: string;
    comment: string;
    date: string;
}
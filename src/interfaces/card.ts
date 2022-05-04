import { seacrList } from "./searchList";

export interface PropsCards {
    data: seacrList[];
}

interface Comment {
    userName: string;
    comment: string;
    date: string;
}
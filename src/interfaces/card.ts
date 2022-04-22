export interface PropsCard {
    id: string | number;
    title: string;
    image: string[];
    category: string;
    article: string | number;
    color?: string[] | [];
    price: string | number;
    comments: Comment[];
    revies: number;
    availability: boolean;
}

export interface PropsCards {
    data: PropsCard[];
    category: string;
}

interface Comment {
    userName: string;
    comment: string;
    date: string;
}
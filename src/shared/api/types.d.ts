export type Note = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string | null;
    content: string;
};

export type Notes = Note[];

export type Note = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string | null;
    content: string;
    attachments: string[];
    deleted: boolean;
    pinned: boolean;
};

export type Notes = Note[];

export type NoteCreateInput = {
    createdAt: Date;
    title: string | null;
    content: string;
    pinned: boolean;
    deleted: boolean;
    attachments: string[];
};

export type NoteUpdateInput = NoteCreateInput & { id: number; updatedAt: Date };

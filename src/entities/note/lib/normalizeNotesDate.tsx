import { Notes } from "..";

export const normalizeNotesDate = (notes: Notes): Notes =>
    notes.map((note) => {
        const createdAt = new Date(note.createdAt);
        const updatedAt = new Date(note.updatedAt);

        return { ...note, createdAt, updatedAt };
    });

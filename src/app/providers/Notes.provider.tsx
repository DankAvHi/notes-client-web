"use client";

import { Note, NoteCreateInput, NoteUpdateInput, Notes, useNotes } from "@/entities/note";
import { ReactNode, createContext, useContext } from "react";

type NotesContextType = {
    getNote: (id: number) => Note | undefined;
    getNotes: () => Notes | undefined;
    createNote: (note: NoteCreateInput) => Promise<void>;
    updateNote: (note: NoteUpdateInput) => Promise<void>;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
    const { getNote, getNotes, createNote, updateNote } = useNotes();
    return (
        <NotesContext.Provider value={{ getNote, getNotes, createNote, updateNote }}>{children}</NotesContext.Provider>
    );
};

export const useNotesContext = () => {
    const notesContext = useContext(NotesContext);
    if (!notesContext) {
        throw new Error("No EditContext.Provider found when calling useEditContext");
    }
    return notesContext;
};

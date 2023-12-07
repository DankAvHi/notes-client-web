"use client";

import { useCallback, useEffect, useState } from "react";
import { useNotesLocal } from "./useNotesLocal";
import { Note, NoteCreateInput, NoteUpdateInput, Notes } from "..";
import { isUndefiend } from "@/shared/lib";

export const useNotes = () => {
    const { notes: localNotes, setNotes: setLocalNotes } = useNotesLocal();

    const [notes, setNotes] = useState<Notes | undefined>(undefined);

    const createNote = useCallback(
        async (newNote: NoteCreateInput) => {
            if (notes) {
                const { title, content } = newNote;
                const id = notes.length > 0 ? notes.reduce((prev, cur) => (cur.id > prev.id ? cur : prev)).id + 1 : 0;
                const newDate = new Date();
                const newTitle = isUndefiend(title) ? null : (title as string);

                const note: Note = {
                    id,
                    title: newTitle,
                    content,
                    createdAt: newDate,
                    updatedAt: newDate,
                    attachments: [],
                    pinned: false,
                    deleted: false,
                };

                setLocalNotes([...notes, note]);
            }
        },
        [setLocalNotes, notes],
    );

    const updateNote = useCallback(
        async (updateNote: NoteUpdateInput) => {
            if (notes) {
                const newNotes = [...notes].map((note) => (note.id === updateNote.id ? updateNote : note));
                setLocalNotes(newNotes);
            }
        },
        [notes, setLocalNotes],
    );

    useEffect(() => {
        const notes: Notes = [...(localNotes || [])];
        setNotes(notes);
    }, [localNotes, setNotes]);

    const getNote = useCallback(
        (id: number) => {
            if (notes) {
                const note = notes.filter((note) => note.id === id);
                return note[0];
            }
            return undefined;
        },
        [notes],
    );

    const getNotes = useCallback(() => (typeof notes === "undefined" ? undefined : [...notes].reverse()), [notes]);

    return {
        getNote,
        getNotes,
        createNote,
        updateNote,
    };
};

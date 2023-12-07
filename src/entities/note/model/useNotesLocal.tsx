"use client";

import { Notes } from "..";
import { NOTES_LOCAL_STORAGE_NAME } from "./consts";
import { useLocalStorage } from "usehooks-ts";

export const useNotesLocal = () => {
    const [notes, setNotes] = useLocalStorage<Notes | undefined>(NOTES_LOCAL_STORAGE_NAME, undefined);

    return { notes, setNotes };
};

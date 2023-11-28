import { useCallback, useEffect, useState } from "react";
import { NOTES_LOCAL_STORAGE_NAME } from "./consts";
import { Notes } from "@/shared/api";

export const useNotesLocal = () => {
    const [notes, setNotesState] = useState<Notes>([]);

    const getLocalNotes = useCallback(
        (): Notes => JSON.parse(localStorage.getItem(NOTES_LOCAL_STORAGE_NAME) || "[]"),
        [],
    );

    const setLocalNotes = useCallback((notes: Notes) => {
        localStorage.setItem(NOTES_LOCAL_STORAGE_NAME, JSON.stringify(notes));
    }, []);

    useEffect(() => {
        setNotesState(getLocalNotes());
    }, [getLocalNotes]);

    return { notes, setLocalNotes };
};

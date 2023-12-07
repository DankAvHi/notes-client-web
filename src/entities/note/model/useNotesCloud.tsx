"use client";

import { Notes, useGetNotes } from "../api";
import { useCallback } from "react";

export const useNotesCloud = () => {
    const { data: notes, error, isLoading } = useGetNotes();

    const setCloudNotes = useCallback(async (notes: Notes) => {}, []);

    return { notes, setCloudNotes, isLoading, error };
};

"use client";

import useSWR from "swr";
import { normalizeNotesDate } from "../lib";
import { useMemo } from "react";
import { Notes } from ".";

export const useGetNotes = () => {
    const { data, error, isLoading } = useSWR<Notes>("notes");

    const normalData = useMemo(() => (data ? normalizeNotesDate(data) : undefined), [data]);

    return { data: normalData, error, isLoading };
};

"use client";

import useSWR from "swr";
import type { Notes } from "@/shared/api";

export const useGetNotes = () => {
    const { data, error, isLoading } = useSWR<Notes>("notes");

    const normalData = data as Notes;

    return { data: normalData, error, isLoading };
};

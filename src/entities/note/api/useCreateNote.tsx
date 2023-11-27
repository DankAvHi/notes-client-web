"use client";

import { fetcher } from "@/shared/api";
import { useCallback } from "react";

export const useCreateNote = () => {
    const createNote = useCallback(async () => {
        await fetcher("notes", { method: "POST" });
    }, []);
};

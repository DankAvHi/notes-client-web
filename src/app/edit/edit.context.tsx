"use client";

import { Dispatch, SetStateAction, createContext } from "react";

type EditContextType = {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    content: string;
    setContent: Dispatch<SetStateAction<string>>;
};

export const EditContext = createContext<EditContextType | undefined>(undefined);

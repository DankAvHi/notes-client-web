"use client";

import { ReactNode, useContext, useState } from "react";
import { EditContext } from "./edit.context";

export const EditProvider = ({ children }: { children: ReactNode }) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const value = {
        title,
        setTitle,
        content,
        setContent,
    };

    return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};

export const useEditContext = () => {
    const editContext = useContext(EditContext);
    if (!editContext) {
        throw new Error("No EditContext.Provider found when calling useEditContext");
    }
    return editContext;
};

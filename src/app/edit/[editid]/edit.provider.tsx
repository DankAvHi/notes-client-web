"use client";

import {
    ReactNode,
    useContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
    createContext,
    useCallback,
} from "react";
import { useNotesContext } from "../../providers";
import { useRouter } from "next/navigation";
import { NoteCreateInput, NoteUpdateInput } from "@/entities/note";

type EditContextType = {
    note: NoteCreateInput;
    setNote: Dispatch<SetStateAction<NoteCreateInput>>;
    exitEditor: (isDeleted?: boolean) => Promise<void>;
};

const initialNote: NoteCreateInput = {
    content: "",
    title: "",
    createdAt: new Date(),
    pinned: false,
    deleted: false,
    attachments: [],
};

export const EditContext = createContext<EditContextType | undefined>(undefined);

type EditProviderPropsType = {
    isNew: boolean;
    id: number | undefined;
    children: ReactNode;
};

export const EditProvider = (props: EditProviderPropsType) => {
    const { getNote, createNote, updateNote } = useNotesContext();
    const router = useRouter();
    const [note, setNote] = useState<NoteCreateInput>(initialNote);

    const exitEditor = useCallback(
        async (isDeleted: boolean = false) => {
            if (isDeleted) {
                updateNote({ ...note, deleted: true } as NoteUpdateInput);
                return router.back();
            }
            if ((note.title && note.title.length > 0) || note.content.length > 0) {
                props.isNew ? createNote(note) : updateNote(note as NoteUpdateInput);
            }
            return router.push("/");
        },
        [note, props.isNew, createNote, updateNote, router],
    );

    const value = {
        note,
        setNote,
        exitEditor,
    };

    useEffect(() => {
        if (!props.isNew && typeof props.id === "number") {
            setNote(getNote(props.id) || initialNote);
        }
    }, [setNote, getNote, props]);

    return <EditContext.Provider value={value}>{props.children}</EditContext.Provider>;
};

export const useEditContext = () => {
    const editContext = useContext(EditContext);
    if (!editContext) {
        throw new Error("No EditContext.Provider found when calling useEditContext");
    }
    return editContext;
};

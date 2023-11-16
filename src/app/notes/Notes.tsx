"use client";

import { useGetNotes } from "@/entities";

export const Notes = () => {
    const { data, isLoading, error } = useGetNotes();
    return (
        <div>
            {isLoading
                ? `Loading...`
                : error
                  ? `${error}`
                  : data && data.map((note) => <li key={note.id}>{note.content}</li>)}
        </div>
    );
};

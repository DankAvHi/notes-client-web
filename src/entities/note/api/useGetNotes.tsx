import useSWR from "swr";
import type { Notes } from "@/shared/api";

export const useGetNotes = () => {
    const { data, error, isLoading } = useSWR<Notes>("notes");

    return { data, error, isLoading };
};

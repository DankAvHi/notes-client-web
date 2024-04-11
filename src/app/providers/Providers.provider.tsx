import { NotesProvider } from "./Notes.provider";

export const Providers: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
    return (
        <>
            <NotesProvider>{children}</NotesProvider>
        </>
    );
};

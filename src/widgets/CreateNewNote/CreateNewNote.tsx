import { FAB } from "@/shared/ui";
import styles from "./CreateNewNote.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { CreateIcon } from "@/shared/assets";

export const CreateNewNote = () => {
    return (
        <FAB elementType="link" href={`new`} className={styles.CreateNewNote}>
            <CreateIcon />
            <p className={typographyStyles["label-large"]}>{`Создать`}</p>
        </FAB>
    );
};

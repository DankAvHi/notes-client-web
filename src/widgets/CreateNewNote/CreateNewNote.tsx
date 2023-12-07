import { FAB } from "@/shared/ui";
import styles from "./CreateNewNote.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import iconStyles from "@/shared/styles/global/icons.module.css";
import { CreateIcon } from "@/shared/assets";

export const CreateNewNote = () => {
    return (
        <FAB
            elementType="link"
            href={{ pathname: `edit`, query: { id: `new` } }}
            prefetch
            className={styles.CreateNewNote}
        >
            <CreateIcon className={`${iconStyles.small}`} />
            <p className={`${typographyStyles["label-large"]}`}>{`Создать`}</p>
        </FAB>
    );
};

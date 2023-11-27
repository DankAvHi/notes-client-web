import { MenuIcon, SearchIcon } from "@/shared/assets";
import materialTypographyStyles from "@/shared/styles/themes/material/typography.module.css";
import styles from "./Search.module.css";
import { IconButton } from "@/shared/ui";

export const Search = () => {
    return (
        <div className={styles.Search}>
            <IconButton title="Меню" type="button">
                <MenuIcon />
            </IconButton>
            <input
                className={`${materialTypographyStyles["body-large"]} ${styles.input}`}
                type="text"
                name="search"
                id="search"
                title="Поиск"
                placeholder="Поиск заметок..."
            />
            <SearchIcon />
        </div>
    );
};

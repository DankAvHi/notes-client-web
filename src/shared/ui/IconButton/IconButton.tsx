import styles from "./IconButton.module.css";
import { Button } from "../Button";
import type { CustomButtonProps } from "../Button";

export const IconButton = (props: CustomButtonProps) => {
    const { className, children, ...iconButtonProps } = props;
    return (
        <Button elementType="button" className={`${styles.IconButton} ${className}`} {...iconButtonProps}>
            {children}
        </Button>
    );
};

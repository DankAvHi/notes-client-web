import styles from "./FAB.module.css";
import { Button, CustomButtonProps } from "../Button";

export const FAB = (props: CustomButtonProps) => {
    const { children, className, ...FABProps } = props;
    return (
        <Button className={`${styles.FAB} ${className}`} {...FABProps}>
            {children}
        </Button>
    );
};

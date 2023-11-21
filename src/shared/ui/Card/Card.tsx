import { UIComponentWithChildrenProps } from "../UIComponent";
import styles from "./Card.module.css";

export const Card = (props: UIComponentWithChildrenProps) => {
    const { className, children, ...cardProps } = props;
    return (
        <div className={`${styles.Card} ${className}`} {...cardProps}>
            {children}
        </div>
    );
};

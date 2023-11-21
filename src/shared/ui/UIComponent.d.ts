export type UIComponentProps = {
    className?: string;
    style?: CSSProperties;
};

export type UIComponentWithChildrenProps = UIComponentProps & {
    children?: React.ReactNode;
};

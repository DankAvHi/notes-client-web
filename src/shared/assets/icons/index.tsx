// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import iconStyles from "@/shared/styles/global/icons.module.css";
import CreateIconRaw from "./create.svg?component";
import MenuIconRaw from "./menu.svg?component";
import SearchIconRaw from "./search.svg?component";
import ArrowBackRaw from "./arrow_back.svg?component";
import AttachmentRaw from "./attachment.svg?component";
import DeleteForeverRaw from "./delete_forever.svg?component";
import PushPinRaw from "./push_pin.svg?component";

type Icon = (props: { className?: string; viewBox?: string }) => JSX.Element;

const VB = "0 0 24 24";

const CreateIcon: Icon = (props) => {
    const { className, ...iconProps } = props;
    return <CreateIconRaw viewBox={VB} className={`${iconStyles.default} ${className}`} {...iconProps} />;
};
const MenuIcon: Icon = (props) => {
    const { className, ...iconProps } = props;
    return <MenuIconRaw viewBox={VB} className={`${iconStyles.default} ${className}`} {...iconProps} />;
};
const SearchIcon: Icon = (props) => {
    const { className, ...iconProps } = props;
    return <SearchIconRaw viewBox={VB} className={`${iconStyles.defaultTall} ${className}`} {...iconProps} />;
};
const ArrowBack: Icon = (props) => {
    const { className, ...iconProps } = props;
    return <ArrowBackRaw viewBox={VB} className={`${iconStyles.default} ${className}`} {...iconProps} />;
};
const Attachment: Icon = (props) => {
    const { className, ...iconProps } = props;
    return <AttachmentRaw viewBox={VB} className={`${iconStyles.default} ${className}`} {...iconProps} />;
};
const DeleteForever: Icon = (props) => {
    const { className, ...iconProps } = props;
    return <DeleteForeverRaw viewBox={VB} className={`${iconStyles.default} ${className}`} {...iconProps} />;
};
const PushPin: Icon = (props) => {
    const { className, ...iconProps } = props;
    return <PushPinRaw viewBox={VB} className={`${iconStyles.default} ${className}`} {...iconProps} />;
};

export { CreateIcon, MenuIcon, SearchIcon, ArrowBack, Attachment, DeleteForever, PushPin };

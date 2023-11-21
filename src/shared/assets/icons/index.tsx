// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import CreateIconRaw from "./create.svg?component";
import MenuIconRaw from "./menu.svg?component";
import SearchIconRaw from "./search.svg?component";

type Icon = (props: { className?: string; viewBox?: string }) => JSX.Element;

const defaultViewBox = "0 0 24 24";

const CreateIcon: Icon = (props) => <CreateIconRaw viewBox={defaultViewBox} {...props} />;
const MenuIcon: Icon = (props) => <MenuIconRaw viewBox={defaultViewBox} {...props} />;
const SearchIcon: Icon = (props) => <SearchIconRaw viewBox={defaultViewBox} {...props} />;

export { CreateIcon, MenuIcon, SearchIcon };

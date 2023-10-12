import HeaderDropdown from "./HeaderDropdown";
import HeaderStart from "./HeaderStart";
import HeaderEnd from "./HeaderEnd";

export default function Header() {
  return (
    <header className="flex justify-around ">
      <HeaderStart />
      <HeaderEnd />
      <HeaderDropdown />
    </header>
  );
}

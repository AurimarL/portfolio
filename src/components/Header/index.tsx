import HeaderDropdown from "./HeaderDropdown";
import HeaderStart from "./HeaderStart";
import HeaderEnd from "./HeaderEnd";

export default function Header() {
  return (
    <header>
      <nav className="navbar bg-base-100">
        <HeaderStart />
        <HeaderEnd />
        <HeaderDropdown />
      </nav>
    </header>
  );
}

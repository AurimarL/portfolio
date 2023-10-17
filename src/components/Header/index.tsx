import HeaderDropdown from "./HeaderDropdown";
import HeaderStart from "./HeaderStart";
import HeaderEnd from "./HeaderEnd";
import DonwloadResumeButton from "./DonwloadResumeButton";
import { getResumeDictionary } from "@/lib/dictionaries";

export default async function Header() {
  const data = await getResumeDictionary("en");

  return (
    <header className="flex justify-around ">
      <HeaderStart />
      <HeaderEnd />
      <HeaderDropdown>
        <DonwloadResumeButton data={data} />
      </HeaderDropdown>
    </header>
  );
}

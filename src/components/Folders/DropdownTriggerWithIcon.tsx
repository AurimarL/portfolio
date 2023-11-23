import { DropdownMenuTrigger } from "../ui/dropdown-menu";

export function DropdownTriggerWithIcon({
  label,
  Icon,
}: {
  label: string;
  Icon: React.ReactNode;
}) {
  return (
    <DropdownMenuTrigger>
      <div className="flex rounded-md flex-col justify-center items-center border md:w-fit w-14">
        <div className="h-12 w-12 md:w-16 md:h-16 p-2">{Icon}</div>
        <span className="text-base text-white">{label}</span>
      </div>
    </DropdownMenuTrigger>
  );
}

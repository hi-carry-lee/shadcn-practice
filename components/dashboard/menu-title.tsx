import { PersonStandingIcon } from "lucide-react";

function MenuTitle() {
  return (
    <h2 className="flex items-center text-2xl">
      <PersonStandingIcon size={40} className="text-violet-500" />
      SupportMe
    </h2>
  );
}

export default MenuTitle;

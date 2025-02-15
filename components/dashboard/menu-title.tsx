import { PersonStandingIcon } from "lucide-react";

function MenuTitle() {
  return (
    <h2 className="flex items-center justify-center text-2xl">
      <PersonStandingIcon size={40} className="text-pink-500" />
      SupportMe
    </h2>
  );
}

export default MenuTitle;

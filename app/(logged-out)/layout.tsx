// why this layout?
// because for the business perspective, the component we will build next is all about auth, it's better to have a standalone layout.js

import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

interface Props {
  children?: React.ReactNode;
}

function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen p-24 gap-4">
        {children}
      </div>
      {/* top-1/2 means the top side of element is the half */}
      {/* -translate-y-1/2: put the element to top with half of its height, so the element is just in the half of the whole screen */}
      <LightDarkToggle className="fixed right-2 top-1/2 -translate-y-1/2" />
      {/* why use fixed instead of absolute? absolute need a parent element, but fixed only need to place itself related to browser viewport */}
    </>
  );
}

export default LoggedOutLayout;

import MainMenu from "./components/main-menu";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen w-full">
      <div className="bg-muted overflow-auto">
        <MainMenu className="md:flex" />
      </div>
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Kerry!</h1>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;

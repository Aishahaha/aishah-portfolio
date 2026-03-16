import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <div className="container-wrapper">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />

          <div className="flex flex-col flex-1 py-6 pr-4 lg:py-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;

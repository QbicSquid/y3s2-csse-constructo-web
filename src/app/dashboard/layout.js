import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row w-full h-full">
        <Sidebar />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}

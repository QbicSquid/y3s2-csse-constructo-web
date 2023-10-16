import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  const today = new Date();

  return (
    <div className="flex flex-col mx-4 bg-white rounded w-72">
      <div className="w-full mt-6 mb-6 ml-6 text-xl font-semibold">
        Dashboard
      </div>
      <div className="w-full h-[3px] bg-custom_grey-3 mb-4"></div>
      <SidebarButton name="people" />
      <SidebarButton name="orders" />
      <SidebarButton name="suppliers" />
      <SidebarButton name="payments" />
      <SidebarButton name="settings" />
      <div className="flex-grow" />
      <div className="text-center">
        <div className="font-normal"
        >{today.getDate()}, {today.toLocaleDateString('default', {month: 'short'})} {today.getFullYear()}</div>
        <div>C 2023</div>
      </div>
    </div>
  );
}

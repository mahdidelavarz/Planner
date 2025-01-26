import DashboardLayout from "../layout/DashboardLayout";
import MiniCalendar from "../components/ui/MiniCalendar";
import RoutinesEA from "../components/dashboard/RoutinesEA";

function Home() {
  return (
    <DashboardLayout>
      <div className="w-full h-auto p-2 flex flex-col gap-4">
        <MiniCalendar />
        <RoutinesEA />
      </div>
    </DashboardLayout>
  );
}

export default Home;

import Sidebar from "../components/Sidebar"
import Workflow from "../components/Workflow"

const Dashboard = () => {
  return (
    <div className="min-h-screen">
        <Sidebar />
        <Workflow />
    </div>
  )
}

export default Dashboard
import logo from "/logo.png";
import { BrushCleaning, Redo2, Save, Undo2 } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 h-screen w-56 border-r border-gray-400 px-5">
      <div className="flex flex-row justify-start items-center space-x-2 p-3 mt-4">
        <img src={logo} alt="" className="h-10 w-10 mt-1" />
        <h1 className="text-3xl font-semibold">Chain</h1>
      </div>
      <hr className="h-0.5 bg-gray-300 border border-gray-300 rounded-md" />
      <span className="text-md uppercase tracking-wide text-gray-500 px-2 mt-6 block">
        Workflow
      </span>
      <div className="mt-4 flex items-center space-x-2 p-2 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer border border-gray-200">
        <Save className="ml-4 h-5 w-5" />
        <span className="text-md">Save Workflow</span>
      </div>
      <div className="mt-4 flex flex-row gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
          <Undo2 className="h-5 w-5" />
          <span className="text-sm">Undo</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
          <Redo2 className="h-5 w-5" />
          <span className="text-sm">Redo</span>
        </button>
      </div>
      <div className="mt-4 flex justify-center items-center space-x-2 p-2 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer border border-gray-200">
        <BrushCleaning className="h-5 w-5" />
        <span className="text-md">Clear</span>
      </div>
    </div>
  );
};

export default Sidebar;

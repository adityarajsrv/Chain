import { Trash2 } from "lucide-react";

/* eslint-disable react/prop-types */
const NodeBox = ({ type, children }) => {
  const accentColor = {
    START: "border-l-4 border-green-500",
    ACTION: "border-l-4 border-blue-500",
    CONDITION: "border-l-4 border-orange-500",
    END: "border-l-4 border-red-500",
  };

  return (
    <div
      className={`w-70 mt-8 rounded-xl bg-white border shadow-sm ${accentColor[type]}-500 mb-4`}
    >
      {children}
    </div>
  );
};

const NodeHeader = ({ node }) => {
  return (
    <div className="flex items-center gap-2 px-4 pt-4 text-xs font-medium uppercase text-gray-500">
      {node.type}
    </div>
  );
};

const NodeBody = ({ node }) => {
  switch (node.type) {
    case "START":
      return <LinearNodeBody node={node} />;
    case "ACTION":
      return <LinearNodeBody node={node} />;
    case "CONDITION":
      return <ConditionNodeBody node={node} />;
    case "END":
      return <EndNodeBody node={node} />;
    default:
      return null;
  }
};

const LinearNodeBody = ({ node }) => {
  return (
    <div className="p-4">
      <h3 className="text-base font-semibold text-gray-900 cursor-text">{node.label}</h3>
      <button className="mt-3 flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
        <span className="text-lg leading-none">+</span>
        Insert Next
      </button>
    </div>
  );
};

const ConditionNodeBody = ({ node }) => {
  return (
    <div className="px-4 py-4">
      <h3 className="text-base font-semibold text-gray-900">{node.label}</h3>
      <div className="mt-4 space-y-3">
        {Object.keys(node.branches).map((branch) => (
          <div key={branch} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{branch}</span>
            <button className="flex items-center gap-1 rounded-md px-2 py-1 text-sm hover:bg-gray-100">
              <span className="text-lg leading-none">+</span>
              Add step
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const EndNodeBody = ({ node }) => {
  return (
    <div className="p-4">
      <h3 className="text-base font-semibold text-gray-900">{node.label}</h3>
    </div>
  );
};

const NodeFooter = ({ node }) => {
  if (node.type === "START" || node.type === "END") return null;

  return (
    <div className="flex justify-end px-4 pb-4">
      <button className="flex flex-row justify-start space-x-2 items-center text-sm text-gray-500 hover:text-red-600 cursor-pointer">
        <Trash2 className="h-4 w-4 mt-px mr-1"/>Delete
      </button>
    </div>
  );
};

const WorkflowNode = ({ node }) => {
  return (
    <NodeBox type={node.type}>
      <NodeHeader node={node} />
      <NodeBody node={node} />
      <NodeFooter node={node} />
    </NodeBox>
  );
};

export default WorkflowNode;

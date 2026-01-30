import { useRef, useState } from "react";
import WorkflowNode from "../components/WorkflowNode";
import { ZoomIn, ZoomOut } from "lucide-react";

const sampleNode = {
  id: "1",
  type: "ACTION",
  label: "Send Email",
};

const Workflow = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isPanning = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const zoomIn = () => setScale((x) => Math.min(x + 0.1, 2));
  const zoomOut = () => setScale((x) => Math.max(x - 0.1, 0.5));

  const onMouseDown = (e) => {
    isPanning.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e) => {
    if (!isPanning.current) return;

    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;

    setPosition((pos) => ({ x: pos.x + dx, y: pos.y + dy }));

    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => {
    isPanning.current = false;
  };

  const onWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      setScale((x) =>
        e.deltaY < 0 ? Math.min(x + 0.1, 2) : Math.max(x - 0.1, 0.5),
      );
    }
  };

  return (
    <main className="ml-56 px-8 min-h-screen overflow-auto bg-[#fafafa] bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-size-[24px_24px] relative">
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2">
        <button onClick={zoomIn} className="px-3 py-1 bg-white shadow rounded cursor-pointer">
          <ZoomIn />
        </button>
        <button onClick={zoomOut} className="px-3 py-1 bg-white shadow rounded cursor-pointer">
          <ZoomOut />
        </button>
      </div>
      <div
        className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onWheel={onWheel}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "0 0",
          }}
          className="w-500 h-500 relative"
        >
          <WorkflowNode node={sampleNode} />
        </div>
      </div>
    </main>
  );
};

export default Workflow;

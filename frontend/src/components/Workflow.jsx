import WorkflowNode from "../components/WorkflowNode"

const sampleNode = {
  id: "1",
  type: "ACTION",
  label: "Send Email",
};

const Workflow = () => {
  return (
    <main className="ml-56 px-8 min-h-screen overflow-auto bg-[#fafafa] bg-[radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-size-[24px_24px] relative">
        <WorkflowNode node={sampleNode}/>
    </main>
  )
}

export default Workflow;
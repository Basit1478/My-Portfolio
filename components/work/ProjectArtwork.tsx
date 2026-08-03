import type { Project } from "@/lib/projects";

function WorkflowPreview() {
  return <div className="proof proof-workflow"><header><span>LIVE AGENT WORKFLOW</span><b>7 STEPS</b></header><div className="workflow-map"><div className="workflow-inputs"><span>GMAIL</span><span>WHATSAPP</span><span>WEB FORM</span></div><i className="proof-line line-a" /><div className="workflow-node node-context"><small>01</small><strong>Context</strong><em>History + intent</em></div><i className="proof-line line-b" /><div className="workflow-node node-agent"><small>02</small><strong>AI Agent</strong><em>Reason + decide</em></div><i className="proof-line line-c" /><div className="workflow-outputs"><span>ANSWER</span><span>TICKET</span><span>ESCALATE</span></div></div><footer><span>KNOWLEDGE RETRIEVAL</span><span>HUMAN-IN-THE-LOOP</span></footer></div>;
}

function ArchitecturePreview() {
  return <div className="proof proof-architecture"><header><span>PHYSICAL AI LEARNING SYSTEM</span><b>ARCHITECTURE</b></header><div className="architecture-stack"><section><small>EXPERIENCE</small><strong>Docusaurus</strong><span>12 chapters · exercises · Urdu</span></section><div className="architecture-bus"><i /><i /><i /></div><section><small>INTELLIGENCE</small><strong>RAG Assistant</strong><span>FastAPI · embeddings · citations</span></section><div className="architecture-bus"><i /><i /><i /></div><section><small>KNOWLEDGE</small><strong>Qdrant</strong><span>ROS 2 · Isaac · VLA context</span></section></div><footer><span>CONTENT → RETRIEVAL → GROUNDED ANSWER</span></footer></div>;
}

function DashboardPreview() {
  return <div className="proof proof-dashboard"><header><span>AGENTVERSE CONTROL FIELD</span><b>3 AGENTS ONLINE</b></header><div className="dashboard-field"><div className="dashboard-core"><small>ROUTER</small><strong>Intent</strong><i /></div><div className="dashboard-agent agent-ceo"><small>01</small><strong>CEO Agent</strong><span>Strategy</span></div><div className="dashboard-agent agent-hunar"><small>02</small><strong>HunarBot</strong><span>Skills</span></div><div className="dashboard-agent agent-buzz"><small>03</small><strong>BuzzBot</strong><span>Marketing</span></div><svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M50 50 L22 23 M50 50 L78 23 M50 50 L50 82" /></svg></div><footer><span>CHAT</span><span>VOICE</span><span>FILES</span><span>ADMIN</span></footer></div>;
}

export function ProjectArtwork({ project, large = false }: { project: Project; large?: boolean }) {
  return <div className={`project-art ${project.tone} ${large ? "large" : ""}`} role="img" aria-label={`${project.title} system preview`}><div className="art-chrome"><i /><i /><i /><span>{project.slug.replaceAll("-", ".")}</span></div>{project.tone === "crm" && <WorkflowPreview />}{project.tone === "textbook" && <ArchitecturePreview />}{project.tone === "verse" && <DashboardPreview />}</div>;
}

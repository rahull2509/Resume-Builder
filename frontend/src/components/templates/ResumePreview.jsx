import ClassicTemplate from "./ClassicTemplate";
import ArchitectTemplate from "./ArchitectTemplate";
import EditorialTemplate from "./EditorialTemplate";
export default function ResumePreview({ resume }) {
  const t = resume?.template || "classic";
  if (t === "architect") return <ArchitectTemplate r={resume} />;
  if (t === "editorial") return <EditorialTemplate r={resume} />;
  return <ClassicTemplate r={resume} />;
}

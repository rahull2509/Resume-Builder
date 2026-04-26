import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Save, Download, Sparkles } from "lucide-react";
import ResumeForm from "@/components/builder/ResumeForm";
import TemplateSwitcher from "@/components/builder/TemplateSwitcher";
import ResumePreview from "@/components/templates/ResumePreview";
import { createResume, getResume, updateResume, exportPdf } from "@/lib/api";
import { emptyResume, sampleResume } from "@/lib/defaults";
import { toast, Toaster } from "sonner";

export default function Builder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(() => emptyResume());
  const [resumeId, setResumeId] = useState(id || null);
  const [saving, setSaving] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (id) getResume(id).then(setResume).catch(() => navigate("/dashboard"));
  }, [id, navigate]);

  useEffect(() => {
    if (!resumeId) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      setSaving(true);
      await updateResume(resumeId, resume);
      setSaving(false);
    }, 800);
    return () => clearTimeout(timer.current);
  }, [resume, resumeId]);

  const handleSave = async () => {
    if (resumeId) await updateResume(resumeId, resume);
    else { const created = await createResume(resume); setResumeId(created.id); navigate(`/builder/${created.id}`, { replace: true }); }
    toast.success("Saved");
  };
  const handleExport = async () => { await exportPdf(resume); toast.success("PDF downloaded"); };
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[#F9F8F6]">
      <Toaster />
      <header className="flex-shrink-0 border-b border-[#DCD7CE] px-6 py-3 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center gap-2"><ArrowLeft size={16} /> Pressroom</Link>
        <div className="flex gap-2">
          <button onClick={() => setResume(r => ({ ...sampleResume(), name: r.name, template: r.template }))} className="btn-secondary text-sm py-1.5"><Sparkles size={14} /> Sample</button>
          <button onClick={handleSave} className="btn-secondary text-sm py-1.5"><Save size={14} /> Save</button>
          <button onClick={handleExport} className="btn-primary text-sm py-1.5"><Download size={14} /> PDF</button>
        </div>
      </header>
      <div className="px-6 pt-2 pb-3"><TemplateSwitcher value={resume.template} onChange={t => setResume(r => ({ ...r, template: t }))} /></div>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-full lg:w-[45%] h-full overflow-y-auto p-6"><ResumeForm resume={resume} setResume={setResume} /></div>
        <div className="hidden lg:flex lg:w-[55%] bg-[#E5E0D8] items-start justify-center overflow-y-auto p-8"><div className="preview-scale"><ResumePreview resume={resume} /></div></div>
      </div>
    </div>
  );
}

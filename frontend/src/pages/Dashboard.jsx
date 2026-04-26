import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, ArrowLeft, Trash2, Edit3, FileDown } from "lucide-react";
import { listResumes, deleteResume, getResume, exportPdf } from "@/lib/api";
import { toast, Toaster } from "sonner";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const load = async () => { try { setItems(await listResumes()); } catch { toast.error("Failed to load"); } };
  useEffect(() => { load(); }, []);
  const handleDelete = async (id) => { if (confirm("Delete?")) { await deleteResume(id); setItems(p => p.filter(x => x.id !== id)); toast.success("Deleted"); } };
  const handleExport = async (id) => { try { const full = await getResume(id); await exportPdf(full); } catch { toast.error("Export failed"); } };
  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      <Toaster position="top-right" />
      <header className="sticky top-0 bg-[#F9F8F6]/80 backdrop-blur-xl border-b border-[#DCD7CE] px-6 py-4 flex justify-between">
        <Link to="/" className="flex items-center gap-2"><ArrowLeft size={16} /> Pressroom</Link>
        <button onClick={() => navigate("/builder")} className="btn-primary"><Plus size={16} /> New résumé</button>
      </header>
      <main className="max-w-[1280px] mx-auto px-6 py-12">
        <h1 className="font-serif-display text-4xl">My résumés</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {items.map(it => (
            <div key={it.id} className="border border-[#DCD7CE] bg-white rounded-lg p-4">
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-[#5C5A56]">{it.template}</div>
              <div className="flex gap-2 mt-3">
                <button onClick={() => navigate(`/builder/${it.id}`)}><Edit3 size={16} /></button>
                <button onClick={() => handleExport(it.id)}><FileDown size={16} /></button>
                <button onClick={() => handleDelete(it.id)} className="text-[#E06D53]"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

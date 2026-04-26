import React from "react";
const TEMPLATES = [
  { id: "classic", name: "The Classic", tagline: "ATS · Single Column" },
  { id: "architect", name: "The Architect", tagline: "Sidebar · Modern" },
  { id: "editorial", name: "The Editorial", tagline: "Magazine · Bold" },
];
export default function TemplateSwitcher({ value, onChange }) {
  return (<div className="grid grid-cols-3 gap-2">{TEMPLATES.map(t => (<button key={t.id} type="button" onClick={() => onChange(t.id)} className={`text-left rounded-md border px-3 py-2 ${value === t.id ? "bg-[#1E3F33] text-white border-[#1E3F33]" : "bg-white text-[#1C1B1A] border-[#DCD7CE]"}`}><div className="text-sm font-semibold">{t.name}</div><div className={`text-xs ${value === t.id ? "text-white/75" : "text-[#5C5A56]"}`}>{t.tagline}</div></button>))}</div>);
}

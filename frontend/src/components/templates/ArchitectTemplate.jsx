export default function ArchitectTemplate({ r }) {
  const p = r.personal || {};
  return (
    <div className="paper flex text-[10pt]">
      <aside className="w-[32%] bg-[#F2F6F4] p-[16mm] flex flex-col gap-6">
        <div>
          <div className="text-[22pt] font-semibold text-[#1E3F33] leading-tight mb-2">{p.fullName || "Your Name"}</div>
          {p.title && <div className="text-[11pt] text-[#2A5746] font-medium">{p.title}</div>}
        </div>
        
        {/* Contact Info */}
        <div className="space-y-1 text-neutral-700">
          {p.email && <div>{p.email}</div>}
          {p.phone && <div>{p.phone}</div>}
          {p.location && <div>{p.location}</div>}
          {p.website && <div>{p.website}</div>}
        </div>

        {r.skills?.length > 0 && (
          <div>
            <div className="font-bold uppercase text-[#1E3F33] border-b-2 border-[#1E3F33] pb-1 mb-2">Skills</div>
            <div className="space-y-3">
              {r.skills.map(s => (
                <div key={s.id}>
                  <div className="font-semibold text-[#2A5746]">{s.category}</div>
                  <div className="text-sm text-neutral-700 mt-1">{(s.items || []).join(", ")}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {r.certifications?.length > 0 && (
          <div>
            <div className="font-bold uppercase text-[#1E3F33] border-b-2 border-[#1E3F33] pb-1 mb-2">Certifications</div>
            <div className="space-y-3">
              {r.certifications.map(c => (
                <div key={c.id}>
                  <div className="font-semibold text-[#2A5746]">{c.name}</div>
                  <div className="text-sm text-neutral-700">{c.issuer} {c.date && `· ${c.date}`}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>

      <main className="w-[68%] p-[16mm] flex flex-col gap-6">
        {p.summary && (
          <section>
            <div className="font-bold uppercase text-[#1E3F33] border-b-2 border-[#1E3F33] pb-1 mb-2">Profile</div>
            <div className="text-neutral-800 leading-relaxed">{p.summary}</div>
          </section>
        )}

        {r.experience?.length > 0 && (
          <section>
            <div className="font-bold uppercase text-[#1E3F33] border-b-2 border-[#1E3F33] pb-1 mb-3">Experience</div>
            <div className="space-y-4">
              {r.experience.map(e => (
                <div key={e.id}>
                  <div className="flex justify-between items-baseline font-bold text-neutral-900">
                    <span>{e.role} {e.company && <span className="font-normal">· {e.company}</span>}</span>
                    <span className="font-normal text-sm text-neutral-600">{e.startDate} {e.endDate && `- ${e.endDate}`}</span>
                  </div>
                  {e.location && <div className="text-sm text-neutral-600 italic mt-0.5">{e.location}</div>}
                  {e.bullets?.length > 0 && (
                    <ul className="list-disc ml-5 mt-2 text-neutral-800 space-y-1">
                      {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {r.education?.length > 0 && (
          <section>
            <div className="font-bold uppercase text-[#1E3F33] border-b-2 border-[#1E3F33] pb-1 mb-3">Education</div>
            <div className="space-y-4">
              {r.education.map(e => (
                <div key={e.id}>
                  <div className="flex justify-between items-baseline font-bold text-neutral-900">
                    <span>{e.degree} {e.field && `in ${e.field}`}</span>
                    <span className="font-normal text-sm text-neutral-600">{e.startDate} {e.endDate && `- ${e.endDate}`}</span>
                  </div>
                  <div className="text-neutral-700">{e.school}</div>
                  {(e.location || e.details) && <div className="text-sm text-neutral-600 mt-1">{[e.location, e.details].filter(Boolean).join(" · ")}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {r.projects?.length > 0 && (
          <section>
            <div className="font-bold uppercase text-[#1E3F33] border-b-2 border-[#1E3F33] pb-1 mb-3">Projects</div>
            <div className="space-y-4">
              {r.projects.map(p => (
                <div key={p.id}>
                  <div className="flex justify-between items-baseline font-bold text-neutral-900">
                    <span>{p.name} {p.link && <span className="font-normal text-sm">({p.link})</span>}</span>
                    <span className="font-normal text-sm italic text-neutral-600">{p.tech}</span>
                  </div>
                  {p.description && <div className="text-neutral-800 mt-1">{p.description}</div>}
                  {p.bullets?.length > 0 && (
                    <ul className="list-disc ml-5 mt-2 text-neutral-800 space-y-1">
                      {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );}

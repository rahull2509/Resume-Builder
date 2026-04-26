export default function EditorialTemplate({ r }) {
  const p = r.personal || {};
  return (
    <div className="paper p-[16mm] font-serif text-[10.5pt]">
      <header className="border-b-2 pb-4 mb-5 border-black">
        <h1 className="font-serif-display text-[38pt] font-medium leading-none">{p.fullName || "Your Name"}</h1>
        {p.title && <div className="text-[#E06D53] text-[11pt] uppercase tracking-widest mt-2">{p.title}</div>}
        <div className="mt-3 text-sm text-neutral-600 uppercase tracking-wide flex flex-wrap gap-x-4 gap-y-1">
          {[p.email, p.phone, p.location, p.website].filter(Boolean).map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </header>

      {p.summary && (
        <div className="border-l-4 border-[#E06D53] pl-4 italic text-[11.5pt] my-6 text-neutral-800 leading-relaxed">
          {p.summary}
        </div>
      )}

      {r.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="font-serif-display text-[16pt] border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wide">Experience</h2>
          <div className="space-y-5">
            {r.experience.map(e => (
              <div key={e.id}>
                <div className="flex justify-between items-baseline">
                  <span className="text-[12pt] font-semibold">{e.role} {e.company && <><span className="text-[#E06D53]">—</span> {e.company}</>}</span>
                  <span className="text-sm uppercase tracking-wide text-neutral-500">{e.startDate} {e.endDate && `- ${e.endDate}`}</span>
                </div>
                {e.location && <div className="text-sm italic text-neutral-600 mb-1">{e.location}</div>}
                {e.bullets?.length > 0 && (
                  <ul className="list-disc ml-5 mt-2 text-neutral-700 space-y-1">
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          {r.education?.length > 0 && (
            <section>
              <h2 className="font-serif-display text-[16pt] border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wide">Education</h2>
              <div className="space-y-4">
                {r.education.map(e => (
                  <div key={e.id}>
                    <div className="font-semibold">{e.school}</div>
                    <div className="text-neutral-700">{e.degree} {e.field && `in ${e.field}`}</div>
                    {(e.location || e.details) && <div className="text-sm text-neutral-600 italic mt-0.5">{[e.location, e.details].filter(Boolean).join(" · ")}</div>}
                    <div className="text-sm text-neutral-500 uppercase tracking-wide mt-1">{e.startDate} {e.endDate && `- ${e.endDate}`}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {r.certifications?.length > 0 && (
            <section>
              <h2 className="font-serif-display text-[16pt] border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wide">Certifications</h2>
              <div className="space-y-3">
                {r.certifications.map(c => (
                  <div key={c.id}>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-neutral-600">{c.issuer}</div>
                    {c.date && <div className="text-sm text-neutral-500 uppercase tracking-wide mt-1">{c.date}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-6">
          {r.projects?.length > 0 && (
            <section>
              <h2 className="font-serif-display text-[16pt] border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wide">Projects</h2>
              <div className="space-y-4">
                {r.projects.map(p => (
                  <div key={p.id}>
                    <div className="font-semibold">{p.name} {p.link && <span className="font-normal text-sm ml-1">({p.link})</span>}</div>
                    <div className="text-sm italic text-neutral-500 mb-1">{p.tech}</div>
                    {p.description && <div className="text-neutral-700 text-sm mb-1">{p.description}</div>}
                    {p.bullets?.length > 0 && (
                      <ul className="list-disc ml-4 mt-1 text-neutral-700 space-y-1 text-sm">
                        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {r.skills?.length > 0 && (
            <section>
              <h2 className="font-serif-display text-[16pt] border-b border-neutral-300 pb-1 mb-3 uppercase tracking-wide">Skills</h2>
              <div className="space-y-2">
                {r.skills.map(s => (
                  <div key={s.id}>
                    <div className="font-semibold uppercase text-xs tracking-wider text-neutral-500">{s.category}</div>
                    <div>{(s.items || []).join(", ")}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );}

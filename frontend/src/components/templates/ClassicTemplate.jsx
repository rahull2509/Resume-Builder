export default function ClassicTemplate({ r }) {
  const p = r.personal || {};
  return (
    <div className="paper p-[16mm] font-sans text-[10.5pt]">
      <h1 className="font-serif-display text-[26pt] font-medium leading-none mb-1">{p.fullName || "Your Name"}</h1>
      {p.title && <div className="text-[11.5pt] text-neutral-700">{p.title}</div>}
      <div className="text-[10pt] text-neutral-600 mt-1">
        {[p.email, p.phone, p.location, p.website].filter(Boolean).join(" · ")}
      </div>

      {p.summary && (
        <>
          <h2 className="font-serif-display text-[14pt] font-semibold uppercase border-b border-black mt-5 mb-2">Summary</h2>
          <div>{p.summary}</div>
        </>
      )}

      {r.experience?.length > 0 && (
        <>
          <h2 className="font-serif-display text-[14pt] font-semibold uppercase border-b border-black mt-5 mb-2">Experience</h2>
          <div className="space-y-3">
            {r.experience.map(e => (
              <div key={e.id}>
                <div className="flex justify-between items-baseline font-bold">
                  <span>{e.role} {e.company && `at ${e.company}`}</span>
                  <span className="font-normal text-sm">{e.startDate} {e.endDate && `- ${e.endDate}`}</span>
                </div>
                {e.location && <div className="text-sm text-neutral-600 italic">{e.location}</div>}
                {e.bullets?.length > 0 && (
                  <ul className="list-disc ml-5 mt-1">
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {r.education?.length > 0 && (
        <>
          <h2 className="font-serif-display text-[14pt] font-semibold uppercase border-b border-black mt-5 mb-2">Education</h2>
          <div className="space-y-3">
            {r.education.map(e => (
              <div key={e.id}>
                <div className="flex justify-between items-baseline font-bold">
                  <span>{e.school}</span>
                  <span className="font-normal text-sm">{e.startDate} {e.endDate && `- ${e.endDate}`}</span>
                </div>
                <div>{e.degree} {e.field && `in ${e.field}`}</div>
                {(e.location || e.details) && <div className="text-sm text-neutral-600 italic">{[e.location, e.details].filter(Boolean).join(" · ")}</div>}
              </div>
            ))}
          </div>
        </>
      )}

      {r.projects?.length > 0 && (
        <>
          <h2 className="font-serif-display text-[14pt] font-semibold uppercase border-b border-black mt-5 mb-2">Projects</h2>
          <div className="space-y-3">
            {r.projects.map(p => (
              <div key={p.id}>
                <div className="flex justify-between items-baseline font-bold">
                  <span>{p.name} {p.link && <span className="font-normal text-sm">({p.link})</span>}</span>
                  <span className="font-normal text-sm italic">{p.tech}</span>
                </div>
                {p.description && <div className="mb-1">{p.description}</div>}
                {p.bullets?.length > 0 && (
                  <ul className="list-disc ml-5 mt-1">
                    {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {r.skills?.length > 0 && (
        <>
          <h2 className="font-serif-display text-[14pt] font-semibold uppercase border-b border-black mt-5 mb-2">Skills</h2>
          <div className="space-y-1">
            {r.skills.map(s => (
              <div key={s.id}>
                <span className="font-bold">{s.category}: </span>
                <span>{(s.items || []).join(", ")}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {r.certifications?.length > 0 && (
        <>
          <h2 className="font-serif-display text-[14pt] font-semibold uppercase border-b border-black mt-5 mb-2">Certifications</h2>
          <div className="space-y-2">
            {r.certifications.map(c => (
              <div key={c.id}>
                <div className="flex justify-between items-baseline font-bold">
                  <span>{c.name} {c.issuer && `- ${c.issuer}`}</span>
                  <span className="font-normal text-sm">{c.date}</span>
                </div>
                {c.link && <div className="text-sm text-blue-600">{c.link}</div>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );}

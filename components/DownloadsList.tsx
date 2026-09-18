import type { DownloadGroup } from "@/lib/downloads";

export default function DownloadsList({ groups }: { groups: DownloadGroup[] }) {
  return (
    <div className="downloads-list">
      {groups.map((group) => (
        <div key={group.title} className="downloads-group">
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
                {item.date && <span className="download-date"> ({item.date})</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

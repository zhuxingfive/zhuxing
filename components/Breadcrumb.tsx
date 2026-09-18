import Link from "next/link";

export default function Breadcrumb({
  items
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 && <span className="sep"> / </span>}
          {index === items.length - 1 ? (
            <span aria-current="page">{item.name}</span>
          ) : (
            <Link href={item.href}>{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

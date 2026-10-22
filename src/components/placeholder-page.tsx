import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowLeft, ArrowRight, Construction } from 'lucide-react';

export function PlaceholderPage({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="page-stack">
      <div className="page-heading"><div><p className="eyebrow">SIRKANA WORKSPACE</p><h1>{title}</h1><p className="muted">{description}</p></div><Link href="/dashboard" className="button button-secondary"><ArrowLeft size={16} /> Kembali ke dashboard</Link></div>
      <section className="placeholder-panel card">
        <span className="placeholder-icon"><Icon size={30} /></span>
        <span className="placeholder-badge"><Construction size={13} /> Fondasi UI</span>
        <h2>Modul {title} siap dirancang</h2>
        <p>Halaman ini masih berupa kerangka visual. Integrasi database, validasi, serta alur operasional akan dibangun setelah kebutuhan bisnis disepakati.</p>
        <Link href="/dashboard" className="text-link">Lihat dashboard <ArrowRight size={15} /></Link>
      </section>
    </div>
  );
}

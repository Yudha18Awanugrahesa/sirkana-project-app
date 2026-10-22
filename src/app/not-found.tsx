import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return <main className="not-found"><span className="not-found-code">404</span><h1>Halaman tidak ditemukan</h1><p>Alamat yang kamu buka belum tersedia di Sirkana.</p><Link className="button button-primary" href="/dashboard"><ArrowLeft size={16}/> Kembali ke dashboard</Link></main>;
}

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChartNoAxesCombined, PackageCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-brand-panel"><Link href="/" className="brand-lockup login-brand"><span className="brand-mark"><Image src="/sirkana-mark.svg" alt="" width={43} height={43} priority /></span><span className="brand-name"><strong>SIRKANA</strong><small>BUSINESS MANAGEMENT PLATFORM</small></span></Link><div className="login-copy"><span className="eyebrow">SATU RUANG UNTUK BISNIS</span><h1>Stok bergerak.<br/>Bisnis terkendali.</h1><p>Kelola persediaan, penjualan, dan laporan bisnis dalam satu platform yang dirancang untuk berkembang bersama usahamu.</p><div className="login-feature"><span><PackageCheck size={17}/></span><div><strong>Persediaan terpantau</strong><small>Riwayat stok yang lebih terstruktur.</small></div></div><div className="login-feature"><span><ChartNoAxesCombined size={17}/></span><div><strong>Data untuk keputusan</strong><small>Ringkasan performa dalam satu tempat.</small></div></div></div><div className="login-decoration"><span/><span/><span/></div><div className="login-brand-footer">SIRKANA · BUSINESS MANAGEMENT PLATFORM</div></section>
      <section className="login-form-panel"><div className="login-form-wrap"><span className="login-mobile-mark"><Image src="/sirkana-mark.svg" alt="" width={48} height={48} priority /></span><span className="eyebrow">SELAMAT DATANG</span><h2>Masuk ke Sirkana</h2><p className="muted">UI login ini masih berupa preview. Autentikasi belum dihubungkan.</p><div className="login-form"><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="nama@perusahaan.com" autoComplete="email"/><label htmlFor="password">Password</label><input id="password" name="password" type="password" placeholder="Masukkan password" autoComplete="current-password"/><Link className="button button-primary login-submit" href="/dashboard">Lihat pratinjau <ArrowRight size={16}/></Link></div><p className="login-help">Belum terhubung dengan Supabase Auth. Jangan masukkan kata sandi nyata pada preview ini.</p><Link href="/dashboard" className="login-preview-link">Buka dashboard demo <ArrowRight size={15}/></Link></div></section>
    </main>
  );
}

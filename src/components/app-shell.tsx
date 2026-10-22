'use client';

import type { ReactNode } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bell, Boxes, ChartNoAxesCombined, ChevronDown, CircleHelp, ClipboardList, Command, LayoutDashboard, Menu, Package, Search, Settings2, ShoppingCart, Truck } from 'lucide-react';

const navigation = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Point of Sale', href: '/pos', icon: ShoppingCart },
  { label: 'Transaksi', href: '/transactions', icon: ClipboardList },
  { label: 'Produk', href: '/products', icon: Package },
  { label: 'Persediaan', href: '/inventory', icon: Boxes },
  { label: 'Pembelian', href: '/purchases', icon: Truck },
  { label: 'Laporan', href: '/reports', icon: ChartNoAxesCombined },
];

export function AppShell({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const side = (
    <aside className="sidebar">
      <Link href="/dashboard" className="brand-lockup" onClick={() => setMobileOpen(false)}>
        <span className="brand-mark"><Image src="/sirkana-mark.svg" alt="" width={34} height={34} priority /></span>
        <span className="brand-name"><strong>SIRKANA</strong><small>BUSINESS PLATFORM</small></span>
      </Link>
      <button className="business-switcher" type="button"><span className="business-avatar">C</span><span className="business-info"><strong>ChillOut.Cloth</strong><small>Cabang Yogyakarta</small></span><ChevronDown size={16} /></button>
      <div className="nav-caption">RUANG KERJA</div>
      <nav className="main-nav" aria-label="Navigasi utama">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = item.href === '/dashboard' ? pathname === '/' || pathname === '/dashboard' : pathname.startsWith(item.href);
          return <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`nav-item ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined}><Icon size={18} strokeWidth={1.8} /><span>{item.label}</span>{item.href === '/inventory' && <span className="nav-count">6</span>}</Link>;
        })}
      </nav>
      <div className="sidebar-spacer" />
      <div className="sidebar-help"><span className="help-icon"><CircleHelp size={17} /></span><div><strong>Butuh bantuan?</strong><small>Lihat panduan Sirkana</small></div></div>
      <Link href="/settings" className={`nav-item settings-nav ${pathname === '/settings' ? 'active' : ''}`} onClick={() => setMobileOpen(false)}><Settings2 size={18} /><span>Pengaturan</span></Link>
      <div className="sidebar-user"><span className="user-avatar">YA</span><span className="user-meta"><strong>Yudha A.</strong><small>Owner</small></span><button className="icon-button" type="button" aria-label="Menu pengguna"><ChevronDown size={16} /></button></div>
    </aside>
  );

  return (
    <div className="app-layout">
      <div className={`mobile-overlay ${mobileOpen ? 'is-visible' : ''}`} onClick={() => setMobileOpen(false)} aria-hidden="true" />
      <div className={`sidebar-host ${mobileOpen ? 'mobile-open' : ''}`}>{side}</div>
      <div className="workspace">
        <header className="topbar">
          <button className="icon-button mobile-menu-button" aria-label="Buka menu" onClick={() => setMobileOpen(true)} type="button"><Menu size={21} /></button>
          <div className="global-search"><Search size={17} /><input aria-label="Pencarian global" placeholder="Cari produk, transaksi, atau apa saja..." /><kbd>⌘ K</kbd></div>
          <div className="topbar-actions"><button className="icon-button" type="button" aria-label="Notifikasi"><Bell size={18} /><span className="notification-dot" /></button><div className="top-user"><span className="user-avatar">YA</span><span className="top-user-meta"><strong>Yudha Awanugraha</strong><small>Owner</small></span></div><button className="icon-button top-user-menu" aria-label="Buka profil" type="button"><ChevronDown size={15} /></button></div>
        </header>
        <main className="main-content">{children}<footer className="page-footer"><span>© 2026 SIRKANA</span><span><Command size={13} /> Stok bergerak. Bisnis terkendali.</span><span>Pratinjau UI · Data contoh</span></footer></main>
      </div>
      <nav className="mobile-bottom-nav" aria-label="Navigasi mobile"><Link href="/dashboard" className={pathname === '/' || pathname === '/dashboard' ? 'selected' : ''}><LayoutDashboard size={19}/><span>Home</span></Link><Link href="/pos" className={pathname === '/pos' ? 'selected' : ''}><ShoppingCart size={19}/><span>POS</span></Link><Link href="/products" className={pathname.startsWith('/products') ? 'selected' : ''}><Package size={19}/><span>Produk</span></Link><Link href="/reports" className={pathname.startsWith('/reports') ? 'selected' : ''}><ChartNoAxesCombined size={19}/><span>Laporan</span></Link><button type="button" onClick={() => setMobileOpen(true)}><Menu size={19}/><span>Menu</span></button></nav>
    </div>
  );
}

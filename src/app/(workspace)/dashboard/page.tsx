import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, CircleAlert, Ellipsis, Package, ShoppingBag, Wallet } from 'lucide-react';
import { formatCurrency } from '@/lib/format';

export const metadata: Metadata = { title: 'Dashboard' };

const kpis = [
  { label: 'Omzet hari ini', value: 2850000, delta: '+12,8%', icon: Wallet, tone: 'blue', note: 'dibanding kemarin' },
  { label: 'Transaksi', value: 36, delta: '+8,1%', icon: ShoppingBag, tone: 'cyan', note: 'dibanding kemarin' },
  { label: 'Estimasi laba kotor', value: 1120000, delta: '+15,2%', icon: ArrowUpRight, tone: 'green', note: 'data contoh' },
  { label: 'Produk stok menipis', value: 6, delta: '2 perlu dicek', icon: CircleAlert, tone: 'orange', note: 'dari ambang minimum' },
];

const topProducts = [
  { name: 'Kaos Basic Black', sku: 'KB-BLK-001', sold: 32, color: 'product-black', amount: 'Rp 120.000' },
  { name: 'Kaos Basic White', sku: 'KB-WHT-001', sold: 28, color: 'product-white', amount: 'Rp 120.000' },
  { name: 'Work Jacket Navy', sku: 'WJ-NVY-001', sold: 14, color: 'product-navy', amount: 'Rp 350.000' },
  { name: 'Topi Denim', sku: 'TD-DNM-001', sold: 11, color: 'product-denim', amount: 'Rp 95.000' },
];

const lowStock = [
  { name: 'Kaos Heavy 20s (Putih)', sku: 'KB-WHT-001', stock: 5, min: 10 },
  { name: 'Work Jacket Navy', sku: 'WJ-NVY-001', stock: 3, min: 5 },
  { name: 'Totebag Canvas', sku: 'TB-CNV-001', stock: 4, min: 8 },
];

const salesBars = [28, 36, 32, 58, 42, 64, 49, 76, 60, 45, 68, 53, 80, 62, 72, 91, 70, 84];

export default function DashboardPage() {
  return (
    <div className="page-stack">
      <div className="page-heading">
        <div>
          <p className="eyebrow">KAMIS, 22 OKTOBER 2026</p>
          <h1>Dashboard</h1>
          <p className="muted">Ringkasan bisnis kamu hari ini.</p>
        </div>
        <button className="button button-secondary" type="button"><CalendarDays size={16} /> Hari ini <span className="chevron">⌄</span></button>
      </div>

      <div className="demo-banner"><span className="demo-dot" /> <strong>Mode pratinjau</strong><span>Angka di halaman ini adalah data contoh, belum terhubung ke Supabase.</span></div>

      <section className="kpi-grid" aria-label="Ringkasan metrik">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <article className="card kpi-card" key={kpi.label}>
              <div className="kpi-top"><span>{kpi.label}</span><span className={`kpi-icon ${kpi.tone}`}><Icon size={18} /></span></div>
              <div className="kpi-value">{kpi.label === 'Transaksi' || kpi.label === 'Produk stok menipis' ? kpi.value : formatCurrency(kpi.value)}</div>
              <div className="kpi-meta"><span className={`delta ${kpi.tone === 'orange' ? 'delta-warning' : ''}`}>{kpi.tone === 'orange' ? <ArrowDownRight size={14} /> : <ArrowUpRight size={14} />}{kpi.delta}</span><span>{kpi.note}</span></div>
            </article>
          );
        })}
      </section>

      <section className="dashboard-grid">
        <article className="card chart-card">
          <div className="section-heading"><div><h2>Grafik penjualan</h2><p className="muted">Performa penjualan sepanjang hari</p></div><button type="button" className="select-like">Omzet <span>⌄</span></button></div>
          <div className="chart-summary"><strong>{formatCurrency(2850000)}</strong><span className="delta"><ArrowUpRight size={14} /> 12,8%</span></div>
          <div className="chart-wrap">
            <div className="chart-axis"><span>Rp 800 rb</span><span>Rp 600 rb</span><span>Rp 400 rb</span><span>Rp 200 rb</span><span>Rp 0</span></div>
            <div className="chart-plot">
              <div className="chart-gridlines"><i /><i /><i /><i /><i /></div>
              <div className="bar-chart">{salesBars.map((bar, i) => <span key={i} style={{ height: `${bar}%` }} className={i === 15 ? 'bar bar-highlight' : 'bar'} />)}</div>
              <svg className="line-chart" viewBox="0 0 600 180" preserveAspectRatio="none" role="img" aria-label="Garis tren penjualan ilustratif"><polyline points="0,145 35,126 70,135 105,84 140,105 175,60 210,98 245,124 280,75 315,100 350,45 385,75 420,83 455,39 490,62 525,24 560,48 600,20" fill="none" stroke="#2563EB" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>
          <div className="chart-labels"><span>07.00</span><span>09.00</span><span>11.00</span><span>13.00</span><span>15.00</span><span>17.00</span><span>19.00</span></div>
        </article>

        <article className="card top-products-card">
          <div className="section-heading"><div><h2>Produk terlaris</h2><p className="muted">Berdasarkan unit terjual</p></div><Link href="/reports" className="text-link">Lihat semua <ArrowRight size={14} /></Link></div>
          <div className="product-rank-list">
            {topProducts.map((p, i) => <div className="product-rank" key={p.sku}><span className="rank-number">{i + 1}</span><span className={`product-swatch ${p.color}`}><Package size={21} /></span><div className="product-rank-info"><strong>{p.name}</strong><span>{p.sku}</span></div><div className="product-rank-sold"><strong>{p.sold}</strong><span>terjual</span></div><button className="icon-button compact" aria-label={`Menu ${p.name}`} type="button"><Ellipsis size={17} /></button></div>)}
          </div>
        </article>
      </section>

      <section className="dashboard-grid bottom-grid">
        <article className="card table-card">
          <div className="section-heading"><div><h2>Stok menipis</h2><p className="muted">Produk yang perlu segera diperiksa</p></div><Link href="/inventory" className="text-link">Lihat semua <ArrowRight size={14} /></Link></div>
          <div className="table-scroll"><table><thead><tr><th>Produk</th><th>SKU</th><th>Stok</th><th>Minimum</th><th>Status</th></tr></thead><tbody>{lowStock.map((p) => <tr key={p.sku}><td><strong>{p.name}</strong></td><td className="muted">{p.sku}</td><td>{p.stock}</td><td>{p.min}</td><td><span className="status-pill status-low">Menipis</span></td></tr>)}</tbody></table></div>
        </article>
        <article className="card activity-card">
          <div className="section-heading"><div><h2>Aktivitas terbaru</h2><p className="muted">Pembaruan operasional</p></div><button className="icon-button" type="button" aria-label="Menu aktivitas"><Ellipsis size={18} /></button></div>
          <div className="activity-item"><span className="activity-icon activity-blue"><ShoppingBag size={16} /></span><div><strong>Transaksi #SL-000142</strong><p>3 produk · Kasir Demo</p></div><div className="activity-amount"><strong>Rp 320.000</strong><span>10.42</span></div></div>
          <div className="activity-item"><span className="activity-icon activity-green"><Package size={16} /></span><div><strong>Stok diperbarui</strong><p>Kaos Basic White · +10 unit</p></div><div className="activity-amount"><strong>+10 unit</strong><span>10.18</span></div></div>
          <div className="activity-item"><span className="activity-icon activity-orange"><CircleAlert size={16} /></span><div><strong>Stok menipis</strong><p>Work Jacket Navy</p></div><div className="activity-amount"><strong>3 unit</strong><span>09.56</span></div></div>
        </article>
      </section>
    </div>
  );
}

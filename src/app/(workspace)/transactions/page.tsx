import type { Metadata } from 'next';
import { ClipboardList } from 'lucide-react';
import { PlaceholderPage } from '@/components/placeholder-page';
export const metadata: Metadata = { title: 'Transaksi' };
export default function Page() { return <PlaceholderPage title="Transaksi" description="Riwayat dan detail penjualan." icon={ClipboardList} />; }

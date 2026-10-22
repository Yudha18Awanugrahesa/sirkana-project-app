import type { Metadata } from 'next';
import { ChartNoAxesCombined } from 'lucide-react';
import { PlaceholderPage } from '@/components/placeholder-page';
export const metadata: Metadata = { title: 'Laporan' };
export default function Page() { return <PlaceholderPage title="Laporan" description="Ringkasan omzet, estimasi laba kotor, dan performa produk." icon={ChartNoAxesCombined} />; }

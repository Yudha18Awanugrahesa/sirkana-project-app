import type { Metadata } from 'next';
import { Boxes } from 'lucide-react';
import { PlaceholderPage } from '@/components/placeholder-page';
export const metadata: Metadata = { title: 'Persediaan' };
export default function Page() { return <PlaceholderPage title="Persediaan" description="Saldo stok dan histori pergerakan barang." icon={Boxes} />; }

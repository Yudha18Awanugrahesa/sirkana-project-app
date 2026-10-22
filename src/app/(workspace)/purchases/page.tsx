import type { Metadata } from 'next';
import { Truck } from 'lucide-react';
import { PlaceholderPage } from '@/components/placeholder-page';
export const metadata: Metadata = { title: 'Pembelian' };
export default function Page() { return <PlaceholderPage title="Pembelian" description="Pembelian barang dan supplier." icon={Truck} />; }

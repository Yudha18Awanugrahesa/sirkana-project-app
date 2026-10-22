import type { Metadata } from 'next';
import { ShoppingCart } from 'lucide-react';
import { PlaceholderPage } from '@/components/placeholder-page';
export const metadata: Metadata = { title: 'Point of Sale' };
export default function Page() { return <PlaceholderPage title="Point of Sale" description="Kasir dan checkout penjualan." icon={ShoppingCart} />; }

import type { Metadata } from 'next';
import { Package } from 'lucide-react';
import { PlaceholderPage } from '@/components/placeholder-page';
export const metadata: Metadata = { title: 'Produk' };
export default function Page() { return <PlaceholderPage title="Produk" description="Katalog barang, SKU, kategori, dan harga." icon={Package} />; }

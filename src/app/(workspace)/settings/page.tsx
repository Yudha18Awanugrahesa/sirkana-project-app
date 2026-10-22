import type { Metadata } from 'next';
import { Settings2 } from 'lucide-react';
import { PlaceholderPage } from '@/components/placeholder-page';
export const metadata: Metadata = { title: 'Pengaturan' };
export default function Page() { return <PlaceholderPage title="Pengaturan" description="Pengaturan bisnis, cabang, anggota, dan hak akses." icon={Settings2} />; }

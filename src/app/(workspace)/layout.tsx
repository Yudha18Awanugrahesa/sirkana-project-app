import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { AppShell } from '@/components/app-shell';
import { createClient } from '@/lib/supabase/server';

export default async function WorkspaceLayout({ children }: Readonly<{ children: ReactNode }>) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) redirect('/login');

  const email = typeof data.claims.email === 'string' ? data.claims.email : 'Akun SIRKANA';
  return <AppShell userEmail={email}>{children}</AppShell>;
}

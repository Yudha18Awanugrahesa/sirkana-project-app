'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { getAuthErrorMessage } from '@/lib/supabase/auth-messages';

type AuthMode = 'login' | 'signup';

export function AuthForm({ initialMessage = '' }: { initialMessage?: string }) {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [messageType, setMessageType] = useState<'error' | 'success'>('error');
  const [isPending, setIsPending] = useState(false);

  function showError(error: { code?: string; status?: number }) {
    setMessage(getAuthErrorMessage(error));
    setMessageType('error');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setIsPending(true);
    try {
      const supabase = createClient();
        if (mode === 'login') {
          const { data, error } = await supabase.auth.signInWithPassword({ email, password });
          if (error) {
            showError(error);
            return;
          }
          if (!data.session) {
            showError({});
            return;
          }
          router.replace('/dashboard');
          router.refresh();
          return;
        }

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
        });
        if (error) {
          showError(error);
          return;
        }
        if (data.session) {
          router.replace('/dashboard');
          router.refresh();
          return;
        }
        setMessage('Permintaan pendaftaran diterima. Jika konfirmasi email diperlukan, periksa kotak masuk dan folder spam sebelum masuk.');
        setMessageType('success');
        setMode('login');
    } catch {
      showError({});
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <div className="auth-mode-switch" role="group" aria-label="Pilih proses autentikasi">
        <button type="button" className={mode === 'login' ? 'selected' : ''} onClick={() => { setMode('login'); setMessage(''); }}>Masuk</button>
        <button type="button" className={mode === 'signup' ? 'selected' : ''} onClick={() => { setMode('signup'); setMessage(''); }}>Daftar</button>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="nama@perusahaan.com" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} disabled={isPending} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Masukkan password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} required value={password} onChange={(event) => setPassword(event.target.value)} disabled={isPending} />
        {message && <p className={`auth-message ${messageType}`} role={messageType === 'error' ? 'alert' : 'status'}>{message}</p>}
        <button className="button button-primary login-submit" type="submit" disabled={isPending}>
          {isPending ? 'Memproses...' : mode === 'login' ? 'Masuk ke workspace' : 'Buat akun'}
          {!isPending && <ArrowRight size={16} />}
        </button>
      </form>
      <p className="login-help">{mode === 'login' ? 'Gunakan email dan kata sandi akun Sirkana.' : 'Jika konfirmasi email aktif, kamu perlu mengonfirmasi alamat email sebelum masuk.'}</p>
    </>
  );
}

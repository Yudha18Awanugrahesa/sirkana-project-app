import { describe, expect, it } from 'vitest';
import { getAuthErrorMessage } from './auth-messages';

describe('getAuthErrorMessage', () => {
  it('uses a clear Indonesian message for invalid credentials', () => {
    expect(getAuthErrorMessage({ code: 'invalid_credentials' })).toContain('Email atau kata sandi');
  });

  it('explains email confirmation when Supabase reports an unconfirmed email', () => {
    expect(getAuthErrorMessage({ code: 'email_not_confirmed' })).toContain('Email belum dikonfirmasi');
  });

  it('does not expose unknown internal error details', () => {
    expect(getAuthErrorMessage({ code: 'internal_secret_error' })).not.toContain('internal_secret_error');
    expect(getAuthErrorMessage({ status: 503 })).toContain('Layanan autentikasi');
  });
});

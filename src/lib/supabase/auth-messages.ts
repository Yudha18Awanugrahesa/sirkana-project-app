type AuthErrorCode = { code?: string; status?: number };

export function getAuthErrorMessage(error: AuthErrorCode): string {
  switch (error.code) {
    case 'invalid_credentials':
      return 'Email atau kata sandi tidak cocok. Periksa kembali lalu coba lagi.';
    case 'email_not_confirmed':
      return 'Email belum dikonfirmasi. Periksa inbox dan folder spam untuk tautan konfirmasi.';
    case 'email_address_invalid':
      return 'Format email belum valid. Periksa kembali alamat emailmu.';
    case 'weak_password':
      return 'Kata sandi belum memenuhi persyaratan. Gunakan kata sandi yang lebih kuat.';
    case 'user_already_exists':
      return 'Pendaftaran belum dapat dilanjutkan. Periksa email atau coba masuk dengan akun yang tersedia.';
    case 'signup_disabled':
      return 'Pendaftaran akun sedang tidak tersedia. Hubungi administrator Sirkana.';
    case 'over_email_send_rate_limit':
    case 'over_request_rate_limit':
      return 'Terlalu banyak percobaan. Tunggu beberapa saat sebelum mencoba kembali.';
    default:
      return error.status && error.status >= 500
        ? 'Layanan autentikasi sedang mengalami kendala. Coba lagi beberapa saat.'
        : 'Permintaan autentikasi belum berhasil. Periksa data dan koneksi, lalu coba lagi.';
  }
}

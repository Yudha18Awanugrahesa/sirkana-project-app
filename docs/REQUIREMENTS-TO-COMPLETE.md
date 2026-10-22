# SIRKANA — Lembar pelengkap requirement

Isi bagian yang relevan. Boleh jawab `belum diputuskan`; kita bisa menetapkan default secara bertahap. Jangan kirim password, API key, atau kredensial di dokumen ini.

## 1. Target dan model bisnis
- [ ] Target utama: UMKM / retail / F&B / clothing / umum / lainnya: ______
- [ ] Multi-bisnis artinya (pilih): satu pemilik bisa membuat banyak bisnis / satu akun dapat bergabung ke banyak bisnis / opsi lain: ______
- [ ] Perlu multi-cabang/gudang sejak MVP? ya/tidak: ______
- [ ] Bahasa dan mata uang: default Bahasa Indonesia dan IDR? ______

## 2. Pengguna dan akses
- [ ] Role yang diperlukan: owner / manager / kasir / staf gudang / akuntan / lainnya: ______
- [ ] Login: email-password / magic link / Google / lainnya: ______
- [ ] Perlu undangan anggota melalui email? ______

## 3. Produk dan persediaan
- [ ] Produk berupa barang fisik, jasa, atau keduanya? ______
- [ ] Satuan: pcs, kg, liter, meter, paket, variasi? ______
- [ ] Perlu variasi (warna/ukuran), barcode, batch, atau tanggal kedaluwarsa? ______
- [ ] Boleh stok minus? rekomendasi awal: tidak: ______
- [ ] Perlu impor produk dari Excel/CSV? ______
- [ ] Cara nilai HPP: biaya terakhir / rata-rata tertimbang / FIFO / belum diputuskan: ______
- [ ] Perlu supplier, purchase order, stok masuk, retur pemasok? kapan? ______
- [ ] Perlu stock opname dan penyesuaian stok? ______

## 4. POS dan pembayaran
- [ ] Metode pembayaran: tunai / QRIS / transfer / kartu / split payment / lainnya: ______
- [ ] Perlu hitung uang kembalian? ______
- [ ] Diskon per item dan/atau per transaksi? ______
- [ ] Pajak PPN atau pajak lain berlaku? ______
- [ ] Nomor struk dan format struk: ______
- [ ] Perlu printer thermal, laci kas, barcode scanner? ______
- [ ] Perlu menahan/menyimpan keranjang sebagai transaksi tertunda? ______
- [ ] Kebijakan void, pembatalan, retur sebagian/penuh: ______

## 5. Laporan
- [ ] Metrik utama dashboard: omzet / laba kotor / transaksi / stok / lainnya: ______
- [ ] Periode: harian / mingguan / bulanan / kustom: ______
- [ ] Filter berdasarkan bisnis, cabang, kasir, produk, kategori? ______
- [ ] Ekspor Excel/CSV/PDF? ______
- [ ] Perlu laporan kas masuk-keluar/biaya operasional? ______

## 6. PWA dan perangkat
- [ ] Perangkat utama: desktop / tablet kasir / Android / iPhone: ______
- [ ] Apakah transaksi harus dapat dilakukan offline? rekomendasi awal: tidak sampai sinkronisasi aman siap: ______
- [ ] Perlu push notification? ______
- [ ] Perlu mode gelap? ______

## 7. Operasional, deployment, dan skala
- [ ] Target deployment: Vercel / VPS / lainnya: ______
- [ ] Sudah memiliki domain? ______
- [ ] Perlu paket SaaS, trial, billing, dan subscription? sekarang/nanti/tidak: ______
- [ ] Perkiraan jumlah bisnis, cabang, produk, dan transaksi per hari: ______
- [ ] Backup, audit log, histori aktivitas pengguna: ______

## 8. Visual dan pengalaman pengguna
- [ ] Pertahankan logo/warna Sirkana saat ini? default: ya.
- [ ] Halaman yang harus diprioritaskan: dashboard / POS / produk / persediaan / lainnya: ______
- [ ] Referensi desain lain: ______
- [ ] Perlu onboarding saat bisnis baru dibuat? ______

## 9. Batas MVP
- [ ] Fitur yang wajib ada pada versi pertama: ______
- [ ] Fitur yang sengaja ditunda: ______
- [ ] Kriteria dianggap berhasil/siap digunakan: ______

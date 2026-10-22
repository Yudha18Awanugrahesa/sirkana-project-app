# SIRKANA — Ringkasan brief awal

Dokumen ini menyimpan rangkuman kebutuhan yang telah disampaikan selama percakapan. Butir yang secara eksplisit diminta dipisahkan dari saran teknis agar tidak dianggap semuanya sudah final.

## A. Permintaan eksplisit pengguna

1. Ingin membangun aplikasi pencatatan stok dan POS penjualan.
2. Setiap produk yang berhasil terjual harus membuat stok berkurang otomatis.
3. Ingin masukan tambahan untuk pengembangan aplikasi stok dan POS.
4. Platform: Web app.
5. Arsitektur awalnya React + Supabase, kemudian pengguna memutuskan beralih ke **Next.js** dan meminta mulai ulang dari awal melalui ZIP baru.
6. Jenis pengguna bisnis: multi-bisnis.
7. Kondisi awal: project masih dalam tahap ide ketika rancangan dibuat.
8. Prioritas utama: stok otomatis, POS, dan laporan.
9. Ingin aplikasi bisa dipasang pada home screen device dan tampil seperti aplikasi; PWA dengan pengalaman standalone.
10. Nama produk dipilih: **SIRKANA**.
11. Arah branding yang disetujui: logo simbol S geometris biru/cyan/hijau; deskriptor **Business Management Platform**; tagline **Stok bergerak. Bisnis terkendali.**
12. Arah UI/UX yang disukai: clean modern SaaS, dashboard terang, sidebar navy, aksi utama biru, aksen hijau/cyan, responsif desktop/tablet/mobile.
13. Pengembangan dibantu Codex di VS Code agar dapat memeriksa dan mengubah file.
14. Menginginkan Context7 dipakai Codex untuk dokumentasi library sesuai versi.
15. Menginginkan pengecekan otomatis di VS Code dan pemeriksaan project seperti lint, typecheck, test, serta build.
16. Ingin menggunakan Git/version control dan menghindari perubahan destruktif. Repo lama sempat diinisialisasi, namun belum ada commit awal berdasarkan status yang pernah ditunjukkan.
17. Nama framework final yang dipilih: **Next.js App Router**.

## B. Saran arsitektur dan fitur yang sudah direkomendasikan — perlu dikonfirmasi bila ingin dijadikan scope wajib

- Multi-tenant: data setiap bisnis terpisah; satu akun bisa bergabung ke lebih dari satu bisnis.
- Cabang atau gudang dengan stok per lokasi.
- Peran pengguna: owner, manager, cashier, inventory staff.
- Produk, SKU/barcode, kategori, harga modal, harga jual, satuan, dan stok minimum.
- Riwayat pergerakan stok (stock ledger), stok awal, pembelian, penyesuaian, stock opname, retur dan transfer antar-cabang.
- POS dengan keranjang, diskon, pajak jika berlaku, metode pembayaran, struk, histori transaksi.
- Laporan omzet, penjualan bersih, estimasi laba kotor, produk terlaris, stok menipis, dan ekspor.
- PostgreSQL transactions/RPC untuk checkout atomik, idempotency key untuk mencegah transaksi ganda, dan validasi stok untuk mencegah overselling.
- Supabase Auth, RLS, log audit, serta kontrol akses berbasis peran.
- PWA dengan manifest, ikon 192/512, standalone, halaman fallback offline; transaksi offline tidak diaktifkan sampai mekanisme sinkronisasi dirancang.
- Tahapan MVP lalu pembelian/retur/stock opname, lalu analitik lanjutan.

## C. Stack yang disiapkan dalam starter

- Next.js App Router + React + TypeScript.
- Supabase (`@supabase/ssr` dan `@supabase/supabase-js`) untuk integrasi yang nanti dikonfigurasi.
- CSS responsif dengan identitas Sirkana; UI awal memuat data contoh.
- PWA manifest dan service worker terbatas untuk fallback navigasi offline.
- ESLint, TypeScript typecheck, Vitest, production build, VS Code settings/tasks, GitHub Actions, AGENTS.md, Context7 workflow.

## D. Batasan yang penting

Starter ini belum merupakan aplikasi POS produksi. Belum ada schema database final, RLS final, flow login, data bisnis nyata, pembayaran, checkout atomik, sinkronisasi stok, supplier/pembelian nyata, dan laporan nyata. Jangan menyebut fitur-fitur itu sudah berfungsi sebelum implementasi dan pengujiannya selesai.

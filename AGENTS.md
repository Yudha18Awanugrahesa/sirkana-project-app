# SIRKANA — aturan kerja Codex

## Identitas dan tujuan
- Nama produk: SIRKANA.
- Deskripsi: Business Management Platform.
- Tagline: "Stok bergerak. Bisnis terkendali."
- Stack yang dipilih: Next.js App Router, React, TypeScript, Supabase/PostgreSQL, dan PWA.
- Bahasa UI utama: Bahasa Indonesia. Gaya: clean SaaS, navy, biru, cyan, hijau, responsif.

## Workflow wajib
1. Baca `AGENTS.md`, `docs/PROJECT-BRIEF.md`, `package.json`, dan file terkait sebelum mengubah kode.
2. Untuk API/library yang bergantung versi, gunakan Context7 MCP untuk mencari dokumentasi yang sesuai dengan versi di `package.json`/lockfile. Jangan klaim Context7 dipakai bila tool tidak benar-benar dipanggil.
3. Sebelum perubahan lintas-file atau destruktif, jelaskan rencana dan file terdampak. Jangan menghapus data, melakukan `git reset`, menghapus `.git`, atau membuat commit tanpa instruksi eksplisit.
4. Lakukan perubahan sekecil mungkin dan jangan menyentuh fitur yang tidak berhubungan dengan tugas.
5. Setelah perubahan, jalankan pemeriksaan yang relevan. Untuk perubahan rutin gunakan `npm run check`. Laporkan setiap perintah yang tidak dapat dijalankan/gagal secara jujur.
6. Periksa `git diff` dan status file sebelum menyatakan pekerjaan selesai jika repo Git sudah aktif.

## Keamanan dan data
- Jangan membaca, mencetak, menyalin, atau memasukkan nilai rahasia dari `.env*` ke output. `.env.example` boleh dibaca karena hanya memuat placeholder.
- Jangan pernah menaruh Supabase secret/service-role key di browser bundle, `NEXT_PUBLIC_*`, atau commit.
- Jangan menganggap pemfilteran frontend sebagai otorisasi. Data multi-bisnis harus diisolasi di database dengan RLS dan validasi backend.
- Untuk checkout, stok harus divalidasi dan diperbarui atomik di database; cegah overselling, double-submit, dan transaksi ganda.
- Jangan cache sesi autentikasi, respons Supabase, data tenant, stok, pembayaran, atau transaksi di service worker.
- Jangan implementasikan transaksi offline sebelum strategi antrean, sinkronisasi, idempotency, konflik stok, dan pengujian disetujui.
- Jangan menggunakan data contoh seolah-olah data nyata. Tandai mock data secara eksplisit.

## Arsitektur
- App Router ada di `src/app`.
- Gunakan Server Components secara default; tambahkan `'use client'` hanya ketika dibutuhkan untuk interaksi/state/browser APIs.
- Letakkan integrasi Supabase di `src/lib/supabase`.
- Semua migrasi skema database harus berupa file SQL versioned di `supabase/migrations/`; jangan jalankan migrasi ke project hosted tanpa persetujuan eksplisit.
- Jangan menambahkan dependensi baru jika fungsi yang ada sudah memadai. Periksa dokumentasi dan kompatibilitas versi terlebih dahulu.

## Pemeriksaan
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run check` menjalankan rangkaian pemeriksaan di atas.

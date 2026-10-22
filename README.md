# SIRKANA — Next.js Starter

**SIRKANA — Business Management Platform**<br>
*Stok bergerak. Bisnis terkendali.*

Starter baru berbasis Next.js App Router + TypeScript + Supabase + PWA. Paket ini sengaja dimulai bersih dari Vite. Ia menyediakan fondasi UI, konfigurasi developer tools, PWA dasar, Supabase client helpers, dan dokumen requirement. **Ini belum merupakan POS/inventory siap produksi**: dashboard berisi data contoh, belum ada autentikasi yang dipasang, belum ada schema database final, dan belum ada checkout yang mengubah stok.

## Teknologi
- Next.js `16.4.2` (App Router)
- React / React DOM `19.3.1`
- TypeScript `5.9.3`
- Supabase SSR `0.12.7` + Supabase JS `2.118.0`
- PWA dengan manifest App Router dan service worker minimal yang hanya memberi offline fallback; tidak melakukan cache data bisnis
- ESLint flat config + `eslint-config-next`
- Vitest untuk unit test utilitas

Versi dependency dinyatakan di `package.json`, sedangkan `package-lock.json` mengunci pohon dependency yang digunakan. Gunakan `npm ci` untuk memasang dependency sesuai lockfile. Jika dependency memang diubah, gunakan `npm install`, tinjau perubahan pada kedua file, lalu sertakan lockfile yang diperbarui.

## Prasyarat
- Node.js `>=20.19.0` sesuai batas di `package.json`.
- npm yang mendukung lockfile versi 3.
- VS Code, Codex, dan (opsional untuk dokumentasi library) Context7 MCP.

## Menjalankan
```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Buka `http://localhost:3000`. UI awal menggunakan data contoh dan dapat ditampilkan tanpa konfigurasi Supabase. Jika memakai helper Supabase, isi variabel di `.env.local` dengan URL project dan publishable key milik project kamu. Jangan menaruh secret atau service-role key di variabel `NEXT_PUBLIC_*`.

## Pemeriksaan otomatis
```powershell
npm run lint
npm run typecheck
npm run test
npm run build
npm run check
```

VS Code direkomendasikan untuk menjalankan Prettier saat save dan ESLint fix saat save. GitHub Actions menjalankan `npm run check` setelah push atau pull request.

## Supabase
- Helper Supabase membaca `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`; nama variabel dan placeholder tersedia di `.env.example`.
- Salin `.env.example` menjadi `.env.local`, lalu ganti placeholder saat integrasi Supabase digunakan. `.env.local` diabaikan oleh Git.
- Publishable key memang ditujukan untuk penggunaan client. Jangan gunakan secret/service-role key di client atau dalam variabel `NEXT_PUBLIC_*`.
- Helper client sudah dipisahkan menjadi browser dan server, tetapi belum ada alur login yang diaktifkan.
- Jangan menjalankan migration terhadap project Supabase hosted tanpa review dan persetujuan.

## PWA
- Manifest dihasilkan oleh `src/app/manifest.ts`.
- Ikon berada di `public/`.
- Service worker hanya menyimpan halaman offline dan daftar aset statis yang ditentukan di `public/sw.js`; ia tidak menyimpan API, sesi login, inventaris, atau transaksi.
- Service worker didaftarkan hanya pada build production. Untuk memeriksa perilaku production secara lokal, jalankan `npm run build` lalu `npm run start`.
- Instalasi PWA memerlukan HTTPS pada deployment; `localhost` dapat digunakan untuk pengembangan lokal.
- Transaksi offline **belum didukung**.

## Codex + Context7
Baca `AGENTS.md` sebelum meminta Codex mengubah file. Panduan setup tersedia di `docs/CONTEXT7-AND-CODEX.md`. Untuk library/API spesifik versi, minta Codex mencari dokumentasi melalui Context7 dan menyebutkan hasilnya tanpa mengklaim tool berhasil bila tool tidak dipanggil.

## Kebutuhan produk
Lihat `docs/PROJECT-BRIEF.md` untuk ringkasan request yang telah disebutkan, dan `docs/REQUIREMENTS-TO-COMPLETE.md` untuk butir yang masih perlu kamu putuskan. Jangan anggap seluruh fitur rekomendasi sudah disetujui atau sudah dibuat.


## Lockfile dan CI
`package-lock.json` tersedia di repository dan digunakan oleh workflow CI. CI menjalankan `npm ci` agar instalasi memakai lockfile yang sama dan gagal jika manifest tidak cocok dengan lockfile. Gunakan `npm install` hanya ketika memang memperbarui dependency, lalu tinjau perubahan `package.json` dan `package-lock.json` bersama-sama.

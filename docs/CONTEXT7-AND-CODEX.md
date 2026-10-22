# Workflow Codex + Context7

## Prinsip kerja
1. Buka root folder project ini di VS Code.
2. Baca `AGENTS.md` dan dokumen requirement sebelum melakukan perubahan.
3. Untuk API atau library yang sensitif terhadap versi, minta Codex menggunakan Context7 MCP untuk mencari library ID dan dokumentasi yang cocok dengan versi dependency.
4. Bedakan dengan jelas: dokumentasi berhasil dibaca melalui Context7, Context7 gagal, atau dokumentasi diakses dari sumber lain.
5. Minta rencana file terdampak sebelum perubahan lintas-file; jangan izinkan commit, reset, atau penghapusan file otomatis.
6. Setelah implementasi, jalankan `npm run check` dan laporkan hasil aktual.

## Pemeriksaan Context7
Dari terminal Codex, periksa konfigurasi:
```powershell
codex mcp list
```

Jika Context7 belum dikonfigurasi, ikuti petunjuk resmi Context7 untuk Codex di:
https://github.com/upstash/context7/blob/master/docs/clients/codex.mdx

Panduan setup CLI yang umum saat ini:
```powershell
npx ctx7 setup --codex
codex mcp list
```

Periksa instruksi resmi terbaru jika command berubah. Jangan menempel prompt bahasa alami ke prompt PowerShell biasa; masukkan prompt ke panel chat Codex atau sesi `codex` yang sudah terbuka.

## Prompt kerja yang bisa digunakan
"Baca AGENTS.md dan docs/PROJECT-BRIEF.md. Periksa package.json. Gunakan Context7 untuk membaca dokumentasi versi yang cocok dengan library yang akan disentuh. Sebelum mengubah file, jelaskan rencana dan daftar file terkait. Lakukan perubahan minimal, jalankan npm run check, lalu laporkan file dan hasil pengujian yang benar-benar dijalankan. Jangan menampilkan secrets dan jangan membuat commit otomatis."

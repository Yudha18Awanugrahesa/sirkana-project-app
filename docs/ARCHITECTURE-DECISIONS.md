# Architecture decisions — initial baseline

| Area | Decision awal | Status |
|---|---|---|
| Framework | Next.js App Router | Dipilih pengguna |
| Language | TypeScript | Default starter; dapat disesuaikan |
| Data/backend | Supabase + PostgreSQL | Dipilih pengguna |
| Business model | Multi-bisnis | Diminta; detail membership masih perlu konfirmasi |
| PWA | Web manifest + standalone + offline informational fallback | Fondasi; perlu diuji pada device/browser |
| Offline sales | Tidak diaktifkan | Keputusan aman sementara |
| Stock source of truth | PostgreSQL inventory balances + append-only movements | Rekomendasi, belum diimplementasikan |
| Checkout | Satu fungsi database atomik dengan idempotency | Rekomendasi, belum diimplementasikan |
| Data isolation | Business membership + RLS + constraints | Wajib sebelum data nyata dipakai |
| UI style | Clean light SaaS, navy sidebar, blue actions, green/cyan accents | Arah visual disetujui |
| Quality gates | ESLint, typecheck, Vitest, build, `npm run check` | Disiapkan dalam starter |
| Version control | Git | Diharapkan; commit awal belum otomatis dibuat |

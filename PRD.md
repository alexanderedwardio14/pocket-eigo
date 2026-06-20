# Product Requirements Document (PRD)

# PocketEigo

**Version:** 1.0
**Platform:** Progressive Web App (PWA)
**Target:** Personal use (MVP), scalable to public release

---

# 1. Product Overview

PocketEigo adalah aplikasi berbasis AI yang membantu pengguna melatih kemampuan bahasa Inggris melalui percakapan interaktif.

Berbeda dengan chatbot AI biasa, PocketEigo bertindak sebagai partner belajar yang:

* Mengajak ngobrol berdasarkan topik tertentu.
* Mengoreksi grammar dan vocabulary secara kontekstual.
* Memberikan penjelasan terhadap kesalahan.
* Membantu meningkatkan speaking dan writing melalui latihan rutin.
* Menyimpan histori belajar dan perkembangan pengguna.

Aplikasi dibangun sebagai Progressive Web App (PWA) sehingga dapat digunakan di desktop maupun smartphone tanpa harus mengembangkan aplikasi native terlebih dahulu.

---

# 2. Goals

## Primary Goals

* Membantu pengguna berlatih bahasa Inggris setiap hari.
* Menyediakan partner percakapan AI yang natural.
* Membuat proses belajar terasa menyenangkan dan tidak seperti mengerjakan soal.

## Secondary Goals

* Menjadi jurnal perkembangan bahasa Inggris.
* Mengumpulkan vocabulary yang dipelajari.
* Menjadi platform latihan interview dan percakapan profesional.

---

# 3. Non Goals (MVP)

* Video call.
* Multiplayer.
* Social media.
* Marketplace.
* Course management.
* Sertifikasi.
* Gamification kompleks.
* Leaderboard global.

---

# 4. Target User

Primary:

* Developer
* DevOps Engineer
* System Engineer
* Mahasiswa
* Profesional yang ingin melatih English conversation

Skill level:

* Beginner
* Intermediate
* Upper Intermediate

---

# 5. Core Value Proposition

"Talk naturally with AI while improving your English every day."

---

# 6. Main Features

## 6.1 AI Chat

Pengguna dapat:

* Mengirim teks.
* Menerima balasan AI.
* Memulai percakapan baru.
* Menyimpan histori chat.

---

## 6.2 Topic Selection

Contoh topik:

* Daily Conversation
* Travel
* Technology
* DevOps
* Networking
* Fitness
* Food
* Job Interview
* Business
* Small Talk

AI akan mempertahankan konteks sesuai topik.

---

## 6.3 AI Persona

Mode:

* Friendly Friend
* English Teacher
* Strict Grammar Coach
* Interviewer
* Customer Service
* Coffee Shop Staff
* Tourist Guide

Persona memengaruhi gaya komunikasi dan feedback.

---

## 6.4 Grammar Correction

Setelah pesan dikirim, AI dapat:

* Menunjukkan versi yang lebih natural.
* Menjelaskan grammar yang salah.
* Menjelaskan pilihan vocabulary yang lebih tepat.

Contoh:

User:
"I am go to office yesterday."

Correction:
"I went to the office yesterday."

Explanation:
Gunakan bentuk lampau "went" karena aktivitas terjadi di masa lalu.

---

## 6.5 Vocabulary Extraction

Setelah percakapan:

* AI memilih kata baru.
* Menampilkan arti.
* Menampilkan contoh penggunaan.
* Pengguna dapat menyimpannya ke koleksi pribadi.

---

## 6.6 Saved Vocabulary

Fitur:

* Search
* Filter
* Favorite
* Tag
* Notes

---

## 6.7 Learning Statistics

Menampilkan:

* Total chat session
* Total words learned
* Vocabulary saved
* Corrections received
* Daily streak
* Weekly streak

---

## 6.8 Conversation History

Menyimpan:

* Judul percakapan
* Topik
* Timestamp
* Ringkasan

---

## 6.9 Voice Input

Menggunakan Speech-to-Text browser.

User dapat:

* Menekan tombol mikrofon.
* Berbicara.
* Teks otomatis masuk ke chat.

---

## 6.10 AI Voice Output

Opsional.

AI dapat membacakan balasan menggunakan Text-to-Speech.

---

## 6.11 Custom API Key

User dapat memasukkan:

* OpenRouter API Key

Pengaturan:

* Enable/Disable custom key
* Ganti model
* Tes koneksi

API key disimpan lokal dan tidak dibagikan.

---

## 6.12 Model Selection

Contoh:

* GPT
* Claude
* Gemini
* DeepSeek
* Qwen
* Mistral

Pengguna bebas memilih model sesuai kebutuhan.

---

# 7. User Flow

Open App

↓

Pilih Topic

↓

Pilih Persona

↓

Mulai Chat

↓

AI Membalas

↓

(Optional) Grammar Feedback

↓

(Optional) Vocabulary Extraction

↓

Simpan Progress

---

# 8. Pages

## Landing

* Hero
* CTA
* Feature list

## Dashboard

* Continue Chat
* Recent Topics
* Progress
* Streak

## Chat

* Message list
* Voice button
* Send button
* Correction panel

## Vocabulary

* Saved words
* Search
* Favorite

## History

* Conversation list
* Resume chat

## Statistics

* Charts
* Daily activity
* Learned words

## Settings

* Theme
* API Key
* Model
* Persona defaults
* Export data

---

# 9. Suggested Tech Stack

Frontend:

* React
* TypeScript
* Vite
* Tailwind CSS
* PWA plugin

State:

* Zustand

Routing:

* React Router

Database:

* Supabase PostgreSQL

Authentication:

* Supabase Auth (optional)

Storage:

* Supabase Storage

Realtime:

* Supabase Realtime (optional)

AI:

* OpenRouter-compatible API

Deployment:

* Vercel

---

# 10. Suggested Database Schema

users

* id
* name
* email

conversations

* id
* user_id
* title
* topic
* created_at

messages

* id
* conversation_id
* role
* content
* created_at

saved_words

* id
* user_id
* word
* meaning
* example
* notes

learning_stats

* id
* user_id
* total_sessions
* total_saved_words
* streak
* updated_at

---

# 11. Offline Capability

* Cache static assets.
* Cache recent conversations.
* Cache saved vocabulary.
* Installable via PWA.
* Reconnect automatically when online.

---

# 12. Future Roadmap

V2

* AI pronunciation scoring
* Flashcards
* Spaced repetition
* Translation mode
* Export vocabulary

V3

* Real-time voice conversation
* Multi-language support
* Daily missions
* AI-generated quizzes
* Personalized study plan

---

# 13. UX Principles

* Clean and distraction-free.
* Mobile-first responsive layout.
* Fast startup.
* One-click conversation start.
* Minimal setup.
* Focus on consistency over complexity.

---

# 14. Success Metrics

* Daily active usage.
* Average conversation length.
* Vocabulary saved per week.
* Consecutive learning streak.
* User retention over time.

---

# 15. Vision

PocketEigo aims to become an AI-powered English companion that users genuinely enjoy talking to every day, making language practice feel like a natural conversation rather than a traditional lesson.

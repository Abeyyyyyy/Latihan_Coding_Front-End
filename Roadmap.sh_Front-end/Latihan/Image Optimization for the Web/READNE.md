# Optimasi Gambar untuk Web

Optimasi gambar sangat penting untuk membuat website yang **cepat, efisien, dan ramah pengguna**. Gambar dengan ukuran file besar dapat memperlambat waktu muat halaman, menurunkan pengalaman pengguna, dan berdampak buruk pada peringkat mesin pencari (SEO).

Dengan optimasi yang tepat, ukuran file gambar dapat diperkecil **tanpa mengorbankan kualitas visual**, sehingga website menjadi lebih responsif dan profesional.

---

## 1. Memahami Format File Gambar

Memilih format gambar yang tepat adalah langkah pertama dalam optimasi.

### JPEG / JPG
**Penggunaan terbaik:**
- Foto
- Gambar dengan banyak warna dan gradasi

**Kompresi:**  
Lossy (sebagian data gambar dibuang)

**Kelebihan:**
- Ukuran file relatif kecil
- Didukung hampir semua browser

**Kekurangan:**
- Kualitas menurun jika kompresi terlalu tinggi

**Contoh:**  
Foto pemandangan atau foto produk.

---

### PNG
**Penggunaan terbaik:**
- Logo
- Gambar dengan teks
- Gambar dengan latar transparan

**Kompresi:**  
Lossless (tanpa kehilangan kualitas)

**Kelebihan:**
- Mendukung transparansi
- Kualitas tetap tajam

**Kekurangan:**
- Ukuran file lebih besar dibanding JPEG

**Contoh:**  
Logo perusahaan dengan background transparan.

---

### GIF
**Penggunaan terbaik:**
- Animasi sederhana
- Gambar dengan warna terbatas (maks. 256 warna)

**Kompresi:**  
Lossless (palet warna terbatas)

**Kelebihan:**
- Mendukung animasi

**Kekurangan:**
- Tidak cocok untuk foto

**Contoh:**  
Animasi loading sederhana.

---

### WebP
**Penggunaan terbaik:**
- Foto dan grafik modern

**Kompresi:**  
Lossy dan lossless  
Mendukung transparansi dan animasi

**Kelebihan:**
- Ukuran file lebih kecil dari JPEG dan PNG
- Kualitas sangat baik

**Kekurangan:**
- Browser lama belum sepenuhnya mendukung

**Contoh:**  
Hampir semua gambar website modern.

---

### AVIF
**Penggunaan terbaik:**
- Foto resolusi tinggi
- Website yang mengutamakan performa

**Kompresi:**  
Lossy dan lossless (berbasis codec AV1)

**Kelebihan:**
- Kompresi sangat efisien
- Ukuran file sangat kecil

**Kekurangan:**
- Dukungan browser belum merata
- Proses encoding lebih berat

**Contoh:**  
Foto berkualitas tinggi dengan ukuran file minimal.

---

## 2. Teknik Optimasi Gambar

### 2.1 Mengubah Ukuran Gambar (Resize)

**Konsep:**  
Gunakan ukuran gambar sesuai tampilan sebenarnya di website.

**Praktik benar:**
- Jika gambar tampil 300×200 px, resize ke ukuran tersebut sebelum upload.

**Kesalahan umum:**
- Upload gambar besar lalu diperkecil dengan CSS atau HTML.

---

### 2.2 Kompresi Gambar

**Tujuan:**  
Mengurangi ukuran file gambar.

**Jenis kompresi:**
- **Lossy:** ukuran lebih kecil, sedikit penurunan kualitas
- **Lossless:** kualitas tetap terjaga

**Alat yang bisa digunakan:**
- TinyPNG
- ImageOptim
- Photoshop
- ImageMagick

**Contoh:**  
Menurunkan kualitas JPEG dari 90% ke 70% dapat mengurangi ukuran file secara signifikan.

---

### 2.3 Optimasi untuk Layar Retina

Layar retina membutuhkan kepadatan piksel lebih tinggi.

**Solusi:**
- Buat gambar versi 2×
- Gunakan atribut `srcset`

```html
<img 
  src="image.jpg"
  srcset="image.jpg 1x, image-2x.jpg 2x"
  alt="Deskripsi gambar">

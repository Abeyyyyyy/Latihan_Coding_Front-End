# Latihan Praktik: Membuat Tabel Data Sederhana

Tabel merupakan salah satu elemen penting dalam HTML untuk mengatur dan menyajikan data secara rapi dan terstruktur di web. Pada materi ini, kita akan mempraktikkan langsung elemen tabel yang sudah dipelajari, yaitu `<table>`, `<tr>`, `<th>`, dan `<td>`.

Melalui latihan ini, pemahaman kamu tentang cara kerja tabel HTML akan semakin kuat. Di akhir materi, kamu akan mampu membuat tabel data sederhana untuk menampilkan informasi secara efektif.

---

## Membangun Tabel Pertama

Contoh tabel jadwal pelajaran sederhana:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tabel Jadwal Sederhana</title>
</head>
<body>
  <table>
    <tr>
      <th>Waktu</th>
      <th>Senin</th>
      <th>Selasa</th>
      <th>Rabu</th>
    </tr>
    <tr>
      <td>09:00</td>
      <td>Matematika</td>
      <td>IPA</td>
      <td>Sejarah</td>
    </tr>
    <tr>
      <td>10:00</td>
      <td>IPA</td>
      <td>Sejarah</td>
      <td>Matematika</td>
    </tr>
    <tr>
      <td>11:00</td>
      <td>Sejarah</td>
      <td>Matematika</td>
      <td>IPA</td>
    </tr>
  </table>
</body>
</html>

# PRAKTIKUM PERMROGRAMAN WEB 6
JavaScript DOM dan Event Handling

**Nama:** Aidi Syahdan Firdaus  
**NIM:** 312510089  
**Kelas:** 1251A  

---

### Pertama siapkan dulu bahan-bahan praktikum
1. Buat folder bernama `lab6_dom_event`
2. Buat 3 file di dalam folder tadi `index.html`, `style.css`, dan `script.js`
3. Hubungkan file CSS dan Javascript di html dengan code di bawah ini

**index.html**

![alt text](image.png)

4. Terakhir buka halaman browser dan buka developer tools/console

![alt text](image-1.png)

---

# Langkah-Langkah Praktikum

### Mengubah teks dengan DOM di script.js

**script.js**

![alt text](image-2.png)

**Hasil di browser**  

![alt text](image-3.png)
---

### Membuat event click di script.js
Disini const pesan sudah di deklarasikan sebelumnya jadi di hapus saja karena akan mengakibatkan error

**script.js**

![alt text](image-4.png)

**Hasil di browser**  

![alt text](image-5.png)

**jika di klik lagi waktubya akan di perbarui sesuai jam saat mengklik**

![alt text](image-6.png)

---

### Lanjut dengan mengubah kelas dan gaya CSS

**style.css**

![alt text](image-7.png)

**script.js**

![alt text](image-8.png)

Buat juga paragraph teksGaya dan button tombolGaya di `index.html`

![alt text](image-9.png)

**Hasil di browser**  

![alt text](image-10.png)

**ketika di klik**

![alt text](image-11.png)

Disini Ketika menggunakan `classList.toggle()` saat di klik akan berubah seperti di screenschoot ke dua dan saat di klik lagi akan Kembali ke sebelumnya, lalu saat menggunakan `classList.add()` saat di klik akan berubah seperti saat menggunakan toggle tapi saat di klik Kembali tidak bisa Kembali ke sebelumnya, sedangkan saat menggunakkan `classList.remove()` Ketika di klik tidak terjadi apapun.

---

### Buat input teks dan indikator jumlah karakter yang diperbarui saat pengguna mengetik

**index.html**

![alt text](image-12.png)

**script.js**

![alt text](image-13.png)

**Hasil di browser**  

![alt text](image-14.png)

---

### Buat form nama, email, dan usia. Program menampilkan pesan jika input tidak sesuai.

**index.html**

![alt text](image-15.png)

**script.js**

![alt text](image-16.png)

**Hasil di browser jika nama kosong**  

![alt text](image-17.png)

**Hasil di browser jika email tidak sesuai**  

![alt text](image-18.png)

**Hasil di browser jika usia bukan tipe data integer(bilangan bulat)**  

![alt text](image-19.png)

**Hasil di browser jika form yang diisi valid**  

![alt text](image-20.png)

**form akan otomatis kosong kembali jika tombol daftar di klik**

![alt text](image-21.png)

---

### Buat aplikasi kecil untuk menambahkan tugas dan menandai tugas selesai.

**index.html**

![alt text](image-22.png)

**script.js**

![alt text](image-23.png)

**style.css**

![alt text](image-24.png)

**Hasil di browser Ketika memasukkan input di form Tugas Baru**  

![alt text](image-25.png)

**Ketika button Tombol selesai di klik**  

![alt text](image-26.png)

**Ketika di batalkan(kembali ke sebelumnya)**  

![alt text](image-27.png)

---

# EKSPERIMEN MANDIRI

### 1. Tambahkan tombol untuk menghapus satu item dari To-do List.

![alt text](image-28.png)

**Hasilnya**  

![alt text](image-29.png)

**Ketika di hapus**  

![alt text](image-30.png)

---

### 2. Ubah validasi agar nama minimal terdiri dari tiga karakter.

![alt text](image-31.png)

**Hasilnya**  

![alt text](image-32.png)

---

### 3. Tambahkan event change pada dropdown sesi workshop dan tampilkan sesi yang dipilih.

**index.html**

![alt text](image-33.png)

**script.js**

![alt text](image-34.png)

**Hasilnya**  

![alt text](image-35.png)

---

### 4. Buat tombol untuk menyembunyikan dan menampilkan paragraf menggunakan class CSS.

**index.html**

![alt text](image-36.png)

**style.css**

![alt text](image-37.png)

**script.js**

![alt text](image-38.png)

**Hasilnya**  

![alt text](image-39.png)

**Jika di sembunyikan**  

![alt text](image-40.png)

---

### 5. Coba pindahkan script tanpa defer ke bagian head. Amati kemungkinan masalah dan jelaskan penyebabnya.

**Tanpa defer**

![alt text](image-41.png)

**yang terjadi**

![alt text](image-42.png)

**Penjelasannya:**  
Pas tag skrip dipindahin ke bagian head tanpa pake atribut defer, browser bakal langsung ngunduh sama ngejalanin file script.js saat itu juga sebelum selesai membaca elemen HTML di bagian body. Kondisi ini bikin kode JavaScript udah keburu jalan padahal struktur DOM belum selesai dibuat. Akibatnya, fungsi pencarian elemen kayak document.getElementById() nggak bisa nemuin elemen yang dicari dan malah ngasilin nilai null. Nah, pas kodenya mencoba nambahin event listener atau ngubah teks dari nilai null tersebut, browser langsung ngelempar error TypeError yang bikin fungsi interaktifnya ga bisa jalan sama sekali.

---

# PERTANYAAN EVALUASI

1. **Apa yang dimaksud dengan DOM dan apa manfaatnya?**  
   DOM (Document Object Model) adalah representasi struktur dokumen HTML dalam bentuk objek yang dapat diakses dan dimanipulasi oleh JavaScript. Manfaatnya yaitu membuat program dapat memilih elemen, mengubah konten, menambah atau menghapus kelas CSS, serta merespons berbagai tindakan pengguna pada halaman web.

2. **Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?**  
   - `getElementById()` digunakan untuk memilih elemen HTML secara spesifik berdasarkan nilai id-nya.  
   - `querySelector()` memilih elemen pertama yang cocok dengan selector CSS yang ditentukan.  
   - `querySelectorAll()` memilih semua elemen yang cocok dengan selector CSS tersebut.

3. **Apa fungsi addEventListener() dan sebutkan tiga contoh event?**  
   Fungsi `addEventListener()` adalah untuk menghubungkan suatu event dengan fungsi yang akan dijalankan saat event tersebut terjadi. Contoh event yang disebutkan dalam modul antara lain click, input, change, submit, keydown, dan mouseover.

4. **Mengapa event.preventDefault() digunakan pada event submit form?**  
   `event.preventDefault()` digunakan pada event submit untuk mencegah halaman web memuat ulang (refresh) secara otomatis sebelum pemeriksaan data atau proses validasi form selesai dilakukan.

5. **Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?**  
   - **Penggunaan:** `textContent` digunakan untuk mengubah atau menampilkan konten berupa teks biasa, sedangkan `innerHTML` dapat mengubah dan memasukkan struktur markup HTML.  
   - **Keamanan:** Memasukkan teks dari pengguna yang tidak dipercaya menggunakan `innerHTML` harus dihindari karena dapat menimbulkan risiko keamanan (seperti ancaman XSS), sedangkan `textContent` lebih aman karena menampilkan data pengguna murni sebagai teks biasa tanpa mengeksekusi markup HTML.

6. **Bagaimana classList.toggle() membantu mengubah tampilan elemen?**  
   `classList.toggle()` membantu mengubah tampilan elemen secara dinamis dengan cara menambah atau menghapus kelas CSS secara bergantian ($on/off$) setiap kali fungsi dipanggil, tergantung apakah kelas tersebut sudah ada pada elemen atau belum.

7. **Sebutkan minimal tiga skenario pengujian validasi form.**  
   Tiga contoh skenario pengujian validasi form berdasarkan modul yaitu:  
   1. Pengujian saat semua kolom input dibiarkan kosong.  
   2. Pengujian saat format email tidak valid (misal: tidak sesuai pola @ dan domain).  
   3. Pengujian saat nilai usia di luar ketentuan (misal: di bawah 17 tahun atau bukan bilangan bulat).
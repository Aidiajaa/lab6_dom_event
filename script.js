// Teks DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// Event Click
const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// Gaya
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// Input
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// form dan validasi input
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length <3) {
        pesanForm.textContent = "Nama wajib diisi dan minimal terdiri dari 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});

// To do list
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }
    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button"); // ini yang di tambahkan untuk membuat tombol hapus
    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai" : "Tandai selesai";
    });
    item.append(label, selesai);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();

    // disini konfigurasi dan event handler dari button hapusnya
    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.style.marginLeft = "5px";
    hapus.addEventListener("click", function () {
        item.remove(); 
        pesanTugas.textContent = "Tugas dihapus.";
    });

    item.append(label, selesai, hapus); 
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});

// sesi workshop
const sesiWorkshop = document.getElementById("sesiWorkshop");
const infoSesi = document.getElementById("infoSesi");

sesiWorkshop.addEventListener("change", function () {
    const sesiTerpilih = sesiWorkshop.value;
    if (sesiTerpilih !== "") {
        infoSesi.textContent = "Sesi yang dipilih: " + sesiTerpilih;
    } else {
        infoSesi.textContent = "Sesi yang dipilih: Belum memilih";
    }
});

//tombol hide
const paragrafTampil = document.getElementById("paragrafTampil");
const tombolSembunyi = document.getElementById("tombolSembunyi");

tombolSembunyi.addEventListener("click", function () {
    paragrafTampil.classList.toggle("sembunyi");
});
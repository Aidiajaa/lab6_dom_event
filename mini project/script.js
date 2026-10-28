const form = document.getElementById("formWorkshop");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const sesiSelect = document.getElementById("sesi");
const jumlahKarakter = document.getElementById("jumlahKarakter");
const infoSesi = document.getElementById("infoSesi");
const pesanForm = document.getElementById("pesanForm");
const btnReset = document.getElementById("btnReset");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

sesiSelect.addEventListener("change", function () {
    const sesiTerpilih = sesiSelect.value;
    if (sesiTerpilih !== "") {
        infoSesi.textContent = "Sesi yang dipilih: " + sesiTerpilih;
    } else {
        infoSesi.textContent = "Sesi yang dipilih: Belum memilih";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const sesi = sesiSelect.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanForm.className = ""; 

    if (nama.length < 3) {
        pesanForm.textContent = "Nama wajib diisi dan minimal terdiri dari 3 karakter.";
        pesanForm.classList.add("pesan-error");
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
        pesanForm.classList.add("pesan-error");
    } else if (sesi === "") {
        pesanForm.textContent = "Silakan pilih salah satu sesi workshop.";
        pesanForm.classList.add("pesan-error");
    } else {
        pesanForm.textContent = "Pendaftaran berhasil! Terima kasih telah mendaftar.";
        pesanForm.classList.add("pesan-sukses");
        form.reset();
        jumlahKarakter.textContent = "0";
        infoSesi.textContent = "Sesi yang dipilih: Belum memilih";
    }
});

btnReset.addEventListener("click", function () {
    form.reset();
    jumlahKarakter.textContent = "0";
    infoSesi.textContent = "Sesi yang dipilih: Belum memilih";
    pesanForm.textContent = "";
    pesanForm.className = "";
});
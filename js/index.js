
function hitungLuas() {
    // Ambil nilai alas dan tinggi
    var alas = document.getElementById("input-alas").value;
    var tinggi = document.getElementById("input-tinggi").value;
    var luas = ""

    // Syarat Validasi
    if(alas == '' || tinggi == '') {
        // Jika isian Kolom ada yang kosong
        luas = 'Harap Isi Kolom Kosong'
    } else {
        // Hitung luas segitiga
        luas =  "<p>Luas Segitiga = 1/2 * Alas * Tinggi</p>" +
                "<p>Luas Segitiga = 1/2 * "+ alas +" * "+ tinggi +"</p>" +
                "<p>Luas Segitiga = " + (0.5 * alas * tinggi) + "</p>";
    }
    // Tampilkan hasil di dalam div hasil-luas
    var hasilElement = document.getElementById("hasil-luas");
    hasilElement.innerHTML = luas
}

function resetForm() {
    // Reset nilai input dan hasil
    document.getElementById("input-alas").value = "";
    document.getElementById("input-tinggi").value = "";
    document.getElementById("hasil-luas").innerHTML = "";
}

function hitungKeliling() {
    // Ambil nilai sisi AB, BC, dan CA
    var sisiab = parseFloat(document.getElementById("input-ab").value);
    var sisibc = parseFloat(document.getElementById("input-bc").value);
    var sisica = parseFloat(document.getElementById("input-ca").value);
    var keliling = 0;

    // Syarat Validasi
    if(isNaN(sisiab) || isNaN(sisibc) || isNaN(sisica)) {
        // Jika salah satu atau semua isian kolom bukan angka
        keliling = 'Harap Isi Kolom dengan Angka';
    } else {
        // Hitung keliling segitiga
        keliling =  "<p>Keliling Segitiga = AB + BC + CA</p>" +
                    "<p>Keliling Segitiga = "+ sisiab +" + "+ sisibc +" + "+ sisica +"</p>" +
                    "<p>Keliling Segitiga = " + (sisiab + sisibc + sisica) + "</p>";
    

    // Tampilkan hasil di dalam div hasil-keliling
    var hasilElement = document.getElementById("hasil-keliling");
    hasilElement.innerHTML = keliling
    }
}

function resetKeliling() {
    // Reset nilai input dan hasil
    document.getElementById("input-ab").value = "";
    document.getElementById("input-bc").value = "";
    document.getElementById("input-ca").value = "";
    document.getElementById("hasil-keliling").innerHTML = "";
}


document.addEventListener('DOMContentLoaded', function() {
    // Semua elemen section
    var luasSection = document.getElementById('luaspage');
    var kelilingSection = document.getElementById('kelilingpage');

    // Tombol Luas
    var btnLuas = document.getElementById('btn-luas');
    btnLuas.addEventListener('click', function() {
        // Tampilkan section luas, sembunyikan section keliling
        luasSection.style.display = 'flex';
        kelilingSection.style.display = 'none';
    });

    // Tombol Keliling
    var btnKeliling = document.getElementById('btn-keliling');
    btnKeliling.addEventListener('click', function() {
        // Tampilkan section keliling, sembunyikan section luas
        kelilingSection.style.display = 'flex';
        luasSection.style.display = 'none';
    });
    // Tampilkan section luaspage secara default saat halaman pertama kali dimuat
    luasSection.style.display = 'flex';
    kelilingSection.style.display = 'none';
});

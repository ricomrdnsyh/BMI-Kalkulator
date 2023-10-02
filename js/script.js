function hitungBMI() {
  let berat = parseFloat(document.getElementById("berat").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Ubah tinggi dari cm menjadi meter

  if (isNaN(berat) || isNaN(tinggi) || tinggi === 0) {
    document.getElementById("hasil").innerHTML =
      "Masukkan berat dan tinggi yang valid.";
  } else {
    let bmi = berat / (tinggi * tinggi);
    let kategori = "";

    if (bmi < 18.5) {
      kategori = "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Gemuk";
    } else {
      kategori = "Obesitas";
    }

    let hasil =
      "BMI Anda adalah: " + bmi.toFixed(2) + "<br>Kategori : " + kategori;
    document.getElementById("hasil").innerHTML = hasil;
  }
}

function resetForm() {
  document.getElementById("berat").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasil").innerHTML = "";
}

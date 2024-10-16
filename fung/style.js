function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Masukkan nilai yang valid untuk berat badan dan tinggi badan.");
    return;
  }

  // Konversi tinggi badan dari cm ke meter
  const heightInMeter = height / 100;

  // Kalkulasi BMI
  const bmi = weight / (heightInMeter * heightInMeter);
  document.getElementById("bmiValue").textContent = bmi.toFixed(2);

  // Tentukan kategori BMI
  let category = "";
  if (bmi < 18.5) {
    category = "Kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Kelebihan Berat Badan";
  } else {
    category = "Kegemukan (Obesitas)";
  }

  document.getElementById("category").textContent = `Kategori: ${category}`;
}

function clearFields() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("bmiValue").textContent = "-";
  document.getElementById("category").textContent = "Kategori: -";
}

// Fungsi untuk reset formulir setelah menutup modal
function resetForm() {
  document.getElementById("registrationForm").reset();
}

// Menangani submit formulir untuk mencegah reload
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah halaman reload

  // Tampilkan modal setelah form disubmit
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
});

// Reload halaman ketika modal ditutup
const modalElement = document.getElementById("exampleModal");
modalElement.addEventListener("hidden.bs.modal", function () {
  location.reload(); // Reload halaman setelah modal ditutup
});

document.addEventListener("DOMContentLoaded", (event) => {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    Swal.fire({
      title: "Apakah anda yakin untuk menyimpannya?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Simpan",
      denyButtonText: `Batalkan`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        addData();

        Swal.fire("Behasil disimpan", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Gagal disimpan", "", "info");
      }
    });
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  } else {
  }
});

document.addEventListener("ondatasaved", () => {
  console.log("Data berhasil disimpan.");
});

document.addEventListener("ondataloaded", () => {
  refreshDataFromDatas();
  console.log("Data berhasil dimuat.");
});

const STORAGE_KEY = "NILAI_APPS";

let dataMhs = [];

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");

    return false;
  } else {
    return true;
  }
}

function saveData() {
  const parsed = JSON.stringify(dataMhs);
  localStorage.setItem(STORAGE_KEY, parsed);
  document.dispatchEvent(new Event("ondatasaved"));
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null) dataMhs = data;

  document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
  if (isStorageExist()) saveData();
}

function composeDataObject(
  namaMhs,
  nim,
  mataKuliah,
  nilaiTugas,
  nilaiKuis,
  nilaiUTS,
  nilaiUAS,
  nilaiRata,
  gradeNilai
) {
  return {
    id: +new Date(),
    namaMhs,
    nim,
    mataKuliah,
    nilaiTugas,
    nilaiKuis,
    nilaiUTS,
    nilaiUAS,
    nilaiRata,
    gradeNilai,
  };
}

function findData(dataId) {
  for (data of dataMhs) {
    if (data.id === dataId) return data;
  }

  return null;
}

function findDataIndex(dataId) {
  let index = 0;
  for (data of dataMhs) {
    if (data.id === dataId) return index;

    index++;
  }

  return -1;
}

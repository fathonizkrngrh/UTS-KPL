const TABLE_BODY = "tableBody";
const DATAID = "dataId";

function makeList(
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
  const textNama = document.createElement("td");
  textNama.innerText = namaMhs;

  const textNIM = document.createElement("td");
  textNIM.innerText = nim;

  const textMataKuliah = document.createElement("td");
  textMataKuliah.innerText = mataKuliah;

  const textNilaiTugas = document.createElement("td");
  textNilaiTugas.innerText = nilaiTugas;
  textNilaiTugas.classList.add("centered-text");

  const textNilaiKuis = document.createElement("td");
  textNilaiKuis.innerText = nilaiKuis;
  textNilaiKuis.classList.add("centered-text");

  const textNilaiUTS = document.createElement("td");
  textNilaiUTS.innerText = nilaiUTS;
  textNilaiUTS.classList.add("centered-text");

  const textNilaiUAS = document.createElement("td");
  textNilaiUAS.innerText = nilaiUAS;
  textNilaiUAS.classList.add("centered-text");

  const textnilaiRata = document.createElement("td");
  textnilaiRata.innerText = nilaiRata;
  textnilaiRata.classList.add("centered-text");

  const textGrade = document.createElement("td");
  textGrade.innerText = gradeNilai;
  textGrade.classList.add("centered-text");

  const trashBtn = document.createElement("td");
  trashBtn.append(createTrashButton());
  textnilaiRata.classList.add("centered-text");

  const tableRow = document.createElement("tr");
  tableRow.classList.add("tableRow");
  tableRow.append(
    textNama,
    textNIM,
    textMataKuliah,
    textNilaiTugas,
    textNilaiKuis,
    textNilaiUTS,
    textNilaiUAS,
    textnilaiRata,
    textGrade,
    trashBtn
  );

  return tableRow;
}

function addData() {
  const namaMhs = document.getElementById("namaMhs").value;
  const nim = document.getElementById("nim").value;
  const mataKuliah = document.getElementById("mataKuliah").value;
  const nilaiTugas = document.getElementById("nilaiTugas").value;
  const nilaiKuis = document.getElementById("nilaiKuis").value;
  const nilaiUTS = document.getElementById("nilaiUTS").value;
  const nilaiUAS = document.getElementById("nilaiUAS").value;

  const nilaiTotal = totalNilai(nilaiTugas, nilaiKuis, nilaiUTS, nilaiUAS);
  const nilaiRata = rataRataNilai(nilaiTotal);
  const gradeNilai = grading(nilaiRata);

  const dataList = document.getElementById(TABLE_BODY);

  const data = makeList(
    namaMhs,
    nim,
    mataKuliah,
    nilaiTugas,
    nilaiKuis,
    nilaiUTS,
    nilaiUAS,
    nilaiRata,
    gradeNilai
  );
  const dataObject = composeDataObject(
    namaMhs,
    nim,
    mataKuliah,
    nilaiTugas,
    nilaiKuis,
    nilaiUTS,
    nilaiUAS,
    nilaiRata,
    gradeNilai
  );

  data[DATAID] = dataObject.id;
  dataMhs.push(dataObject);

  dataList.append(data);
  updateDataToStorage();
}

function refreshDataFromDatas() {
  const dataList = document.getElementById(TABLE_BODY);

  for (data of dataMhs) {
    const newData = makeList(
      data.namaMhs,
      data.nim,
      data.mataKuliah,
      data.nilaiTugas,
      data.nilaiKuis,
      data.nilaiUTS,
      data.nilaiUAS,
      data.nilaiRata,
      data.gradeNilai
    );
    newData[DATAID] = data.id;
    dataList.append(newData);
  }
}

function createButton(buttonTypeClass /* string */, eventListener /* Event */) {
  const button = document.createElement("button");
  button.classList.add(buttonTypeClass);
  button.addEventListener("click", function (event) {
    eventListener(event);
    event.stopPropagation();
  });
  return button;
}

function createTrashButton() {
  return createButton("trash-button", function (event) {
    const tdBtn = event.target.parentElement;
    removeData(tdBtn.parentElement);
  });
}

function removeData(dataElement /* HTMLELement */) {
  const dataPosition = findDataIndex(dataElement[DATAID]);
  dataMhs.splice(dataPosition, 1);

  dataElement.remove();
  updateDataToStorage();
}

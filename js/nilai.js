function grading(total) {
  let grade;
  if (total >= 92) {
    grade = "A";
  } else if (total >= 86 && total < 92) {
    grade = "A-";
  } else if (total >= 81 && total < 86) {
    grade = "B+";
  } else if (total >= 76 && total < 81) {
    grade = "B";
  } else if (total >= 71 && total < 76) {
    grade = "B-";
  } else if (total >= 66 && total < 71) {
    grade = "C+";
  } else if (total >= 60 && total < 66) {
    grade = "C";
  } else if (total >= 55 && total < 60) {
    grade = "D";
  } else if (total < 55) {
    grade = "E";
  }

  return grade;
}

function totalNilai(nilaiTugas, nilaiKuis, nilaiUTS, nilaiUAS) {
  const NTugas = parseFloat(nilaiTugas);
  const NKuis = parseFloat(nilaiKuis);
  const NUTS = parseFloat(nilaiUTS);
  const NUAS = parseFloat(nilaiUAS);

  let total = NTugas + NKuis + NUTS + NUAS;

  return total;
}

function rataRataNilai(totalNilai) {
  let NRata = totalNilai / 4;
  let rataRata = NRata.toFixed(2);
  console.log(typeof NRata);
  console.log(NRata);

  return rataRata;
}

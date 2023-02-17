// Pasangan Angka Terbesar

// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
// Function akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
// Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
  // you can only write your code here!
  let angkaToString = num.toString();
  let panjangAngka = angkaToString.length;
  let pasanganTerbesar = Number(angkaToString.slice(panjangAngka-2, panjangAngka));

  for (let i = 0; i < panjangAngka-1; i++) {
    let pasanganAngka = Number(angkaToString.slice(i, i+2));
    if (pasanganAngka > pasanganTerbesar) {
      pasanganTerbesar = pasanganAngka;
    }
  }

  console.log(pasanganTerbesar)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
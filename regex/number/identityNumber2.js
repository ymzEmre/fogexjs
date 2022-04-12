//Kendi projemden aldım orada çalışıyor. Burada toString(), length, substring() gibi fonksiyonları görmüyor
//extra paket gerekiyor sanırım. o yüzden çalışma testi yapılamadı!!
//importlar çalışmadığından exportlar geçici süre commente alındı!

/*
- ilk hane 0 olamaz.
- 1. 3. 5. 7. ve 9. hanelerinin toplamının 7 katından, 2. 4. 6. ve 8. hanelerinin toplamı çıkartıldığında, 
elde edilen sonucun 10'a bölümünden kalan, yani mod10'u bize 10. haneyi verir.
- 1. 2. 3. 4. 5. 6. 7. 8. 9. ve 10. hanelerin toplamından elde edilen sonucun 10'a bölümünden kalan, 
yani mod10'u bize 11. haneyi verir.
*/

const identityNumberCheck = ({ IdentityNumber }) => {
  let single = 0;
  let couple = 0;
  let step10 = 0;
  let step11 = 0;

  let identityNumber = IdentityNumber.toString();
  let isLength = identityNumber.length == 11;
  let isFirstZero = identityNumber.substring(0, 1) != "0";

  for (let i = 0; i < 10; i += 2) {
    single += Number(identityNumber.substring(i + 1, i));
  }
  for (let i = 1; i < 9; i += 2) {
    couple += Number(identityNumber.substring(i + 1, i));
  }

  step10 = (single * 7 - couple) % 10;
  step11 = (single + couple + step10) % 10;

  let isStep10 = step10.toString() === identityNumber.substring(9, 10);
  let isStep11 = step11.toString() === identityNumber.substring(10, 11);

  return isLength && isFirstZero && isStep10 && isStep11;
};

console.log(identityNumberCheck("48424292410"));

//export { identityNumberCheck };

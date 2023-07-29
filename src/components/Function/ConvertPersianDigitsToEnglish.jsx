const ConvertPersianDigitsToEnglish = (str) => {
  console.log("props bbin => ", str);
  const persianDigits = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < 10; i++) {
    str = str.replace(persianDigits[i], englishDigits[i]);
  }

  return str;
};

export default ConvertPersianDigitsToEnglish;

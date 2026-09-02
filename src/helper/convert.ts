 const toEnglishDigits = (value: string) => {
    return value.replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)),
    );
 };

 export default toEnglishDigits;
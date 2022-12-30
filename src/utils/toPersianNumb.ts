export function toPersianNumb(n: number) {
  const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
  return n
    .toString()
    .split("")
    .map((c) => numbers[+c])
    .join("")
}

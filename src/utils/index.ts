export const letters: any = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "j",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "y",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "ch",
  ш: "sh",
  щ: "sch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
};
export function convertLetters(string: string) {
  const arr = string.toLowerCase().split("");
  return arr
    .map((l) => {
      if (l === " ") {
        return "_";
      }
      if (/[.,!?]/.test(l)) {
        return;
      }
      if (/[0-9]/.test(l)) {
        return l;
      }
      return letters[l];
    })
    .join("");
}

// src\scripts\textCases.ts

export const toSentenceCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const toLowerCase = (str: string): string => str.toLowerCase();

export const toUpperCase = (str: string): string => str.toUpperCase();

export const toCapitalizedCase = (str: string): string =>
  str.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  );

export const toAlternatingCase = (str: string): string =>
  str
    .split("")
    .map((char, index) =>
      index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");

export const toTitleCase = (str: string): string =>
  str
    .replace(/\w\S*/g, (word) => {
      return [
        "and",
        "the",
        "in",
        "on",
        "at",
        "but",
        "or",
        "for",
        "nor",
        "a",
        "an",
      ].indexOf(word.toLowerCase()) > -1
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .replace(/^(.)|\s(.)/g, (letter) => letter.toUpperCase());

export const toInverseCase = (str: string): string =>
  str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");

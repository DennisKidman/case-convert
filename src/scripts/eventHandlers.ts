import {
  toSentenceCase,
  toLowerCase,
  toUpperCase,
  toCapitalizedCase,
  toAlternatingCase,
  toTitleCase,
  toInverseCase,
} from "./textCases";

import { downloadText, copyToClipboard } from "./utilities";
import { updateCounts, resetCounts } from "./textCounters";

export const addCaseConversionEventListeners = (): void => {
  const textarea = document.querySelector("textarea");

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (!textarea) return;
      const text = textarea.value;
      switch (button.textContent?.trim()) {
        case "Sentence case":
          textarea.value = toSentenceCase(text);
          break;
        case "lower case":
          textarea.value = toLowerCase(text);
          break;
        case "UPPER CASE":
          textarea.value = toUpperCase(text);
          break;
        case "Capitalized Case":
          textarea.value = toCapitalizedCase(text);
          break;
        case "aLtErNaTiNg cAsE":
          textarea.value = toAlternatingCase(text);
          break;
        case "Title Case":
          textarea.value = toTitleCase(text);
          break;
        case "InVeRsE CaSe":
          textarea.value = toInverseCase(text);
          break;
        case "Download":
          downloadText(text);
          break;
        case "Copy to Clipboard":
          copyToClipboard(text);
          break;
        case "Clear":
          textarea.value = "";
          break;
      }
    });
  });
};

export const addTextInputEventListeners = (): void => {
  const textInput = document.getElementById("text-input") as HTMLInputElement;

  if (textInput) {
    textInput.addEventListener("input", () => {
      updateCounts(textInput);
      if (textInput.value === "") {
        resetCounts();
      }
    });
  }
};

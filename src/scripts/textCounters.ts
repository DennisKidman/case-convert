// src\scripts\textCounters.ts

export const updateCounts = (textInput: HTMLInputElement): void => {
  const text = textInput.value;

  // Character count
  const characterCount = text.length;
  const characterCountElement = document.getElementById("character-count");
  if (characterCountElement) {
    characterCountElement.textContent = `Character Count: ${characterCount}`;
  }

  // Word count
  const wordCount = text.trim().split(/\s+/).length;
  const wordCountElement = document.getElementById("word-count");
  if (wordCountElement) {
    wordCountElement.textContent = `Word Count: ${wordCount}`;
  }

  // Sentence count
  const sentences = text.split(/(?<=[.!?])\s+/);
  let sentenceCount = sentences.length - 1;
  if (text.length > 0) {
    sentenceCount++;
  }
  const sentenceCountElement = document.getElementById("sentence-count");
  if (sentenceCountElement) {
    sentenceCountElement.textContent = `Sentence Count: ${sentenceCount}`;
  }

  // Line count
  const lineCount = text.split(/\r\n|\r|\n/).length;
  const lineCountElement = document.getElementById("line-count");
  if (lineCountElement) {
    lineCountElement.textContent = `Line Count: ${lineCount}`;
  }
};

export const resetCounts = (): void => {
  const elements = [
    "character-count",
    "word-count",
    "sentence-count",
    "line-count",
  ];

  elements.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = `${id
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")}: 0`;
    }
  });
};

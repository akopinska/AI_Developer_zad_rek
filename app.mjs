import fs from "fs/promises";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Konfiguracja OpenAI API
const OPENAI_API_KEY =
  "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";
const OPENAI_API_URL = "https://api.openai.com/v1/completions";

// Funkcja do odczytu pliku tekstowego
async function readArticle(filePath) {
  return fs.readFile(filePath, "utf-8");
}

// Funkcja do przesyłania treści artykułu do OpenAI i otrzymywania wygenerowanego HTML
async function processArticleWithOpenAI(articleContent) {
  const prompt = `Przeanalizuj poniższą treść artykułu i wygeneruj kod HTML spełniający następujące wytyczne:
- Użyj odpowiednich tagów HTML do strukturyzacji treści.
- Wstaw tagi <img> z atrybutem src="image_placeholder.jpg" i dodaj atrybut alt z opisem grafiki.
- Umieść podpisy pod grafikami przy użyciu odpowiednich tagów HTML.

Treść artykułu:
${articleContent}`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Debugowanie: sprawdzenie zwracanych danych

    return data.choices[0].text.trim(); // Zwrot odpowiedzi z API
  } catch (error) {
    console.error("Błąd podczas przetwarzania artykułu przez OpenAI:", error);
  }
}

// Funkcja główna
async function main() {
  try {
    const articlePath = "./article.txt"; // Ścieżka do pliku tekstowego
    const outputPath = "./artykul.html";

    // Odczyt artykułu
    const articleContent = await readArticle(articlePath);
    console.log("Artykuł odczytany. Przetwarzanie...");

    // Przetwarzanie artykułu za pomocą OpenAI
    const processedHTML = await processArticleWithOpenAI(articleContent);

    // Sprawdzenie, czy odpowiedź jest prawidłowa
    if (processedHTML) {
      // Zapis wygenerowanego kodu do pliku
      await fs.promises.writeFile(outputPath, processedHTML);
      console.log(`Wygenerowany kod HTML zapisany w pliku: ${outputPath}`);
    } else {
      console.error("Nie udało się wygenerować poprawnego kodu HTML.");
    }
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
}

main();

📚 Instrukcja uruchomienia aplikacji i opis działania


🎯 Opis działania aplikacji

Aplikacja jest narzędziem do przetwarzania treści artykułów na format HTML za pomocą API OpenAI oraz do wyświetlania tych treści w atrakcyjnej wizualnie formie. Główne komponenty aplikacji to:
⭐️ Plik szablon.html: Zawiera pusty szablon HTML, w którym treść artykułu może być wklejona i wyświetlana.
⭐️ Plik podglad.html: Zawiera pełny kod HTML z treścią artykułu, przekształconą za pomocą OpenAI.
⭐️ Plik app.js / app.mjs: Skrypt Node.js odpowiedzialny za odczyt pliku z artykułem, wysyłanie treści do OpenAI oraz zapis wygenerowanego wyniku.


🎯 Instrukcja uruchomienia

⭐️ Zainstaluj Node.js:
Upewnij się, że masz zainstalowaną platformę Node.js. Możesz to sprawdzić za pomocą:
node -v
npm -v
Jeśli nie masz Node.js, pobierz i zainstaluj go z oficjalnej strony.

⭐️ Zainstaluj zależności:
W katalogu projektu zainstaluj wymagane biblioteki, takie jak node-fetch:
npm install node-fetch

⭐️ Utwórz plik konfiguracyjny:
Upewnij się, że masz plik .env w katalogu projektu z kluczem API:
OPENAI_API_KEY=sk-XXXXX...

⭐️ Uruchom skrypt:
Aby uruchomić skrypt i przetworzyć artykuł, wykonaj:
node app.mjs

🌿 Skrypt odczyta treść z pliku article.txt, prześle ją do API OpenAI, a następnie zapisze wynik w pliku podglad.html.


🎯 Podgląd treści:
Otwórz plik podglad.html w przeglądarce, aby zobaczyć wyniki.

🎯 Struktura plików
⭐️ app.mjs: Główny plik skryptu Node.js.
⭐️ article.txt: Plik wejściowy z treścią artykułu do przetworzenia.
⭐️ szablon.html: Szablon do ręcznego wklejenia treści.
⭐️ podglad.html: Plik z pełnym podglądem artykułu.


‼️ Uwagi ‼️
Upewnij się, że Twoje zapytania do API OpenAI są ograniczone zgodnie z limitem Twojego planu subskrypcyjnego.
W przypadku błędów sprawdź status kodu i komunikaty w konsoli.

🚀 Dziękuję za skorzystanie z mojej aplikacji!

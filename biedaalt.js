const prompt = require('prompt-sync')();

class Dictionary {
    constructor() {
        this.words = []; // үг хадгалана 
    }

    // үг нэмэх
    addWord(english, mongolian) {
        const newWord = { english, mongolian };
        this.words.push(newWord);
        this.sortWords();
    }

    // Үг устгах 
    deleteWord(english) {
        const newWords = [];
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].english !== english) {
                newWords.push(this.words[i]);
            }
        }
        this.words = newWords;
    }

    // Үг хайх 
    findWord(english) {
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].english === english) {
                return this.words[i];
            }
        }
        return null;
    }

    // Bubble Sort ашиглан үгсийг эрэмбэлэх
    sortWords() {
        let n = this.words.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (this.words[j].english > this.words[j + 1].english) {
                    // Элементийг солино
                    [this.words[j], this.words[j + 1]] = [this.words[j + 1], this.words[j]];
                }
            }
        }
    }

    displayWords() {
        console.log("Англи - Монгол толь бичиг:");
        this.words.forEach(word => {
            console.log(`${word.english} - ${word.mongolian}`);
        });
    }
}

const dictionary = new Dictionary();

console.log("--- Англи-Монгол толь бичгийн цэс ---");
let isRunning = true;

while (isRunning) {
    console.log("1. Шинэ үг нэмэх");
    console.log("2. Үг устгах");
    console.log("3. Үг хайх");
    console.log("4. Бүх үгсийг харах");
    console.log("5. Гарах");

    const choice = prompt("Сонголтоо хийнэ үү (1-5): ");

    switch (choice) {
        case "1":
            const english = prompt("Англи үг оруулна уу: ");
            const mongolian = prompt("Монгол утгыг оруулна уу: ");
            dictionary.addWord(english, mongolian);
            console.log("Үг амжилттай нэмэгдлээ.");
            break;
        case "2":
            const deleteEnglish = prompt("Устгах англи үгийг оруулна уу: ");
            dictionary.deleteWord(deleteEnglish);
            console.log("Үг амжилттай устгагдлаа.");
            break;
        case "3":
            const searchEnglish = prompt("Хайх англи үгийг оруулна уу: ");
            const searchResult = dictionary.findWord(searchEnglish);
            if (searchResult) {
                console.log(`Хайлт: ${searchResult.english} - ${searchResult.mongolian}`);
            } else {
                console.log("Үг олдсонгүй.");
            }
            break;
        case "4":
            dictionary.displayWords();
            break;
        case "5":
            isRunning = false;
            break;
        default:
            console.log("Буруу сонголт. Дахин оролдоно уу.");
    }
}

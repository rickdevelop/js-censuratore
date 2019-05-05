function splitText() {
    var text = prompt("scrivi qui una frase");
    var split_text = text.split(" ");
    return split_text;
}

function wordCensored() {
    var badText = prompt("scrivi le parole da censurare dalla frase scritta in precedenza");
    var badSplit = badText.split(" ");
    return badSplit;
}
var textArray = splitText();
var word_count = textArray.length;
var censoredArray = wordCensored();
var censored_words = 0;
for (var i = 0; i < textArray.length; i++) {
    for (var x = 0; x < censoredArray.length; x++) {
        if (textArray[i] == censoredArray[x]) {
            textArray[i] = "xxx";
            censored_words++;
        }
    }
}
var censoredText = textArray.join(" ");
document.write(censoredText + '</br>');
document.write("censura di " + censored_words + " su " + word_count + " parole scritte");

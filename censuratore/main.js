var text = 'Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura ché la diritta via era smarrita.';
console.log(text);

var black_list = ['cammin', 'vita', 'selva', 'diritta', 'smarrita', 'cane', 'temporale', 'calcio', 'pallone'];

console.log(black_list);

var censoredWords = 'xxx';

var wordFound = 0;

for (var i = 0; i < black_list.length; i++) {
    if (text.includes(black_list[i])) {
        text = text.replace(black_list[i], censoredWords);
        wordFound = wordFound + 1;
        console.log(i);

    }

}

console.log(text);
console.log('Sono state date ' + black_list.length + ' parole da cercare nel testo, di cui ' + wordFound + ' sono state trovate e  censurate.')

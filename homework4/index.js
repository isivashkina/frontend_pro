let word,
    transformation,
    repeat = 3,
    result = '',

    question = confirm(`Tell me three most important words 💚`);
    
    if(question) {
    
        for(let i = 1; i <= repeat; i++){

            do {
                word = prompt(`Enter word #${i}`);
                if(word) {
                    word = word.replaceAll(` `,``);
                    
                    for(let i = 0;i <= (word.length-1); i++){
                        if(!isNaN(word[i])){
                            word = false;
                            break;
                        };
                    }
                }
            } while(!word);

            do {
                transformation = prompt(`Choose type of transformation for ${word} uppercase|lowercase|capitalize`);
                if(transformation) transformation = transformation.replaceAll(` `, ``)
            } while(!(transformation === `uppercase` || transformation === `lowercase` || transformation ===  `capitalize`)); 

            switch(transformation){
                case `uppercase`:
                    word = word.toUpperCase();
                    break;
                case `lowercase`:
                    word = word.toLowerCase();
                    break;
                case `capitalize`:
                    word = word[0].toUpperCase() + word.slice(1).toLowerCase();
                    break;
            }

            result += word + ' '
        }

        result = result.trim() + '!';   
}

console.log(result);
function removeChar(str){
    
    let output = '';
    for (let letter = 0; letter < str.length; letter++) {
        if (letter !== 0 && letter !== str.length - 1) {
            output += str[letter];
        }
    }
    
    
    console.log(output);

    return output;
   
   };
   
   removeChar('JiB')
   
   
   
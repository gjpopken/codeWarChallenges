// return masked string
function maskify(cc) {
    let output = '';

    if (cc.length >= 5) {
        for (let letter = cc.length - 5; letter > -1; letter--) {
            output += '#';
            console.log('current letter:', letter);
        }
        for (let letter = cc.length - 4; letter < cc.length; letter++) {
            output += cc[letter];
        }

    } else {
        for (let i = 0; i < cc.length; i++) {
            output += '#';
        }

    }

    console.log(output);
    return output;

    
}

maskify('GavinPopkenIsAnAwesomeMan');

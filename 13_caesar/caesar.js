const caesar = function (string, replacement_num) {
    let encrypted_text = [];
    for (const letter of (string.split(''))) {
        let converted_letter;
        let code_of_letter = letter.charCodeAt(0);
        let new_char_code;

        if ((-26 <= replacement_num && replacement_num < 0) || (replacement_num > 0 && replacement_num <= 26)) {
            replacement_num = replacement_num;
        }
        else if ((-26 > replacement_num && replacement_num < 0) || (replacement_num > 0 && replacement_num > 26)) {
            replacement_num = replacement_num % 26
        }
        new_char_code = code_of_letter + replacement_num;


        // FOR CAPITAL LETTERS, starts at 65 & ends at 90
        if (65 <= code_of_letter && code_of_letter <= 90) {
            // For Positive Replacements
            if (new_char_code > 90) {
                new_char_code = 64 + (replacement_num - (90 - code_of_letter))
            }
            // For Negative Replacements
            else if (new_char_code < 65) {
                new_char_code = 91 - ((-(replacement_num)) - (code_of_letter - 65))

            }
            converted_letter = String.fromCharCode(new_char_code);
        }
        // for small letters, starts at 97 & ends at 122
        else if (97 <= code_of_letter && code_of_letter <= 122) {
            // For Positive Replacements
            if (new_char_code > 122) {
                new_char_code = 96 + (replacement_num - (122 - code_of_letter))
            }
            // For Negative Replacements
            else if (97 > new_char_code) {
                new_char_code = 123 - ((-(replacement_num)) - (code_of_letter - 97))

            }

            converted_letter = String.fromCharCode(new_char_code);
        }
        // For - Punctuations!
        else {
            converted_letter = letter
        }
        encrypted_text.push(converted_letter)
    }
    return encrypted_text.join('')
};


// Do not edit below this line
module.exports = caesar;

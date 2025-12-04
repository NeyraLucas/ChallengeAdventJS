// Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

// [1++][2-][3+][<]
// Escribe una función que descifre el PIN a partir del código.

// El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

// Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

// Las operaciones se aplican en orden al número y son:

// + suma 1
// - resta 1
// El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

// También existe el bloque especial [<], que repite el dígito del bloque anterior.

// Si al final hay menos de 4 dígitos, se debe devolver null.

// 🧩 Ejemplos
// decodeSantaPin('[1++][2-][3+][<]')
// // "3144"

// decodeSantaPin('[9+][0-][4][<]')
// // "0944"

// decodeSantaPin('[1+][2-]')
// // null (solo 2 dígitos)

/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
    // Code here
    const blockRegex = /\[(.*?)\]/g;

    const blocks = [...code.matchAll(blockRegex)].map(match => match[1]);

    const pinDigits = [];

    for (let i = 0; i < blocks.length; i++) {
        const blockContent = blocks[i];

        if (blockContent === '<') {
            if (pinDigits.length === 0) {
                return null;
            }
            const lastDigit = pinDigits[pinDigits.length - 1];
            pinDigits.push(lastDigit);
            continue;
        }


        let value = parseInt(blockContent[0], 10);
        const operations = blockContent.substring(1);
        for (const op of operations) {
            if (op === '+') {
                value += 1;
            } else if (op === '-') {
                value -= 1;
            }

            value = (value + 10) % 10;
        }

        pinDigits.push(value.toString());
    }

    if (pinDigits.length !== 4) {
        return null;
    }

    return pinDigits.join('');
}

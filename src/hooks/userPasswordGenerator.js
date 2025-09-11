// Password generator function
// Generates a random password using alphabets (upper and lower case), digits, and punctuation
// Takes the number of characters as a parameter

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';
const punctuation = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const allChars = lowercase + uppercase + digits + punctuation;

export function generatePassword(length) {
    if (length <= 0) {
        throw new Error('Password length must be greater than 0');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    console.log("Generated Password: ", password);
    return password;
}

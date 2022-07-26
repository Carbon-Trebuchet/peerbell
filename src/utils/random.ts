export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
}

export function randomCharacter(characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"): string {
    return characters[randomNumber(0, characters.length - 1)];
}

export function randomString(length: number, characters?: string): string {
    let output = "";
    for (let i = 0; i < length; i++) output += randomCharacter(characters);
    return output;
}

export default function generateAddress(length = 10): string {
    let address = randomString(length);
    address += ".pb";

    return address;
}
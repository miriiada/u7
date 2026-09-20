export function reverseText(str) {
    if (str.length <= 1) {
        return str;
    }

    return reverseText(str.slice(1)) + str[0];
}
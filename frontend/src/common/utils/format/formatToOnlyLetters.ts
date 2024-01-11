export function formatToOnlyLetters(item: string) {
  return item
    .replace(/[^a-zA-ZÀ-ÿ ]/g, '')
    .replace(/\d/g, '')
    .replace(/[!@#$%^&*(),.?":{}|<>]/g, '')
    .replace(/\s+/g, ' ');
}

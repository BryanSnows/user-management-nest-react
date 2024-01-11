export function formatToAlphaNumeric(item: string) {
  return item.replace(/[^a-zA-ZÀ-ÿ0-9 ]/g, '').replace(/\s +/g, '');
}

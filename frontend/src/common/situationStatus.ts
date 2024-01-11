import { Situation } from './enums';

export function situationStatus(number: number) {
  const keys = Object.keys(Situation);
  for (const key of keys) {
    if (Situation[key as keyof typeof Situation] === number) {
      return key;
    }
  }
  return null;
}

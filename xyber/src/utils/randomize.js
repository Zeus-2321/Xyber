export function pickRandom(arr, count) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

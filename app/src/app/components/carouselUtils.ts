export function getVisibleIndices(
  currentIndex: number,
  totalCards: number
): number[] {
  if (totalCards < 3) {
    throw new Error("There must be at least 3 cards to display a carousel.");
  }

  return [
    (currentIndex - 1 + totalCards) % totalCards,
    currentIndex,
    (currentIndex + 1) % totalCards,
  ];
}

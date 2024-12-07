"use client";

export interface CardType {
  id: number;
  backgroundColor: string;
  backImage: string;
  description: string;
  effectDescription: string;
  frontImage: string;
  rarity: "common" | "uncommon" | "rare" | "legendary";
  setNumber: string;
  stats: { attack: number; defense: number; speed: number };
  subcategory?: string;
  title: string;
  type: string;
  textColor: string; // New property for text color
}

export const getRarityStyles = (rarity: CardType["rarity"]) => {
  switch (rarity) {
    case "common":
      return { borderColor: "gray", borderWidth: "1px" };
    case "uncommon":
      return { borderColor: "green", borderWidth: "2px" };
    case "rare":
      return {
        borderColor: "blue",
        borderWidth: "3px",
        boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)", // Blue glow
      };
    case "legendary":
      return {
        borderImage: "linear-gradient(to right, gold, purple) 1", // Gradient border
        borderWidth: "4px",
        boxShadow: "0 0 15px rgba(128, 0, 128, 0.7)", // Purple glow
      };
    default:
      return { borderColor: "black", borderWidth: "1px" };
  }
};

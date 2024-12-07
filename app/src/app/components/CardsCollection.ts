import { CardType } from "./Card";

const monsterVerseCards: CardType[] = [
  {
    id: 1,
    title: "Godzilla",
    description:
      "The King of the Monsters, protector of Earth and balance of nature.",
    effectDescription:
      "Unleashes a destructive atomic breath to devastate a single target.",
    stats: { attack: 90, defense: 95, speed: 70 },
    frontImage: "/cards/godzilla-card-front.png",
    backImage: "/cards/godzilla-card-back.png",
    backgroundColor: "#1B2631",
    textColor: "#00BFFF",
    rarity: "legendary",
    setNumber: "MV-001",
    type: "Titan",
  },
  {
    id: 2,
    title: "Kong",
    description:
      "The ruler of Hollow Earth, a powerful and intelligent warrior.",
    effectDescription:
      "Uses his battle ax to deal massive damage and absorb energy attacks.",
    stats: { attack: 85, defense: 80, speed: 75 },
    frontImage: "/cards/kong-card-front.png",
    backImage: "/cards/kong-card-back.png",
    backgroundColor: "#6E2C00",
    textColor: "#FFD700",
    rarity: "legendary",
    setNumber: "MV-002",
    type: "Titan",
  },
  {
    id: 3,
    title: "King Ghidorah",
    description:
      "The alien destroyer, a three-headed dragon with unmatched power.",
    effectDescription:
      "Fires gravity beams from each head to attack multiple targets.",
    stats: { attack: 95, defense: 90, speed: 80 },
    frontImage: "/cards/king-ghidorah-card-front.png",
    backImage: "/cards/king-ghidorah-card-back.png",
    backgroundColor: "#2F4F4F",
    textColor: "#FFFFFF",
    rarity: "legendary",
    setNumber: "MV-004",
    type: "Titan",
  },
  {
    id: 4,
    title: "Male MUTO",
    description: "A sleek and agile kaiju capable of emitting EMP waves.",
    effectDescription:
      "Disables enemy abilities temporarily with a devastating EMP.",
    stats: { attack: 70, defense: 60, speed: 85 },
    frontImage: "/cards/male-muto-card-front.png",
    backImage: "/cards/male-muto-card-back.png",
    backgroundColor: "#2C3E50",
    textColor: "#E74C3C",
    rarity: "uncommon",
    setNumber: "MV-006",
    type: "Titan",
  },
];

const finalFantasyCards: CardType[] = [
  {
    id: 5,
    title: "Cloud Strife",
    description:
      "A legendary warrior, carrying the weight of destiny on his shoulders.",
    effectDescription: "Increases attack power when HP is low.",
    stats: { attack: 85, defense: 70, speed: 80 },
    frontImage: "/cards/cloud-card-front.png",
    backImage: "/cards/cloud-card-back.png",
    backgroundColor: "#4682B4",
    textColor: "#FFFFFF",
    rarity: "legendary",
    setNumber: "FF7-002",
    type: "Warrior",
  },
  {
    id: 6,
    title: "Vincent Valentine",
    description: "A rare sharpshooter shrouded in mystery and redemption.",
    effectDescription: "Can transform into a powerful beast.",
    stats: { attack: 75, defense: 60, speed: 75 },
    frontImage: "/cards/vincent-card-front.png",
    backImage: "/cards/vincent-card-back.png",
    backgroundColor: "#800000",
    textColor: "#FFFFFF",
    rarity: "rare",
    setNumber: "FF7-003",
    type: "Sharpshooter",
  },
  {
    id: 7,
    title: "Sephiroth",
    description: "A legendary swordsman, embodying pure power and darkness.",
    effectDescription: "Unleashes a devastating attack on all opponents.",
    stats: { attack: 95, defense: 85, speed: 90 },
    frontImage: "/cards/sephiroth-card-front.png",
    backImage: "/cards/sephiroth-card-back.png",
    backgroundColor: "#2F4F4F",
    textColor: "#FFFFFF",
    rarity: "legendary",
    setNumber: "FF7-001",
    type: "Warrior",
  },
];

const fishCards: CardType[] = [
  {
    id: 8,
    title: "Sarah Sanderson",
    description:
      "A whimsical witch who enchants with her hauntingly beautiful voice.",
    effectDescription: "Uses a mesmerizing song to lower enemy defenses.",
    stats: { attack: 60, defense: 50, speed: 75 },
    frontImage: "/cards/sarah-sanderson-card-front.png",
    backImage: "/cards/sarah-sanderson-card-back.png",
    backgroundColor: "#800080",
    textColor: "#FFFFFF",
    rarity: "rare",
    setNumber: "HP-002",
    type: "Support",
  },
  {
    id: 9,
    title: "Rose Dawson",
    description:
      "A courageous and compassionate survivor who inspires those around her.",
    effectDescription:
      "Grants allies a boost to resilience when health is low.",
    stats: { attack: 40, defense: 60, speed: 65 },
    frontImage: "/cards/rose-dawson-card-front.png",
    backImage: "/cards/rose-dawson-card-back.png",
    backgroundColor: "#4682B4",
    textColor: "#FFFFFF",
    rarity: "uncommon",
    setNumber: "TT-001",
    type: "Support",
  },
];

const kaidenCards: CardType[] = [
  {
    id: 10,
    title: "Michael Myers",
    description: "A relentless and unyielding force of terror.",
    effectDescription:
      "Immune to status effects and deals increased damage to vulnerable enemies.",
    stats: { attack: 90, defense: 85, speed: 60 },
    frontImage: "/cards/michael-myers-card-front.png",
    backImage: "/cards/michael-myers-card-back.png",
    backgroundColor: "#1C1C1C",
    textColor: "#FF0000",
    rarity: "legendary",
    setNumber: "HK-001",
    type: "Slasher",
  },
  {
    id: 11,
    title: "Corey Taylor",
    description: "The masked master of chaos and unbridled energy.",
    effectDescription:
      "Boosts allies' attack power with an ear-splitting battle cry.",
    stats: { attack: 75, defense: 70, speed: 85 },
    frontImage: "/cards/corey-taylor-card-front.png",
    backImage: "/cards/corey-taylor-card-back.png",
    backgroundColor: "#800000",
    textColor: "#FFFFFF",
    rarity: "rare",
    setNumber: "SK-001",
    type: "Performer",
  },
  {
    id: 12,
    title: "Spider-Ham",
    description:
      "A twisted parody of the web-slinging hero, with a dark and graphic edge.",
    effectDescription: "Confuses enemies with chaotic attacks and dark humor.",
    stats: { attack: 80, defense: 60, speed: 90 },
    frontImage: "/cards/spider-ham-card-front.png",
    backImage: "/cards/spider-ham-card-back.png",
    backgroundColor: "#FF4500",
    textColor: "#000000",
    rarity: "rare",
    setNumber: "SM-002",
    type: "Parody Hero",
  },
];

const deadByDaylightCards: CardType[] = [
  {
    id: 13,
    title: "The Doctor",
    description:
      "A sadistic tormentor from Léry’s Memorial Institute, skilled in breaking minds and spirits.",
    effectDescription:
      "Induces madness in Survivors, revealing their locations and impairing their actions.",
    stats: { attack: 85, defense: 70, speed: 60 },
    frontImage: "/cards/the-doctor-card-front.png",
    backImage: "/cards/the-doctor-card-back.png",
    backgroundColor: "#0D3B4A",
    textColor: "#F50087",
    rarity: "rare",
    setNumber: "DBD-002",
    type: "Killer",
  },
];

export const CardData: CardType[] = [
  ...deadByDaylightCards,
  ...monsterVerseCards,
  ...fishCards,
  ...kaidenCards,
  ...finalFantasyCards,
];

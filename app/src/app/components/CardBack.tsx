"use client";
import { Box, Divider, Typography } from "@mui/material";
import { CardType, getRarityStyles } from "./Card";

export const CardBack = ({ card }: { card: CardType }) => {
  const rarityStyles = getRarityStyles(card.rarity);

  return (
    <Box
      className="absolute inset-0 w-72 h-96 rounded-lg shadow-lg backface-hidden rotate-y-180"
      sx={{
        ...rarityStyles,
        backgroundColor: card.backgroundColor,
        color: card.textColor, // Use text color
        background: `url(${card.backImage || ""}) no-repeat center center`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "35%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: card.backgroundColor || "white",
          opacity: 0.8,
          zIndex: 10,
        }}
      >
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "white", fontSize: ".75rem" }}
          >
            {card.effectDescription}
          </Typography>
          <Divider
            sx={{ my: 1, backgroundColor: card.textColor, opacity: 0.5 }}
          />
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            Atk: {card.stats.attack}, Def: {card.stats.defense}, Spd:{" "}
            {card.stats.speed}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 4,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          px: 4,
          fontSize: "0.5rem",
          color: card.textColor,
        }}
      >
        <span>Rarity: {card.rarity}</span>
        <span>Set: {card.setNumber}</span>
      </Box>
    </Box>
  );
};

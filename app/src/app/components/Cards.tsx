"use client";

import { Box } from "@mui/material";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";
import { CardType } from "./Card";
import { CardBack } from "./CardBack";
import { CardFront } from "./CardFont";

export interface CardProps {
  card: CardType;
  isCenter: boolean;
  isFlipped: boolean;
  onClick: () => void;
}

export const Card = ({
  card,
  isCenter,
  isFlipped,
  onClick,
}: CardProps & MotionProps & HTMLAttributes<HTMLDivElement>) => (
  <Box onClick={isCenter ? onClick : undefined}>
    <motion.div
      initial={{
        scale: isCenter ? 1 : 0.8,
        opacity: isCenter ? 1 : 0.6,
      }}
      animate={{
        scale: isCenter ? 1 : 0.8,
        opacity: isCenter ? 1 : 0.6,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        // @ts-expect-error: className is used for styling purposes and is not recognized by motion.div typings
        className="relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <CardFront card={card} />
        <CardBack card={card} />
      </motion.div>
    </motion.div>
  </Box>
);

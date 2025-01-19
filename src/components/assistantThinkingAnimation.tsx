import React from "react";
import styles from "./styles.module.css";

export default function AssistantThinkingAnimation() {
  return (
    <div className={`${styles.bouncingBall} h-5 relative`}>
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="inline-block w-1 h-1 aspect-square rounded-full bg-secondary-foreground my-3 mx-0.5"
        />
      ))}
    </div>
  );
}

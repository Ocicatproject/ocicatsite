import React from "react";
import styles from "./RegularBelt.module.css";

const RegularBelt: React.FC = () => {
  return (
    <div className="relative flex w-full py-3 md:py-8 overflow-hidden bg-primary/80">
      <div className={"flex flex-row justify-between"}>
        {Array(15)
          .fill("$OCICAT")
          .map((text, index) => (
            <div className="font-bebas text-4xl mx-4 font-semibold text-background" key={index}>{text}</div>
          ))}
      </div>
    </div>
  );
};

export default RegularBelt;

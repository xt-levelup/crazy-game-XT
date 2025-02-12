import React from "react";
import Image from "next/image";
import main_background from "@/public/images/main-background.webp";

export default function MainBackground(): React.ReactElement {
  return (
    <div className="fixed inset-0 z-[-2]">
      <Image
        src={main_background}
        alt="Main background"
        fill
        style={{ objectFit: "cover" }}
        quality={75}
      />
    </div>
  );
}

import React from "react";
import Image from "next/image";
import main_background from "@/public/images/main-background.webp";

export default function MainBackground(): React.ReactElement {
  return (
    <Image
      src={main_background}
      alt="Main background"
      // layout="fill"
      fill //NextJs 13
      // objectFit="cover"
      style={{ objectFit: "cover" }} //NextJs 13
      quality={75}
      className="z-[-2]"
    />
  );
}

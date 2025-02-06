import Image from "next/image";
import main_background from "@/public/images/main-background.webp";

export default function MainBackground(): React.ReactElement {
  return (
    <Image
      src={main_background}
      alt="Main background"
      layout="fill"
      objectFit="cover"
      quality={100}
      className="z-[-2]"
    />
  );
}

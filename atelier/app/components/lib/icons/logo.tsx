import Image from "next/image";
import logo from "@/public/assets/icons/Andrews_Logo_N.png";

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return <Image src={logo} alt="logo andrews" width={0} height={0} />;
}

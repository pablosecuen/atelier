import clsx from "clsx";
import LogoIcon from "./lib/icons/logo";

export default function LogoSquare({
  size,
}: {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | undefined;
}) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center border border-none bg-transparent ",
        {
          "h-[40px] w-[40px] rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
          "h-[50px] w-[50px] rounded-lg": size === "md",
          "h-[60px] w-[60px] rounded-lg": size === "lg",
          "h-[80px] w-[80px] rounded-lg": size === "xl",
          "h-[100px] w-[100px] rounded-lg": size === "2xl",
          "h-[60px] w-[120px] rounded-lg": size === "3xl",
          "h-[90px] w-[180px] rounded-lg": size === "4xl",
        }
      )}
    >
      <LogoIcon
        className={clsx({
          "h-[16px] w-[16px]": !size,
          "h-[10px] w-[10px]": size === "sm",
          "h-[20px] w-[20px]": size === "md",
          "h-[30px] w-[30px]": size === "lg",
          "h-[40px] w-[40px]": size === "xl",
          "h-[50px] w-[50px]": size === "2xl",
          "h-[60px] w-[120px]": size === "3xl",
          "h-[90px] w-[180px]": size === "4xl",
        })}
      />
    </div>
  );
}

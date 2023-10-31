import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  price,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  price: string | number;
  currencyCode?: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex  w-full px-4 pb-4 font-atlas-grotesk-regular @container/label",
        {
          "lg:px-20 lg:pb-[35%]": position === "center",
        }
      )}
    >
      <div className="flex items-center  justify-between  w-full bg-transparent !font-atlas-grotesk-regular p-1 text-xs font-semibold text-black  dark:border-neutral-800 dark:bg-white dark:text-black">
        <h3 className="mr-4 line-clamp-2 rounded-full p-1  w-auto  pl-2 leading-none  text-black k">
          {title}
        </h3>
        <Price
          className="flex-none rounded-full p-1  text-black"
          price={price}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;

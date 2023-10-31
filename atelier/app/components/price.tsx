import clsx from "clsx";

const Price = ({
  price,
}: {
  price: string | number;
  className?: string;
  currencyCode?: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => (
  <p
    suppressHydrationWarning={true}
    className="rounded-full border-2 bg-white py-1 px-2 border-black/10"
  >
    $ {price}
    <span className={clsx("ml-1 inline ")}></span>
  </p>
);

export default Price;

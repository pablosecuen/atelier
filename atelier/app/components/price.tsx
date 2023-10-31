import clsx from "clsx";

const Price = ({
  price,
}: {
  price: string | number;
  className?: string;
  currencyCode?: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => (
  <p suppressHydrationWarning={true}>
    $ {price}
    <span className={clsx("ml-1 inline")}></span>
  </p>
);

export default Price;

import clsx from "clsx";

const Price = ({
  price,
  className,
  currencyCodeClassName,
}: {
  price: string | number;
  className?: string;
  currencyCode?: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => (
  <p suppressHydrationWarning={true} className={className}>
    $ {price}
    <span className={clsx("ml-1 inline", currencyCodeClassName)}></span>
  </p>
);

export default Price;

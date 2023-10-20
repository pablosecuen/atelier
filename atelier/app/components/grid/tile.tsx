import clsx from "clsx";
import Image from "next/image";
import Label from "../label";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    price: string | number;
    title: string;
    currencyCode?: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        "group flex w-full h-full min-h-full items-center justify-center overflow-hidden rounded-lg border-2  hover:border-primario ",
        {
          relative: label,
          "border-3 border-primario": active,
          "border-neutral-200 dark:border-terciario": !active,
        }
      )}
    >
      {props.src ? (
        // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
        <Image
          className={clsx("relative h-full w-full object-contain", {
            "transition duration-300 ease-in-out group-hover:scale-105": isInteractive,
          })}
          src={props.src as string} // Aquí pasa la URL de la imagen directamente
          alt={props.alt || "alternative text"} // También puedes proporcionar un valor de alternativa
          width={props.width || 0}
          height={props.height || 0}
        />
      ) : null}
      {label ? <Label title={label.title} price={label.price} position={label.position} /> : null}
    </div>
  );
}

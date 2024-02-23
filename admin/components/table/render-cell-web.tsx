import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";

import { AddProduct } from "../products/add-product";
import { ProductWeb } from "@/store/zustand";
import { Switch } from "../button/switch/switch";
import { DeleteProduct } from "../products/delete-product";
import { EditProduct } from "../products/edit-product";
import { EyeIcon } from "../icons/table/eye-icon";

interface Props {
  product: ProductWeb;
  columnKey: string | React.Key;
}

export const RenderCellWeb = ({ product, columnKey }: Props) => {

  // @ts-ignore
  const cellValue = product[columnKey];
  switch (columnKey) {
    case "title":
      return (
        <User
          avatarProps={{
            src: product.imagesURL[0],
          }}
          name={cellValue}
          className="capitalize"
        >
          {product.title}
        </User>
      );

    case "availableForSale":
      return (
        <div className="flex items-center justify-between w-32  ">
          {" "}
          <Chip
            size="sm"
            variant="flat"
            color={cellValue === true ? "success" : cellValue === false ? "danger" : "warning"}
          >
            <span className="capitalize text-xs">{cellValue ? `en web` : "pausado"}</span>
          </Chip>
          <Switch productId={product.id} isAvailable={product.availableForSale} />
        </div>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Detalles de producto" color="default">
              <EyeIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Editar producto" color="secondary">
              <EditProduct product={product} />
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Borrar producto" color="danger">
              <DeleteProduct productId={product.id} />
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};

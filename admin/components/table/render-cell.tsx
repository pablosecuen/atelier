import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";

import { AddProduct } from "../products/add-product";
import { ProductApi } from "@/store/zustand";

interface Props {
  product: ProductApi;
  columnKey: string | React.Key;
}

export const RenderCell = ({ product, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = product[columnKey];
  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={cellValue}
        >
          {product.SKU}
        </User>
      );

    case "status":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={cellValue === "active" ? "success" : cellValue === "paused" ? "danger" : "warning"}
        >
          <span className="capitalize text-xs">{cellValue || "No definido"}</span>
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Agregar a web" color="secondary">
              <AddProduct product={product} />
            </Tooltip>
          </div>
          {/*  <div>
            <Tooltip content="Edit product" color="secondary">
              <button onClick={() => console.log("Edit product", product.SKU)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div> */}
        </div>
      );
    default:
      return cellValue;
  }
};

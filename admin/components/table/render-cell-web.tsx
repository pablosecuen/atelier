import { User, Tooltip, Chip } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";

import { AddProduct } from "../products/add-product";
import { ProductWeb } from "@/store/zustand";

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

    case "status":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={cellValue === "status" ? "success" : cellValue === "paused" ? "danger" : "warning"}
        >
          <span className="capitalize text-xs">{cellValue}</span>
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details"></Tooltip>
          </div>
          <div>
            <Tooltip content="Edit product" color="secondary">
              <button onClick={() => console.log("Edit product", product)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              content="Delete product"
              color="danger"
              onClick={() => console.log("Delete product", product.SKU)}
            >
              <button>
                <DeleteIcon size={20} fill="#FF0080" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};

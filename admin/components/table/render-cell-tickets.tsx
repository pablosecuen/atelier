import { Tooltip, Chip, User } from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "../icons/table/delete-icon";
import { EditIcon } from "../icons/table/edit-icon";
import { Ticket } from "@/store/zustand";
import { EyeIcon } from "../icons/table/eye-icon";

interface Props {
  ticket: Ticket;
  columnKey: string | React.Key;
}

export const RenderCellTickets = ({ ticket, columnKey }: Props) => {
  console.log(ticket);

  const payerName = ticket.payer ? ticket.payer.first_name + ticket.payer.last_name : "";

  // @ts-ignore
  const cellValue = ticket[columnKey];
  switch (columnKey) {
    case "payer":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={payerName}
        >
          {payerName}
        </User>
      );

    case "status":
      return (
        <div className="flex items-center justify-between w-32  ">
          {" "}
          <Chip
            size="sm"
            variant="flat"
            color={
              cellValue === "approved" ? "success" : cellValue !== "approved" ? "danger" : "warning"
            }
          >
            <span className="capitalize text-xs">{cellValue}</span>
          </Chip>
        </div>
      );

    case "items":
      // Extraer la cantidad de items del ticket
      const itemCount = ticket.items ? ticket.items.length : 0;
      return <span>{itemCount} items</span>;

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <Tooltip content="Detalles" color="secondary">
            <button onClick={() => console.log("ver ticket", ticket)}>
              <EyeIcon size={20} fill="#979797" />
            </button>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};

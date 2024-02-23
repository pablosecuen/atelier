import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import { columnsTicket } from "./data";
import { RenderCellTickets } from "./render-cell-tickets";
import { Ticket } from "@/store/zustand";
import { Toaster } from "sonner";

interface TableWrapperProps {
  tickets?: Ticket[];
}

export const TableWrapperTickets: React.FC<TableWrapperProps> = ({ tickets }) => {


  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columnsTicket}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={tickets}>
          {(item: any) => (
            <TableRow key={item.SKU}>
              {(columnKey) => (
                <TableCell>{RenderCellTickets({ ticket: item, columnKey: columnKey })}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

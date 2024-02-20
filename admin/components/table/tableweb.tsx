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
import { columnsWeb } from "./data";
import { ProductWeb } from "@/store/zustand";
import { RenderCellWeb } from "./render-cell-web";

interface TableWrapperProps {
  products?: ProductWeb[];
}

export const TableWrapperWeb: React.FC<TableWrapperProps> = ({ products }) => {
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columnsWeb}>
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
        <TableBody items={products}>
          {(item: any) => (
            <TableRow key={item.SKU}>
              {(columnKey) => (
                <TableCell>{RenderCellWeb({ product: item, columnKey: columnKey })}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

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
import { columns } from "./data";
import { RenderCell } from "./render-cell";
import { ProductApi } from "@/store/zustand";
import { Toaster } from "sonner";

interface TableWrapperProps {
  products?: ProductApi[];
}

export const TableWrapper: React.FC<TableWrapperProps> = ({ products }) => {
  return (
    <div className=" w-full flex flex-col gap-4">
    
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
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
                <TableCell>{RenderCell({ product: item, columnKey: columnKey })}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

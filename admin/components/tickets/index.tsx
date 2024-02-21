"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ExportIcon } from "@/components/icons/accounts/export-icon";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import useGlobalStore, { Ticket, fetchTicketsDB } from "@/store/zustand";
import { TableWrapperTickets } from "../table/tabletickets";
import * as XLSX from "xlsx";
import { ProductsIcon } from "../icons/sidebar/products-icon";

export const Tickets = () => {
  const setTicketProducts = useGlobalStore((state) => state.setTicketProducts);
  const tickets = useGlobalStore((state) => state.tickets);
  const [ticketFilter, setTicketFilter] = useState<string>("");

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await fetchTicketsDB();

        setTicketProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchTickets();
  }, [setTicketProducts]);

  const filteredTickets = tickets?.filter((ticket: Ticket) => {
    const { payer, status, transaction_amount, shipments } = ticket;
    const searchLowerCase = ticketFilter.toLowerCase();

    const match =
      payer.first_name?.toString().toLowerCase().includes(searchLowerCase) ||
      payer.last_name?.toString().toLowerCase().includes(searchLowerCase) ||
      status?.toString().toLowerCase().includes(searchLowerCase) ||
      transaction_amount?.toString().toLowerCase().includes(searchLowerCase);

    return match;
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredTickets);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Tickets");
    XLSX.writeFile(workbook, "tickets.xlsx");
  };

  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <ProductsIcon />
          <span>Tickets</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>List</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los tickets</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Buscar Tickets"
            value={ticketFilter}
            onChange={(e) => setTicketFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Button color="primary" startContent={<ExportIcon />} onPress={exportToExcel}>
            Export to CSV
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapperTickets tickets={filteredTickets} />
      </div>
    </div>
  );
};

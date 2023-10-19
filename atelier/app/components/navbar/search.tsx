"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "../lib/utils";
import ModalSearch from "./modal-search";
import { products } from "@/app/api/fakedb";
import { useEffect, useRef, useState } from "react";
import { Product } from "@/app/types/general";
export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/shop", newParams));
  }

  useEffect(() => {
    if (searchText.trim() !== "") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [searchText]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    function handleScroll(event: Event) {
      if (showModal) {
        setShowModal(false);
      }
    }
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape" && showModal) {
        setShowModal(false);
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("keydown", handleKeyPress);
      document.addEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  function handleSearch(e: any) {
    const inputText = e.target.value.toLowerCase().trim();
    setSearchText(e.target.value);
    setShowModal(true);
    if (inputText === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.handle.toLowerCase().includes(inputText)
      );
      setFilteredProducts(filtered);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <form onSubmit={onSubmit} className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        type="text"
        name="search"
        placeholder="Buscar productos..."
        autoComplete="off"
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-400 dark:bg-transparent dark:text-black dark:placeholder:text-black"
        onChange={handleSearch}
        value={searchText}
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
      <div
        ref={modalRef}
        className={`absolute top-12 left-0 w-full  transform transition-transform duration-1000 modal-height-transition ${
          showModal
            ? "transform  -translate-y-[0] h-full"
            : " transform  translate-y-[-1000px] h-10"
        } opacity-0 transition-opacity duration-1000 ${showModal ? "opacity-100" : "opacity-0"}`}
      >
        {showModal && filteredProducts.length > 0 && (
          <ModalSearch closeModal={closeModal} products={filteredProducts} />
        )}
      </div>
    </form>
  );
}

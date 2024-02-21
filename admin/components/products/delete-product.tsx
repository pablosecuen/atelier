/* eslint-disable @next/next/no-img-element */
// Asegúrate de importar la interfaz FormData si no lo has hecho ya
import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { DeleteIcon } from "../icons/table/delete-icon";
import useGlobalStore from "@/store/zustand";

interface AddProductProps {
  productId: any;
}
export const DeleteProduct = ({ productId }: AddProductProps) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const { deleteProduct } = useGlobalStore(); // Importar la acción deleteProduct

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      deleteProduct(productId);
      onClose();
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div>
      <button onClick={onOpen} color="primary">
        <DeleteIcon size={20} fill="#FF0080" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <form onSubmit={handleSubmit}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Borrar de la a Web</ModalHeader>
                <ModalBody>
                  <label>Seguro desea eliminar el producto de la base de datos?</label>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" type="submit">
                    Borrar Producto
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </div>
  );
};

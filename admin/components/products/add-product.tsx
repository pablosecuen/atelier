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
import axios from "axios";
import { ProductApi } from "@/store/zustand";
import { EditIcon } from "../icons/table/edit-icon";
import { toast } from "sonner";

interface FormData {
  title: string;
  size: string;
  color: string;
  category: string;
  quantity: any;
  description: string;
}
interface AddProductProps {
  product: ProductApi;
}
export const AddProduct = ({ product }: AddProductProps) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("product", JSON.stringify(product));
      selectedImages.forEach((file, index) => {
        formDataToSend.append(`images`, file, file.name);
      });

      const response = await axios.post(
        "https://wrong-eggnog-production.up.railway.app/api/products/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Formulario enviado correctamente");

        onClose();
      }
    } catch (error: any) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const selectedFiles = Array.from(files);
      setSelectedImages(selectedFiles);
    }
  };

  return (
    <div>
      <button onClick={onOpen} color="primary">
        <EditIcon size={20} fill="#2ab408" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Agregar a Web</ModalHeader>
                <ModalBody>
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    name="images"
                    accept="image/*"
                  />
                  <div className="flex gap-2">
                    {selectedImages.map((image, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index}`}
                        className="max-w-10"
                      />
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" type="submit">
                    Agregar Producto
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

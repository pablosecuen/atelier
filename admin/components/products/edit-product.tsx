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
import { ProductWeb } from "@/store/zustand";
import { EditIcon } from "../icons/table/edit-icon";
import { useRouter } from "next/navigation";

interface FormData {
  imagesURL: string[];
  title: string;
  size: string | undefined;
  color: string | undefined;
  category: string;
  quantity: any;
  description: string;
}
interface AddProductProps {
  product: ProductWeb;
}
export const EditProduct = ({ product }: AddProductProps) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imgFile, setImgFile] = useState<File[]>([]);
  const [formData, setFormData] = useState<FormData>({
    imagesURL: product.imagesURL,
    title: product.title,
    size: product.size,
    description: product.description,
    color: product.color,
    category: product.category,
    quantity: product.stock,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      formDataToSend.append("title", formData.title || "");
      formDataToSend.append("size", formData.size || "");
      formDataToSend.append("description", formData.description || "");
      formDataToSend.append("color", formData.color || "");
      formDataToSend.append("category", formData.category || "");
      formDataToSend.append("quantity", formData.quantity || "");
      formDataToSend.append("stock", formData.quantity || "");
      formDataToSend.append("StyleName", product.StyleName || "");
      formDataToSend.append("SKU", product.SKU || "");
      formDataToSend.append("UPC", product.UPC || "");
      formDataToSend.append("RetailPrice", product.RetailPrice || "");
      formDataToSend.append("GetPercentOff", product.GetPercentOff || "");
      formDataToSend.append("PromoPrice", product.promoPrice || "");
      formDataToSend.append("StockQty", formData.quantity || "");

      selectedImages.forEach((file, index) => {
        formDataToSend.append(`images`, file, file.name);
      });

      const response = await axios.put(
        `http://localhost:3000/api/products/update/${product.id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Formulario enviado correctamente");
        setFormData({
          title: "",
          size: "",
          description: "",
          color: "",
          category: "",
          quantity: "",
          imagesURL: [],
        });
        onClose();
        router.refresh();
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
        <EditIcon size={20} fill="#979797" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Agregar a Web</ModalHeader>
                <ModalBody>
                  <Input
                    label="Titulo"
                    name="title"
                    variant="bordered"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <Input
                    label="Descripcion"
                    name="description"
                    variant="bordered"
                    value={formData.description}
                    onChange={handleChange}
                  />

                  <Input
                    label="color"
                    name="color"
                    variant="bordered"
                    value={formData.color}
                    onChange={handleChange}
                  />

                  <Input
                    label="talle"
                    name="size"
                    variant="bordered"
                    value={formData.size}
                    onChange={handleChange}
                  />

                  <Input
                    label="categoria"
                    name="category"
                    variant="bordered"
                    value={formData.category}
                    onChange={handleChange}
                  />

                  <Input
                    label="Cantidad"
                    variant="bordered"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                  />

                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    name="images"
                    accept="image/*"
                  />
                  <div className="flex gap-2">
                    {formData.imagesURL.map((image: string, index: number) => (
                      <img key={index} src={image} alt={`Image ${index}`} className="max-w-10" />
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

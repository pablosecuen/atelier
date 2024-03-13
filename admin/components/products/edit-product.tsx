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
  Desc1: string;
  SizeCode: string | undefined;
  ColorName: string | undefined;
  DeptName: string;
  OnHandQty: any;
  Desc2: string;
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
    Desc1: product.Desc1,
    SizeCode: product.SizeCode,
    Desc2: product.Desc2,
    ColorName: product.ColorName,
    DeptName: product.DeptName,
    OnHandQty: product.OnHandQty,
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

      formDataToSend.append("title", formData.Desc1 || "");
      formDataToSend.append("size", formData.SizeCode || "");
      formDataToSend.append("description", formData.Desc2 || "");
      formDataToSend.append("color", formData.ColorName || "");
      formDataToSend.append("category", formData.DeptName || "");
      formDataToSend.append("quantity", formData.OnHandQty || "");
      formDataToSend.append("stock", formData.OnHandQty || "");
      formDataToSend.append("StyleName", product.StyleName || "");
      formDataToSend.append("SKU", product.SKU || "");
      formDataToSend.append("UPC", product.UPC || "");
      formDataToSend.append("RetailPrice", product.RetailPrice || "");
      formDataToSend.append("GetPercentOff", product.GetPercentOff || "");
      formDataToSend.append("PromoPrice", product.promoPrice || "");
      formDataToSend.append("StockQty", formData.OnHandQty || "");

      selectedImages.forEach((file, index) => {
        formDataToSend.append(`images`, file, file.name);
      });

      const response = await axios.put(
        `https://wrong-eggnog-production.up.railway.app/api/products/update/${product.id}`,
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
          Desc1: "",
          SizeCode: "",
          Desc2: "",
          ColorName: "",
          DeptName: "",
          OnHandQty: "",
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
                    label="Nombre"
                    name="Desc1"
                    variant="bordered"
                    value={formData.Desc1}
                    onChange={handleChange}
                  />
                  <Input
                    label="Descripcion"
                    name="Desc2"
                    variant="bordered"
                    value={formData.Desc2}
                    onChange={handleChange}
                  />

                  <Input
                    label="Color"
                    name="ColorName"
                    variant="bordered"
                    value={formData.ColorName}
                    onChange={handleChange}
                  />

                  <Input
                    label="Talle"
                    name="SizeCode"
                    variant="bordered"
                    value={formData.SizeCode}
                    onChange={handleChange}
                  />

                  <Input
                    label="Categoria"
                    name="DeptName"
                    variant="bordered"
                    value={formData.DeptName}
                    onChange={handleChange}
                  />

                  <Input
                    label="Stock"
                    variant="bordered"
                    name="OnHandQty"
                    value={formData.OnHandQty}
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

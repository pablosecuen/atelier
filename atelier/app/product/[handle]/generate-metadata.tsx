import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { listProducts } from "@/app/redux/actions/productActions";

interface GenerateMetadataProps {
  handle: string;
}

const GenerateMetadata: React.FC<GenerateMetadataProps> = ({ handle }) => {
  const dispatch: AppDispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
 

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const product = products?.find((p) => p.handle === handle);

  if (!product) {
    return (
      <>
        <title>Not Found</title>
        <meta name="description" content="The product could not be found." />
      </>
    );
  }

  const { url, width, height, alt } = product.featuredImage || {};
  const indexable = !product.category;

  return (
    <>
      <title>{product.seo.title || product.title}</title>
      <meta name="description" content={product.seo.description || product.description} />
      <meta name="robots" content={`index=${indexable}, follow=${indexable}`} />
      <meta name="googleBot" content={`index=${indexable}, follow=${indexable}`} />
      {url && <meta property="og:image" content={url} />}
    </>
  );
};

export default GenerateMetadata;

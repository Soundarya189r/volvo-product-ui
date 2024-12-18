import React, {useState } from "react";
import { CarList, ProductDetails } from "../../../pages";
import styles from "./styles.module.css";
import { TextInput } from "vcc-ui";
import ChevronContainer from "../chevron-container/ChevronContainer";
import CarDetails from "../car-details/CarDetails";
import MobileCarousel from "../mobile-carousel/MobileCarousel";
import useCheckDevice from "../use-hooks/useCheckDevice";

/**
 * 
 * @param products 
 * @returns 
 */
const ProductSlider = ({ products }: CarList): JSX.Element => {
  const [startIndex, setStartIndex] = useState(0);
  const [bodyType, setBodyType] = useState("");
  const { deviceType } = useCheckDevice();

  const handleChevronLeft = (): void => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleChevronRight = (): void => {
    if (startIndex + 3 < filterCars.length) {
      {
        setStartIndex(startIndex + 1);
      }
    }
  };

  const handleCarousel = (index: number) => {
    setStartIndex(index);
  };
  // filter products based on the screens and bodyType inputText
  const getUpdatedProducts =(products: ProductDetails[])=>{
    if(deviceType === "mobile")
    {
      return products.slice(startIndex, startIndex + 1)
    }
    else{
      if(products.length < 3){
        return products
       }
       if(startIndex + 3 > products.length - 1){
       return products.slice(products.length - 3, products.length)
       }
       return products.slice(startIndex, startIndex + 3)
    }
  }
 
// filters based on the bodyType input added
const filterCars = products.filter((product) =>
  product.bodyType.includes(bodyType)
);

// updated products
const updatedProducts = filterCars ? getUpdatedProducts(filterCars) :getUpdatedProducts(products)

  return (
    <>
      <TextInput
        label="bodyType"
        id="body-type"
        aria-labelledby="bodyTypeLabel"
        value={bodyType}
        onChange={(e) =>  setBodyType(e.target.value)}
        style={{ width: "40vh" }}
      ></TextInput>
      <div className={styles.productSlider} id="product-slider">
        {updatedProducts.map((product, index) => (
          <div className={styles.productColumn} key={index}>
            <CarDetails product={product} />
            {deviceType === "mobile" && (
              <MobileCarousel
                products={filterCars? filterCars : products}
                handleCarousel={handleCarousel}
              />
            )}
          </div>
        ))}
      </div>
      {deviceType === "desktop" && (
        <ChevronContainer
          handleChevronLeft={handleChevronLeft}
          handleChevronRight={handleChevronRight}
        />
      )}
    </>
  );
};

export default ProductSlider;

import React from "react";
import ProductSlider from "../src/components/product-slider/ProductSlider";

export interface ProductDetails {
    id: string,
    modelType: string,
    modelName : string,
    bodyType : string,
    imageUrl : string
}

export interface CarList{
    products: ProductDetails[]
}


const DisplayProducts = ( {products} : CarList ) => {
    return (
        <>
           <ProductSlider products={products} />
        </>
    )

}

export const getServerSideProps = async () => {

    const response = await fetch("http://localhost:3000/api/cars.json")
    const products = await response.json();

    return {
        props: {
            products
        }
    }
}

export default DisplayProducts
import { Flex, Text } from "vcc-ui";
import styles from "./carousel.module.css";
import { ProductDetails } from "../../../pages";

/**
 * Caters for displaying the carousel in mobile resolution
 * @param props 
 * @returns 
 */
const MobileCarousel = (props: {
  products: ProductDetails[];
  handleCarousel: (index: number) => void;
}) : JSX.Element=> {
  const {products, handleCarousel } = props;
  return (
    <Flex
      className={styles.carouselWrapper}
      role="group"
      aria-label="carousel navigation"
    >
        {
        products.map((_, index) => {
          return (
            <Text
              role="radio"
              key={index}
              className={styles.carouselIndicators}
              onClick={() => handleCarousel(index)}
            >
              &#9679;
            </Text>
          );
        })}
    </Flex>
  );
};

export default MobileCarousel;
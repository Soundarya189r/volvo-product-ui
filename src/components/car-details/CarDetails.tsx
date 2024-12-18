import Image from "next/image";
import { Flex, Text } from "vcc-ui";
import { ProductDetails } from "../../../pages";
import Link from "next/link";
import ChevronSmall from "../../../docs/chevron-small.svg";
import styles from './details.module.css'

/**
 * CarDetails displays the bodyType,modelName, image and provides Links to navigate Learn and Shope
 * @param props 
 * @returns 
 */
const CarDetails = (props: { product: ProductDetails }) => {
  const { product } = props;

  return (
    <>
      <Text>{product.bodyType}</Text>
      <Text>
        <b>{product.modelName}</b>
        &nbsp;
        {product.modelType}
      </Text>
      <div>
      <Image
        src={product.imageUrl}
        width="100%"
        height="100%"
        layout="responsive"
        priority
      />
      </div>
      <Flex
       className={styles.buttonWrapper}
      >
        <Link href={`/${product.id}/learn`}
        role="link"
        aria-label="Go to Learn Page"
        >
          <a className={styles.alignButton}>
          <Text className={styles.buttonLabel}>LEARN</Text>
          <Image src={ChevronSmall} height="18px" width="18px" />
          </a>
        </Link>
        <Link href={`/${product.id}/shop`}
        role="link"
        aria-label="Go to Shop Page"
        >
          <a className={styles.alignButton}>
            <Text className={styles.buttonLabel}>SHOP</Text>
            <Image src={ChevronSmall} height="18px" width="18px" />
          </a>
        </Link>
      </Flex>
    </>
  );
};

export default CarDetails;

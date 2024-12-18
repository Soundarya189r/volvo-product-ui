import { Flex, IconButton } from "vcc-ui";
import styles from "./chevron.module.css";

type ChevronProps = {
  handleChevronLeft: () => void;
  handleChevronRight: () => void;
};

/**
 * ChevronContainer provides the forward, back button to navigate the Product Cards.
 */
const ChevronContainer = (props: ChevronProps) => {
  const { handleChevronLeft, handleChevronRight } = props;
  return (
    <Flex
      className={styles.chevronContainer}
      id="chevron-container"
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      <IconButton
        iconName="navigation-chevronback"
        onClick={handleChevronLeft}
        variant="outline"
        aria-label="Previous slide"
      />
      <IconButton
        iconName="navigation-chevronforward"
        onClick={handleChevronRight}
        variant="outline"
        aria-label="Next slide"
      />
    </Flex>
  );
};

export default ChevronContainer;

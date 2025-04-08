import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import "./AccordionContainer.css";

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

function Accordion({ children, multiple}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive = activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

function AccordionItem({ children }) {
  return <div className="accordionItem">{children}</div>;
}

function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`accordionHeader ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
      {isActive ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
    </motion.div>
  );
}

function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className="accordionPanel">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const AccordionContainer = ({ title, accordItem }) => {
  return (
    <div className="accordion">
      <h2 className="accordionTitle">{title}</h2>
      <Accordion>
        {accordItem &&
          accordItem.map((item, i) => (
            <AccordionItem key={i}>
              <AccordionHeader>{item.title}</AccordionHeader>
              <AccordionPanel>
                <div className="info">
                  <div>{item.name}</div>
                  <div>{item.data}</div>
                </div>

                <div className="text">{item.text}</div>
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>

      <br />
    </div>
  );
};
export default AccordionContainer;

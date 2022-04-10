import { Center, HStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [select, setSelect] = useState(0);
  const avatars = ["1", "2", "3", "4", "5"];

  const variants = {
    normal: { opacity: 1, x: "0", y: "0" },
    big: {
      opacity: 1,
      position: "absolute",
      left: 200,
      top: 300,
    },
  };

  return (
    <div className="App">
      <Center mt="5rem">
        <HStack spacing="3rem" shadow="md">
          {avatars.map((number, index) => (
            <AnimatePresence>
              <motion.div
                key={number}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                animate={select === number ? "big" : "normal"}
                variants={variants}
                onClick={() => setSelect(number)}
                transition={{
                  duration: 0.6,
                }}
                exit={{ y: "-100px", x: "300px" }}
              >
                <motion.img
                  src={number + ".jpg"}
                  style={{
                    width: "128px",
                    height: "128px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          ))}
        </HStack>
      </Center>
    </div>
  );
}

export default App;

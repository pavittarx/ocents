import { motion } from "framer-motion";
import styled from "styled-components";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 50px 100fr;
  max-width: 500px;
  background: #f6f6f6;
`;

export default ({ children }) => {
  return <Grid>{children}</Grid>;
};

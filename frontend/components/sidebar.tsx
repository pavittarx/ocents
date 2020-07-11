import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import {
  UpdateIcon,
  DiscussionIcon,
  ChevronLeft,
  ChevronRight,
} from "@/components/icons";

const Sidebar = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1;

  background: #fff;
  padding-left: 3px;

  z-index: 2;

  display: flex;
  flex-direction: column;

  .toggle-container,
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
  }

  .toggle-container {
    padding-right: ${(props) => (!props.toggle ? 0 : "15px")};
    align-items: ${(props) => (!props.toggle ? "center" : "flex-end")};
  }
`;

const Button = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-items: center;

  padding: 10px 15px;
  margin-top: 2.5px;
  border-radius: 20px;
  width: 150px;

  &:hover {
    background: rgba(2, 2, 2, 0.75);
    color: #fff;
  }

  span {
    margin-left: 15px;
  }
`;

export default () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Sidebar
      toggle={toggle}
      initial={{
        width: 50,
        overflowX: "hidden",
      }}
      animate={{
        width: toggle ? 400 : 50,
      }}
    >
      <motion.div
        className="toggle-container"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {!toggle ? <ChevronRight /> : <ChevronLeft />}
      </motion.div>

      <motion.div className="button-container">
        <Button>
          <UpdateIcon /> <span> Updates </span>
        </Button>
        <Button>
          <DiscussionIcon /> <span> Discussions </span>
        </Button>
      </motion.div>
    </Sidebar>
  );
};

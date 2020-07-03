import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import TopBar from "@/components/topbar";
import SideBar from "@/components/sidebar";
import Grid from "@/containers/grid";

const Main = styled(motion.div)`
  grid-column: 2/6;
  grid-row: 2/3;
  padding: 13px 15px;

  .event-container {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    line-height: 1.1;
    box-shadow: inset 0 0 2px 1px rgb(218, 214, 214);
    opacity: 0.75;

    header {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    main {
      min-height: 100px;
    }
  }
`;

export default () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Grid>
      <TopBar />
      <SideBar />
      <Main>
        <section className="event-container">
          <header>title of the event</header>
          <main>
            It 
          </main>
        </section>
      </Main>
    </Grid>
  );
};

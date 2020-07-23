import { getEvent, getEvents } from "@/graphql/queries";
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
    padding: 20px;
    margin: 5px;
    /* border-radius: 10px;
    line-height: 1.1;
    box-shadow: inset 0 0 2px 1px rgb(218, 214, 214);
    opacity: 0.75; */

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 16px;

    header {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    main {
      min-height: 100px;
    }
  }

  .buttons-container {
    margin: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: space-between;
  }
`;

const EventButton = styled(motion.div)`
  background: #fff;
  display: inline-block;
  min-width: 60px;
  padding: 10px;
`;

export default ({ event }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Grid>
      <TopBar />
      <SideBar />
      <Main>
        <section className="event-container">
          <header>{event.title}</header>
          <main>{event.content}</main>
        </section>

        <motion.div className="buttons-container">
          <EventButton>
            <motion.span> 999 </motion.span>
          </EventButton>
          <EventButton></EventButton>
          <EventButton></EventButton>
        </motion.div>
      </Main>
    </Grid>
  );
};

export const getStaticPaths = async () => {
  const events = await getEvents();
  return {
    paths: events.map((event) => ({
      params: { id: event.id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const event = await getEvent(Number(params.id));
  console.log(event);
  return {
    props: {
      event,
    },
  };
};

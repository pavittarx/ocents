import Button from "@/components/button";
import {
  MenuIcon,
  CloseIcon,
  UpdateIcon,
  DiscussionIcon,
  SubscribeIcon,
} from "@/components/icons";
import style from "@/styles/pages/events.module.scss";

import { useState } from "react";

export default () => {
  let [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={style.topbar} onClick={()=> setToggle(!toggle)}>
        <Button>
          {!toggle? <MenuIcon /> : <CloseIcon />}
        </Button>
      </div>
      <div className={style.sidebar}>
        <div className={style.buttons}>
          <UpdateIcon /> <span> Updates </span>
        </div>
        <div className={style.buttons}>
          <DiscussionIcon /> <span> Discussions </span>
        </div>
        <div className={style.buttons}>
          <SubscribeIcon /> <span> Subscribe </span>
        </div>
      </div>
    </>
  );
};

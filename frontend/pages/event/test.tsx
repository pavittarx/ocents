import Button from "@/components/button";
import {
  MenuIcon,
  UpdateIcon,
  DiscussionIcon,
  SubscribeIcon,
} from "@/components/icons";
import style from "@/styles/pages/events.module.scss";

export default () => {
  return (
    <>
      <Button>
        <MenuIcon />
      </Button>
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

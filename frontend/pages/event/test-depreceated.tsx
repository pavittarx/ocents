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
import { motion, AnimatePresence } from "framer-motion";

// Sidebar as a component inside page
// function SideBar({ toggle }) {
  
//   return (
//     <motion.div
//       initial={{
//         width: 0,
//       }}
//       animate={{
//         width: toggle ? 500 : 50,
//       }}
//       transition={{
//         duration: toggle ? 1.5 : 0.5,
//       }}
//       className={style.sidebar}
//     >
//       <div className={style.buttons}>
//         <UpdateIcon /> <span> Updates </span>
//       </div>
//       <div className={style.buttons}>
//         <DiscussionIcon /> <span> Discussions </span>
//       </div>
//       <div className={style.buttons}>
//         <SubscribeIcon /> <span> Subscribe </span>
//       </div>
//     </motion.div>
//   );
// }



// export default () => {
//   let [toggle, setToggle] = useState(false);

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className={style.topbar}
//         onClick={() => setToggle(!toggle)}
//       >
//         <AnimatePresence>
//           <Button>{!toggle ? <MenuIcon /> : <CloseIcon />}</Button>
//         </AnimatePresence>
//       </motion.div>

//       <SideBar toggle={toggle} />
//     </>
//   );
// };
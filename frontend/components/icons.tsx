import { motion } from "framer-motion";

const variants = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
};

export function MenuIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon menu-icon"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variants}
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </motion.svg>
  );
}

export function CloseIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon close-icon"
      initial="hide"
      animate="show"
      exit="hide"
      variants={variants}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </motion.svg>
  );
}

export function SubscribeIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon subscribe-icon"
    >
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
    </motion.svg>
  );
}

export function DiscussionIcon() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon discussion-icon"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </motion.svg>
  );
}

export function UpdateIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon update-icon"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="16 12 12 8 8 12"></polyline>
      <line x1="12" y1="16" x2="12" y2="8"></line>
    </motion.svg>
  );
}

export function ChevronRight() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}

export function ChevronLeft() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </motion.svg>
  );
}

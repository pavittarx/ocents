import style from "@/styles/components.module.scss";

export default ({ children }) => {
  return (
    <>
      <div className={style.button}>{children}</div>
    </>
  );
};

import styles from "./Text.module.css";

interface Props {
  content: string;
  children: string;
}

const Text = (props: Props) => {
  return (
    <div className={styles.text}>
      {props.content} {props.children}
    </div>
  );
};
export default Text;

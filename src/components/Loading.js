import Spinner from "../assets/spinner.gif";
import styles from "../assets/Loading.module.css";

function Loading() {
  return <img className={styles.img} src={Spinner} alt="로딩중" />;
}
export default Loading;

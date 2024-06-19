import { useContext } from "react";
import { DataContext } from "../../App";
import styles from "./Component2B.module.css"; 

function Component2B() {
    let data = useContext(DataContext);
    return <div className={styles.container}>{data}</div>;
}

export default Component2B;

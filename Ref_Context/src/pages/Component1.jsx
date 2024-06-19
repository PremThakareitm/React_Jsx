import { useContext } from "react";
import { DataContext } from "../../App";
import styles from "./Component1.module.css"; 

function Component1() {
    let data = useContext(DataContext);
    return <div className={styles.container}>{data}</div>;
}

export default Component1;

import Component2B from "./Component2B";
import styles from "./Component2.module.css"; // Import your CSS module

function Component2() {
    return (
        <div className={styles.container}>
        <Component2B />
        </div>
    );
}

export default Component2;

import React, { useRef } from "react";
import styles from "./User.module.css";

function User() {
    const boxRef = useRef(null);

    function changeBoxColor() {
    if (boxRef.current) {
        boxRef.current.style.backgroundColor = "blue"; 
    }
    }

    return (
    <div ref={boxRef} className={styles.userBox}>
        <h1>Welcome</h1>
        <p>prem thakare</p>
        <button onClick={changeBoxColor}>Change Color</button>
    </div>
    );
}

export default User;

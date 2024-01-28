import React from 'react';
import styles from '../styles/MainForm.module.css'

const MainForm = () => {
    return (
        <form className={styles.mainForm}>
            <input type="text" className={styles.formInput} />
            <button type='reset' className={styles.formButton}>Reset</button>
        </form>
    );
};

export default MainForm;
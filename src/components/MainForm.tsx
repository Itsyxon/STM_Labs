import React, { useState } from 'react';
import styles from '../styles/MainForm.module.css'
import IUser from '../model/user';
import UserList from './UserList';

interface IUsers {
    users: IUser[]
}

const MainForm: React.FC<IUsers> = ({ users }) => {
    const [search, setSearch] = useState<string>('')

    return (
        <>
            <form className={styles.mainForm}>
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Поиск...' type="text" className={styles.formInput} />
                <button type='reset' className={styles.formButton}>Reset</button>
            </form>
            <UserList users={users} search={search} />
        </>
    );
};

export default MainForm;
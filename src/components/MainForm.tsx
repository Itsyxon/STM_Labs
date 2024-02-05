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
                <button type='reset' onClick={() => setSearch('')} className={styles.formButton}>Reset</button>
            </form>
            {
                users.length > 0 ? (
                    <UserList users={users} search={search} />
                ) : (
                    <h1>Ошибка загрузки пользователей</h1>
                )
            }
        </>
    );
};

export default MainForm;
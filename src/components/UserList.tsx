import React from 'react';
import IUser from '../model/user';
import styles from '../styles/UserList.module.css'

interface IUsers {
    users: IUser[]
}

const UserList: React.FC<IUsers> = ({ users }) => {
    return (
        <div className={styles.wrapper}>
            {users.map((user) => (
                <div>
                    <div className="avatar"></div>
                    <div className={styles.userCard}>
                        <div>{user.name.first} {user.name.last}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
import React from 'react';
import IUser from '../model/user';
import styles from '../styles/UserList.module.css'

interface IUsers {
    users: IUser[]
    search: string
}

const UserList: React.FC<IUsers> = ({ users, search }) => {
    return (
        <div className={styles.wrapper}>
            {users.filter((user) => {
                return search.toLowerCase() === '' ? user : (user.name.first.toLowerCase().includes(search.toLowerCase())) || (user.name.last.toLowerCase().includes(search.toLowerCase()))
            }).map((user, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.avatar}>
                        <img id={styles.tooltip} src={`${user.picture.large}`} alt="" />
                        <img src={`${user.picture.medium}`} alt="" />
                    </div>
                    <div>
                        <div className={styles.userName}>{user.name.first} {user.name.last}</div>
                        <div>{user.email}</div>
                        <div> &#9742; {user.phone}</div>
                        <div className={styles.location}>
                            &#128205; {user.location.state}, {user.location.city}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
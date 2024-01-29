import React from 'react';
import IUser from '../model/user';
import styles from '../styles/UserList.module.css'

interface IUsers {
    users: IUser[]
    search: string
}

const UserList: React.FC<IUsers> = ({ users, search }) => {
    return (
        <table className={styles.wrapper}>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th colSpan={2}>Email</th>
                    <th>Phone</th>
                    <th>State/City</th>
                </tr>
            </thead>
            {users.filter((user) => {

                return search.toLowerCase() === '' ?
                    user
                    :
                    (user.name.first.toLowerCase().includes(search.toLowerCase()))

            }).map((user, index) =>
                <tbody key={index}>
                    <tr>
                        <td><div className={styles.avatar}>
                            <img id={styles.tooltip} src={`${user.picture.large}`} alt="" />
                            <img src={`${user.picture.medium}`} alt="" /></div></td>
                        <td>{user.name.first}</td>
                        <td>{user.name.last}</td>
                        <td colSpan={2}>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.location.state}/{user.location.city}</td>

                    </tr>
                </tbody>
            )}
        </table>
    );
};

export default UserList;

// {
//     users.filter((user) => {
//         return search.toLowerCase() === '' ? user : (user.name.first.toLowerCase().includes(search.toLowerCase())) || (user.name.last.toLowerCase().includes(search.toLowerCase()))
//     }).map((user, index) => (
//         {/* <div className={styles.avatar}>
//                     <img id={styles.tooltip} src={`${user.picture.large}`} alt="" />
//                     <img src={`${user.picture.medium}`} alt="" /> */}

// ))}
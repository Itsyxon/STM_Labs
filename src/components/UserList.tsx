import React, { useEffect, useState } from 'react';
import IUser from '../model/user';
import styles from '../styles/UserList.module.css'

interface IUsers {
    users: IUser[]
    search: string
}

const UserList: React.FC<IUsers> = ({ users, search }) => {
    const filterUsers = users.filter((user) => {
        return user.name.first.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <>
            <table className={styles.wrapper}>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>State/City</th>
                    </tr>
                </thead>
                <tbody>
                    {filterUsers.map((user, index) =>
                        <tr key={index}>
                            <td><div className={styles.avatar}>
                                <img id={styles.tooltip} src={`${user.picture.large}`} alt="" />
                                <img src={`${user.picture.medium}`} alt="" /></div></td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.location.state}/{user.location.city}</td>
                        </tr>

                    )}
                </tbody>
            </table>
            {
                filterUsers.length ? (
                    ''
                ) : (
                    <h2>Пользователи с таким именем не найдены!</h2>
                )
            }
        </>
    );
};

export default UserList;

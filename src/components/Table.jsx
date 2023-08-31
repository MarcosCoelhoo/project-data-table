import React from 'react';

import styles from '../styles/Table.module.css';

const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Participation</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={styles.row}>
            <td className={styles.data}>{index + 1}</td>
            <td className={styles.data}>{item.firstName}</td>
            <td className={styles.data}>{item.lastName}</td>
            <td className={styles.data}>{item.part}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

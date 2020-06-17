import React from "react";
import { Table } from "react-bootstrap";

import styles from "../../stylesheets/CustomComponents.module.css";

const PaymentHistoryTable = ({ data }) => {
  return (
    <div className={styles.datatable}>
      <Table responsive="sm" striped hover size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Period</th>
            <th>Student Name</th>
            <th>Paid By</th>
            <th>Amount Paid (GHS)</th>
            <th>Balance Due (GHS)</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              first_name,
              last_name,
              date,
              period,
              payer_name,
              amount_paid,
              balance_due,
            }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{period}</td>
                <td>
                  {first_name} {last_name}
                </td>
                <td>{payer_name}</td>
                <td>{amount_paid}</td>
                <td>{balance_due}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentHistoryTable;

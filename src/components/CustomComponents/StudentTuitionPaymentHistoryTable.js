import React from "react";
import { Table } from "react-bootstrap";

import styles from "../../stylesheets/CustomComponents.module.css";

const StudentTuitionPaymentHistoryTable = ({ data }) => {

  return (
    <div className={styles.datatable}>
      <Table responsive="sm" striped hover size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Period</th>
            <th>Paid By</th>
            <th>Amount Paid (GHS)</th>
            <th>Balance Owed (GHS)</th>
            <th>Reciept Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              id,
              date,
              schoolPeriodId,
              paidBy,
              paymentAmount,
              tuitionOwed,
              receiptNumber
            }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{schoolPeriodId}</td>
                <td>{paidBy}</td>
                <td>{paymentAmount}</td>
                <td>{tuitionOwed}</td>
                <td>{receiptNumber}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentTuitionPaymentHistoryTable;
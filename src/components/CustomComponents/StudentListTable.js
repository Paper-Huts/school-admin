import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

import styles from "../../stylesheets/CustomComponents.module.css";

const StudentListTable = ({ data, headerList, btnActions }) => {
  let { url } = useRouteMatch();

  return (
    <div className={styles.dataTable}>
      <Table striped hover size="sm">
        <thead>
          <tr>
            {headerList.map((header) => (
              <th key={header.id}>{header.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, first_name, last_name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                {first_name} {last_name}
              </td>
              <td>
                {btnActions.map((btnAction) => (
                  <Link key={btnAction.id} to={`${url}/${first_name} ${last_name}`}>
                    <Button size="sm">{btnAction.value}</Button>
                  </Link>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentListTable;

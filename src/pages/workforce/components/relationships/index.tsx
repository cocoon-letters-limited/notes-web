import React from "react";

const styles: any = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
    color: "#333",
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
    border: "1px solid #ddd",
  },
  tableRow: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
  },
  tableCell: {
    textAlign: "left",
    padding: "10px",
  },
  evenTableRow: {
    backgroundColor: "#f2f2f2",
  },
};
function Relationships() {
  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Product</th>
            <th style={styles.tableHeader}>Price</th>
            <th style={styles.tableHeader}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>T-Shirt</td>
            <td style={styles.tableCell}>$20</td>
            <td style={styles.tableCell}>2</td>
          </tr>
          <tr style={{ ...styles.tableRow, ...styles.evenTableRow }}>
            <td style={styles.tableCell}>Hoodie</td>
            <td style={styles.tableCell}>$40</td>
            <td style={styles.tableCell}>1</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>Jeans</td>
            <td style={styles.tableCell}>$60</td>
            <td style={styles.tableCell}>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Relationships;

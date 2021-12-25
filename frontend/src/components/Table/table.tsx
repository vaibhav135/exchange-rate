import "./table.css";

const Table = (props: any) => {
  return (
    <table className="table">
      <tbody className="table_body">
        <tr>
          <th>Currencies</th>
          <th>Rates</th>
        </tr>
        {Object.entries(props.rates).map((value, index) => (
          <tr key={index}>
            <td>{value[0]}</td>
            <td> {value[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

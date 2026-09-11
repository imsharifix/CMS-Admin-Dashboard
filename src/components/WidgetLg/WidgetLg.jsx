import "./WidgetLg.css";

import { latestTransactions } from "../../Datas";

function WidgetLg() {
  const StatusButton = ({ type }) => {
    const status = type?.toLowerCase() || "pending";

    return (
      <button className={`WidgetLgButton ${status}`}>
        {type || "Pending"}
      </button>
    );
  };

  return (
    <div className="WidgetLg">
      <div className="WidgetLgHeader">
        <div>
          <span className="WidgetLgEyebrow">OVERVIEW</span>
          <h3 className="WidgetLgTitle">Latest Transactions</h3>
        </div>
      </div>

      <div className="WidgetLgTableWrapper">
        <table className="WidgetLgTable">
          <thead>
            <tr className="WidgetLgTr">
              <th className="WidgetLgTh">Customer</th>
              <th className="WidgetLgTh">Date</th>
              <th className="WidgetLgTh">Amount</th>
              <th className="WidgetLgTh">Status</th>
            </tr>
          </thead>

          <tbody>
            {latestTransactions.map((user) => (
              <tr className="WidgetLgTr" key={user.id}>
                <td className="WidgetLgUser">
                  <img src={user.img} alt={user.name} className="WidgetLgImg" />

                  <div className="WidgetLgCustomer">
                    <span className="WidgetLgName">{user.name}</span>

                    <span className="WidgetLgEmail">{user.email}</span>
                  </div>
                </td>

                <td className="WidgetLgDate">{user.date}</td>

                <td className="WidgetLgAmount">${user.price}</td>

                <td className="WidgetLgStatus">
                  <StatusButton type={user.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WidgetLg;

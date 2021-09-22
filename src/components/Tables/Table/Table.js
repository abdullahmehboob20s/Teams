import React from "react";
import "./Table.css";
import img from "assets/images/img.png";
import star2 from "assets/images/star-2.png";

function Table(props) {
  const { tableHead, tournament = true } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHead.map((a) => (
            <th>{a}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {new Array(7).fill("").map((item, index) => (
          <tr>
            {tournament ? (
              <td>
                <div className="table_cell">
                  <img className="tournament_img" src={img} alt="" />
                  <h5 className="weight-normal color-white">
                    PUBG tournament{" "}
                  </h5>
                </div>
              </td>
            ) : (
              ""
            )}
            <td>
              <div className="table_cell">
                <img className="token_img" src={star2} alt="" />
                <h5 className="weight-normal color-white">300</h5>
              </div>
            </td>
            <td>
              <div className="table_cell ">
                <h5 className="weight-normal color-white">$ 20 </h5>
              </div>
            </td>
            <td>
              <div className="table_cell ">
                <h5 className="weight-normal color-white">08/09/2021 </h5>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

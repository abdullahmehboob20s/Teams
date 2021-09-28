import React from "react";
import "./Table.css";
import img from "assets/images/img.png";
import star2 from "assets/images/star-2.png";

function Table(props) {
  const { tableHead, tournament = true } = props;
  return (
    <div className="table_wrapper">
      <div className="container-wrapper">
        <div className="table">
          <div className="thead">
            <div className="tr">
              {tableHead.map((a) => (
                <div className={a === "Tournament" ? "th flex-2" : "th"}>
                  {a}
                </div>
              ))}
            </div>
          </div>
          <div className="tbody">
            {new Array(7).fill("").map((item, index) => (
              <div className="tr">
                {tournament ? (
                  <div className="td flex-2">
                    <div className="table_cell">
                      <img className="tournament_img" src={img} alt="" />
                      <h5 className="weight-normal color-white">
                        PUBG tournament{" "}
                      </h5>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="td">
                  <div className="table_cell">
                    <img className="token_img" src={star2} alt="" />
                    <h5 className="weight-normal color-white">300</h5>
                  </div>
                </div>
                <div className="td">
                  <div className="table_cell ">
                    <h5 className="weight-normal color-white">$ 20 </h5>
                  </div>
                </div>
                <div className="td">
                  <div className="table_cell ">
                    <h5 className="weight-normal color-white">08/09/2021 </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

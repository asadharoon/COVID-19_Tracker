import React from "react";
import CardComponent from "./Card";
import CountUp from "react-countup";
import TextField from "../common/TextField";
const RecoveredCard = ({ data, loading }) => {
  return (
    <CardComponent loading={loading} borderColor="lightgreen">
      {!loading && (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            marginTop: 10,
            flexDirection: "column",
          }}
        >
          <div>
            <TextField
              text="Recovered"
              style={{ fontSize: 20, fontWeight: "bold" }}
            />
          </div>
          <div>
            <TextField
              text={
                <CountUp
                  duration={2.5}
                  start={0}
                  end={data.recovered.value}
                  separator={","}
                />
              }
              style={{ fontSize: 17, color: "lightgreen", fontWeight: "bold" }}
            />
          </div>
          <div>
            <TextField
              style={{ fontSize: 15 }}
              text={new Date(data.lastUpdate).toDateString()}
            />
          </div>
          <TextField
            id="text"
            text={"Number of recoveries from COVID-19"}
            style={{ padding: 20 }}
          />
        </div>
      )}
    </CardComponent>
  );
};
export default RecoveredCard;

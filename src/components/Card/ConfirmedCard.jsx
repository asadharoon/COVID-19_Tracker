import React from "react";
import CardComponent from "./Card";
import CountUp from "react-countup";
import TextField from "../common/TextField";
const ConfirmedCard = ({ data, loading }) => {
  return (
    <CardComponent loading={loading} borderColor="royalblue">
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
              text="Confirmed"
              style={{ fontSize: 20, fontWeight: "bold" }}
            />
          </div>
          <div>
            <TextField
              text={
                <CountUp
                  duration={2.5}
                  start={0}
                  end={data.confirmed.value}
                  separator={","}
                />
              }
              style={{ fontSize: 17, color: "royalblue", fontWeight: "bold" }}
            />
          </div>
          <div>
            <TextField
              text={new Date(data.lastUpdate).toDateString()}
              style={{ fontSize: 15 }}
            />
          </div>
          <TextField
            id="text"
            text={"Number of active cases of COVID-19"}
            style={{ padding: 20 }}
          />
        </div>
      )}
    </CardComponent>
  );
};
export default ConfirmedCard;

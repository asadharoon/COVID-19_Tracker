import React from "react";
import CardComponent from "./Card";
import CountUp from "react-countup";
import TextField from "../common/TextField";
const DeathCard = ({ data, loading }) => {
  const fontSize = { fontSize: window.innerHeight * 0.0202 };
  return (
    <CardComponent loading={loading} borderColor="#f70d1a">
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
              text="Deaths"
              style={{ fontSize: 20, fontWeight: "bold" }}
            />
          </div>
          <div>
            <TextField
              text={
                <CountUp
                  duration={2.5}
                  start={0}
                  end={data.deaths.value}
                  separator={","}
                />
              }
              style={{ fontSize: 17, color: "#f70d1a", fontWeight: "bold" }}
            />
          </div>
          <div>
            <TextField
              style={{ fontSize: 15 }}
              text={new Date(data.lastUpdate).toDateString()}
            />
          </div>
          <TextField
            text={"Number of deaths caused by COVID-19"}
            style={{ fontSize: fontSize.fontSize, padding: 20 }}
          />
        </div>
      )}
    </CardComponent>
  );
};
export default DeathCard;

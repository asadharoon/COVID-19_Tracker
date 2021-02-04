import "./App.css";
import CardComponent from "./components/Card/Card";
import { Col, Row } from "antd";
import Layouts from "./components/Layout/Layout";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { fetchData, getReport } from "./api/apiClient";
import ConfirmedCard from "./components/Card/ConfirmedCard";
import RecoveredCard from "./components/Card/RecoveredCard";
import DeathCard from "./components/Card/DeathCard";
import CountryPicker from "./components/CountrySelecter";
import Charts from "./components/Charts";
import TextField from "./components/common/TextField";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [ChartData, setChartData] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    getReport().then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);
  const handleChangeCountry = async (e) => {
    setCountry(e);
    const data = await fetchData(e);
    setChartData(data);
  };
  return (
    <Layouts>
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flex: 1,

          flexDirection: "column",
        }}
      >
        <img
          src={require("./assets/image.png").default}
          width={150}
          style={{ alignSelf: "center", marginBottom: 10 }}
        />
        <Row style={{ padding: 10, paddingLeft: "10%" }}>
          <ConfirmedCard data={data} loading={loading} />
          <RecoveredCard data={data} loading={loading} />
          <DeathCard data={data} loading={loading} />
        </Row>
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            padding: 10,
          }}
        >
          <TextField
            text={country != "" ? "Country Wise" : "Global Stats"}
            style={{
              alignSelf: "center",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          />
          <CountryPicker handleChange={handleChangeCountry} />
        </div>

        <Charts data={ChartData} country={country} />
      </div>
    </Layouts>
  );
}

export default App;

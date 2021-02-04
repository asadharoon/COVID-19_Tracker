import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/apiClient";

const CountryPicker = ({ handleChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
  return (
    <Select
      showSearch
      style={{ width: 200, borderRadius: 10 }}
      placeholder="Select a country"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={handleChange}
      defaultValue="Global"
    >
      {countries.map((value, index) => {
        return (
          <Option value={value} key={index}>
            {value}
          </Option>
        );
      })}
    </Select>
  );
};
export default CountryPicker;

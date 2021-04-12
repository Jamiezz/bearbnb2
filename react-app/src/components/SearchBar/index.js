import "./SearchBar.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from 'moment';
import SearchButton from "./SearchButton"
import DatePicker from 'react-date-picker'


import { searchMap } from "../../store/location";


const dateConverter = (dateObj) => {
  return moment(dateObj).format("YYYY-MM-DD")
}

export function DatePickerExample({ setSearchDate }) {
  const [date, setDate] = useState();

  const currentDate = new Date();

  useEffect(() => {
    setSearchDate(dateConverter(date))
  }, [date])
  return (
    <DatePicker
      date={date}
      format="MM-dd-yyyy"
      onDateChange={setDate}
      minimumDate={currentDate}
    // locale={enGB}
    >
      {({ inputProps, focused }) => (
        <input
          id="datebox"
          className={"input" + (focused ? " -focused" : "")}
          {...inputProps}
        />
      )}
    </DatePicker>
  );
}
const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [habitat, setHabitat] = useState("");
  const [searchDate, setSearchDate] = useState()
  const [value, newValue] = useState(new Date());



  useEffect(() => {
  }, [searchDate])

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(searchMap({ habitat, searchDate }));
    return history.push('/map')
  };

  return (
    <div id="search-wrap">
      <form className="search" onSubmit={onSubmit}>
        <div className="search-location">
          <label>
Preferred State
          </label>
        </div>
        <div>
        <div>Choose duration
          <br></br>
      <DatePicker
        onChange={newValue}
        value={value}
      />
    </div>
        </div>
        <div>
            <div>Where would you like to hibernate?</div>
            <select
              id="select-field"
              value={habitat}
              onChange={(e) => setHabitat(e.target.value)}
            >
              <option value={""}>pick a habitat</option>
              <option value={"Arctic"}>Arctic</option>
              <option value={"Woodlands"}>Woodlands</option>
              <option value={"RockyMountains"}>Rocky Mountains</option>
              <option value={"Chicago"}>Chicago</option>
              <option value={"GreenBay"}>Green Bay</option>
              <option value={"Appalachia"}>Appalachia</option>
            </select>
          </div>

        <div>
          <div>Other Bears?</div>
        </div>
          <SearchButton />
      </form>
    </div>
  );
};

export default Search;

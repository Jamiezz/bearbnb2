import "./SearchBar.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DatePicker } from "react-nice-dates";
// import before from "../img/magnifying_no_background"
// import after from"../img/search_no_background"
import moment from 'moment';
import SearchButton from "./SearchButton"


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
  const [aircraft, setAircraft] = useState("");
  const [searchDate, setSearchDate] = useState()




  useEffect(() => {
  }, [searchDate])

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(searchMap({ aircraft, searchDate }));
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
          <div>Duration</div>
        </div>
        <div>
            <div>Where would you like to hibernate?</div>
            <select
              id="select-field"
              value={aircraft}
              onChange={(e) => setAircraft(e.target.value)}
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

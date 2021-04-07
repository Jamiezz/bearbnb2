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


























  // const [selectVal, setSelectVal] = useState("Flagstaff")
  // const [showCal, setShowCal] = useState(false);
  // const [location, setLocation] = useState("");


            {/* <div>
              <Listbox
                id="place-search"
                value={selectVal}
                // onChange={handleInput}
                onChange={setSelectVal}
              >
                <ListboxOption key={'la'} value="Los Angeles">
                  Los Angeles
                </ListboxOption>
                <ListboxOption key={'f'} value="Flagstaff">
                  Flagstaff
                </ListboxOption>
                <ListboxOption key={'p'} value="Phoenix">
                  Phoenix
                </ListboxOption>
              </Listbox>
            </div> */}






  // const handleSelect = (selectVal) => {
  //   let choiceCoords = {}
  //   if (selectVal === "Los Angeles") {
  //     choiceCoords = { 'lat': 34.05, 'lng': -118.25 };
  //     setLocation(choiceCoords);
  //   }
  //   if (selectVal === "Flagstaff") {
  //     choiceCoords = { 'lat': 35.199167, 'lng': -111.631111 };
  //     setLocation(choiceCoords);
  //   }
  //   if (selectVal === "Phoenix") {
  //     choiceCoords = { 'lat': 33.45, 'lng': -112.066667 };
  //     setLocation(choiceCoords);
  //   }
  // }
  // useEffect(() => {
  //   handleSelect(selectVal)
  // }, [selectVal])
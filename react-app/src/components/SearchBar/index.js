import "./SearchBar.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import moment from 'moment';

// import {
//   Listbox,
//   ListboxOption,
// } from "@reach/listbox";
// import "@reach/listbox/styles.css";
// import "react-nice-dates/build/style.css";
import { searchMap } from "../../store/location";
// import {IoSearchCircle} from 'react-icons/io5'

const dateConverter = (dateObj) => {
  return moment(dateObj).format("YYYY-MM-DD")
}

export function DatePickerExample({setSearchDate}) {
  const [date, setDate] = useState();
  const currentDate = new Date();

  useEffect(() => {
    setSearchDate(dateConverter(date))
  }, [date])
  return (
    <DatePicker
      date={date}
      format="MM-dd-yyy"
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
  // const [selectVal, setSelectVal] = useState("Flagstaff")
  // const [showCal, setShowCal] = useState(false);
  // const [location, setLocation] = useState("");
  const [aircraft, setAircraft] = useState("");
  const [searchDate, setSearchDate] = useState()


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

  useEffect(() => {
  }, [searchDate])

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(searchMap({ aircraft, searchDate}));
    return history.push('/map')
  };


  return (
    <div id="search-wrap">
      <form className="search" onSubmit={onSubmit}>
        <div className="search-location">
          <label>
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
            Where are you going?
          </label>
        </div>
        <div>
          <div>Flying Date</div>
        </div>
        <div>
          <div>

          </div>
          <select
            id="select-field"
            value={aircraft}
            onChange={(e) => setAircraft(e.target.value)}
          >
            <option value={""}>pick an aircraft</option>
            <option value={"HangGlider"}>Hang glider </option>
            <option value={"Helicopter"}>Helicopter</option>
            <option value={"HotAirBalloon"}>Hot air balloon</option>
            <option value={"JetPack"}>Jet pack</option>
            <option value={"LiteAircraft"}>Lite aircraft</option>
            <option value={"PrivateJet"}>Private Jet</option>
            <option value={"SkyDiving"}>Sky Diving</option>
            <option value={"WingSuit"}>Wing suit</option>
          </select>
          <div>What are you flying?</div>
        </div>
        <div>
          <div>Guests</div>
        </div>
        <button type="submit" className="search-button">
          <a href="#">
          </a>
        </button>
      </form>
    </div>
  );
};

export default Search;

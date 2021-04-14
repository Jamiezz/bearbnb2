import "./SearchBar.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import SearchButton from "./SearchButton"
import DatePicker from 'react-date-picker'


import { useDispatch, useSelector } from "react-redux";
import { getAllDens } from "../../store/dens";


import { searchMap } from "../../store/location";



const Search = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [habitat, setHabitat] = useState("");
  const [searchDate, setSearchDate] = useState()
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(new Date());
  const dens = useSelector((state) => state?.allDens);


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
          <div>Choose Start Date
          <br></br>
            <DatePicker
              onChange={setStartValue}
              value={startValue}
            />
          </div>
        </div>
        <div>
          <div>Choose End Date
          <br></br>
            <DatePicker
              onChange={setEndValue}
              value={endValue}
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

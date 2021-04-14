import React from 'react';
import "./reservations.css"
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReservations } from '../../store/reservation'

function Reservations() {
    const dispatch = useDispatch()
    const reservations = useSelector(state => state.reservations.listOfReservations)

    useEffect(() => {
        dispatch(getAllReservations())
    },[])

    return (
            <div className="image">
                <div>{reservations && reservations.map(reservation => {
                   return <p>{reservation.denDescription}</p>
                })}</div>
            </div>
    )
}

export default Reservations
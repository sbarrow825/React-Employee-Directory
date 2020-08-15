import React, { useState } from "react"
import {
    FILTER_CARRY,
    FILTER_HARD_SUPPORT,
    FILTER_SOFT_SUPPORT,
    FILTER_MIDLANE,
    FILTER_OFFLANE,
    ALL_PLAYERS
} from "../../utils/actions"
import "./style.css"

export default function allFilterButtons({ reducer }) {
    const [players, dispatch] = reducer

    return (
        <div className="container" style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <button className="btn btn-dark" onClick={() => dispatch({ type: ALL_PLAYERS, position: "all" })}>See All Players</button>
                    <button className="btn btn-dark" onClick={() => dispatch({ type: FILTER_CARRY, position: "Carry" })}>See All Carry Players</button>
                    <button className="btn btn-dark" onClick={() => dispatch({ type: FILTER_MIDLANE, position: "Mid" })}>See All Mid Players</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <button className="btn btn-dark" onClick={() => dispatch({ type: FILTER_OFFLANE, position: "Offlane" })}>See All Offlane Players</button>
                    <button className="btn btn-dark" onClick={() => dispatch({ type: FILTER_SOFT_SUPPORT, position: "Soft Support" })}>See All Soft Support Players</button>
                    <button className="btn btn-dark" onClick={() => dispatch({ type: FILTER_HARD_SUPPORT, position: "Hard Support" })}>See All Hard Support Players</button>
                </div>
            </div>
            <br></br>
        </div>
    )
}
import React, { useState } from "react"
import {
    FILTER_CARRY,
    FILTER_HARD_SUPPORT,
    FILTER_SOFT_SUPPORT,
    FILTER_MIDLANE,
    FILTER_OFFLANE,
    ALL_PLAYERS
} from "../../utils/actions"

export default function allFilterButtons({ reducer }) {
    const [players, dispatch] = reducer

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <button onClick={() => dispatch({ type: ALL_PLAYERS, position: "all" })}>See All Players</button>
                    <button onClick={() => dispatch({ type: FILTER_CARRY, position: "Carry" })}>See All Carry Players</button>
                    <button onClick={() => dispatch({ type: FILTER_MIDLANE, position: "Mid" })}>See All Mid Players</button>
                    <button onClick={() => dispatch({ type: FILTER_OFFLANE, position: "Offlane" })}>See All Offlane Players</button>
                    <button onClick={() => dispatch({ type: FILTER_SOFT_SUPPORT, position: "Soft Support" })}>See All Soft Support Players</button>
                    <button onClick={() => dispatch({ type: FILTER_HARD_SUPPORT, position: "Hard Support" })}>See All Hard Support Players</button>
                </div>
            </div>
        </div>
    )
}
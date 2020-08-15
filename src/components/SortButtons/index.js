import React from "react"
import { SORT_BY_TOTAL_EARNINGS_DESCENDING, SORT_BY_TOTAL_EARNINGS_ASCENDING } from "../../utils/actions"


export default function sortByTotalEarnings({ reducer }) {
    const [roster, dispatch] = reducer

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around" style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
                    <button className="btn btn-dark" onClick={() => dispatch({ type: SORT_BY_TOTAL_EARNINGS_DESCENDING })}>Sort by Earnings Low to High</button>
                    <button className="btn btn-dark" onClick={() => dispatch({ type: SORT_BY_TOTAL_EARNINGS_ASCENDING })}>Sort by Earnings High to Low</button>
                </div>
            </div>
            <br></br>
        </div>
    )
}
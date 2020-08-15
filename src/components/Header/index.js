import React from 'react'

function Header() {
    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-md-12" style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
                    <img src={require("./Dota2Logo.jpg")}></img>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-md-12" style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
                    <h1>Most Successful Dota 2 Players</h1>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Header;
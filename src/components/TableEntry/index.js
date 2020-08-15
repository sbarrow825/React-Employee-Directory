import React from "react"

function TableEntry({ player }) {

    function numberWithCommas(earnings) {
        return earnings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <tr>
            <td>{player.playerID}</td>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.team}</td>
            <td>${numberWithCommas(player.earnings)}</td>
        </tr>
    )
}

export default TableEntry;
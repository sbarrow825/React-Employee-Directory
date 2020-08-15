import React from "react"

function TableEntry({ player }) {

    return (
        <tr>
            <td>{player.playerID}</td>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.team}</td>
            <td>${player.earnings}</td>
        </tr>
    )
}

export default TableEntry;
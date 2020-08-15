import React, { useReducer } from 'react';
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import SortButtons from "./components/SortButtons";
import Table from "./components/Table";
import TableEntry from "./components/TableEntry";
import style from "./style.css"
import {
  FILTER_CARRY,
  FILTER_HARD_SUPPORT,
  FILTER_SOFT_SUPPORT,
  FILTER_MIDLANE,
  FILTER_OFFLANE,
  SORT_BY_TOTAL_EARNINGS_ASCENDING,
  SORT_BY_TOTAL_EARNINGS_DESCENDING,
  ALL_PLAYERS
} from "./utils/actions"
import players from "./players.json"

function App() {

  const [allPlayers, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SORT_BY_TOTAL_EARNINGS_ASCENDING:
        var sorted = state.playersToDisplay.slice().sort((player1, player2) => player2.earnings - player1.earnings);
        return {
          ...state,
          playersToDisplay: sorted
        }
      case SORT_BY_TOTAL_EARNINGS_DESCENDING:
        var sorted = state.playersToDisplay.slice().sort((player1, player2) => player1.earnings - player2.earnings);
        return {
          ...state,
          playersToDisplay: sorted
        }
      case FILTER_CARRY:
        // do something
        break
      case FILTER_MIDLANE:
        // do something
        break
      case FILTER_OFFLANE:
        // do something
        break
      case FILTER_SOFT_SUPPORT:
        // do something
        break
      case FILTER_HARD_SUPPORT:
        // do something
        break
      case ALL_PLAYERS:
        // do something
        break
    }
  }, {
    allPlayers: players,
    playersToDisplay: players,
  })

  return (
    <div className="container main">
      <Header />
      <SortButtons reducer={[players, dispatch]} />
      <FilterButtons reducer={[players, dispatch]} />
      <div className="row">
        <div className="col-md-12">
          <Table>
            {allPlayers.playersToDisplay.map(player => {
              return <TableEntry player={player} key={player.id} />
            })}
          </Table>
        </div>
      </div>
    </div>
  )
}

export default App
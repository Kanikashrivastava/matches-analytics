import React, { useMemo } from "react";
import { Bubble } from "react-chartjs-2";
import matches from "./data";
import MatchTable from "./MatchTable";
import "./styles.css";
import { createMatches, mapToDataSet } from "./utils";

export default function App() {
  const { teams, totalMatches } = useMemo(() => createMatches(matches), []);
  const data = useMemo(() => mapToDataSet(teams), [teams]);
  return (
    <div className="App">
      <div className="chart">
        <Bubble data={data} />
      </div>
      <MatchTable teams={teams} totalMatches={totalMatches} />
    </div>
  );
}

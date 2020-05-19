export const createColor = () => {
  const a = Math.random() * 5;
  const r = Math.random() * 256;
  const g = Math.random() * 256;
  const b = Math.random() * 256;

  return `rgba(${r}, ${b}, ${g}, ${a})`;
};
export const createMatches = matches => {
  const teams = {};
  let totalMatches = 0;
  matches.rounds.forEach(round => {
    round.matches.forEach(match => {
      totalMatches += 1;
      const { team1, team2, score1, score2 } = match;
      if (!teams[team1.key])
        teams[team1.key] = {
          ...team1,
          score: 0,
          won: 0,
          lost: 0,
          ties: 0,
          scoreAgainst: 0
        };
      if (!teams[team2.key])
        teams[team2.key] = {
          ...team2,
          score: 0,
          won: 0,
          lost: 0,
          ties: 0,
          scoreAgainst: 0
        };
      teams[team1.key].score += score1;
      teams[team2.key].score += score2;
      if (score1 > score2) {
        teams[team1.key].won += 1;
        teams[team1.key].scoreAgainst += score1;
        teams[team2.key].lost += 1;
      } else if (score2 > score1) {
        teams[team1.key].lost += 1;
        teams[team2.key].won += 1;
        teams[team2.key].scoreAgainst += score2;
      } else {
        teams[team1.key].ties += 1;
        teams[team2.key].ties += 1;
      }
    });
  });
  return { teams: Object.values(teams), totalMatches };
};
export const mapToDataSet = teams => ({
  datasets: teams.map(team => {
    const color = createColor();
    return {
      backgroundColor: color,
      hoverBackgroundColor: color,
      label: team.name,
      data: [{ x: team.won, y: team.lost, r: team.score }]
    };
  })
});

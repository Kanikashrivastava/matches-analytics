import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function MatchTable({ teams, totalMatches }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Teams</StyledTableCell>
            <StyledTableCell align="right">Total Matches</StyledTableCell>
            <StyledTableCell align="right">Won</StyledTableCell>
            <StyledTableCell align="right">Lost</StyledTableCell>
            <StyledTableCell align="right">Ties</StyledTableCell>
            <StyledTableCell align="right">
              Total Goals Scored For
            </StyledTableCell>
            <StyledTableCell align="right">
              Total Goals Scored Against
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map(team => (
            <StyledTableRow key={team.name}>
              <StyledTableCell component="th" scope="row">
                {team.name}
              </StyledTableCell>
              <StyledTableCell align="right">{totalMatches}</StyledTableCell>
              <StyledTableCell align="right">{team.won}</StyledTableCell>
              <StyledTableCell align="right">{team.lost}</StyledTableCell>
              <StyledTableCell align="right">{team.ties}</StyledTableCell>
              <StyledTableCell align="right">{team.score}</StyledTableCell>
              <StyledTableCell align="right">
                {team.scoreAgainst}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

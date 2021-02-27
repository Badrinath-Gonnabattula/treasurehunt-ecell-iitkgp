import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

let counter = 0;
function createData(rank, name, emailid, score) {
  counter += 1;
  return { id: counter, rank, name, emailid, score };
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  {
    id: "rank",
    numeric: true,
    disablePadding: false,
    label: "Rank"
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name"
  },
  { id: "emailid", numeric: false, disablePadding: false, label: "Email ID" },
  { id: "score", numeric: true, disablePadding: false, label: "Score" }
  // { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  // { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" }
];

class EnhancedTableHead extends React.Component {
  createSortHandler = (property) => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props;

    const CustomTableSortLabel = withStyles((theme) => ({
      active: {
        color: "#011728" // typography.primaryTextColor
      }
    }))(TableSortLabel);

    return (
      <TableHead>
        <TableRow>
          {columnData.map((column) => {
            return (
              <CustomTableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? "none" : "default"}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <CustomTableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </CustomTableSortLabel>
                </Tooltip>
              </CustomTableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const toolbarStyles = (theme) => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
});

let EnhancedTableToolbar = (props) => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {/* <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </div> */}
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {/* {numSelected > 0 ? ( */}
        {/* <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip> */}
        {/* ) : ( */}
        <Tooltip title="Filter list">
          <IconButton aria-label="Filter list" />
        </Tooltip>
        {/* )} */}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const CustomTableCell = withStyles((theme) => ({
  root: {
    borderBottom: "1px solid #E0E3E5", // textColors.borderLight
    padding: "4px 8px 4px 24px"
  },
  head: {
    fontSize: 14, // cbpBody1
    fontWeight: 400,
    color: "#5A6873" // typography.secondaryTextColor
  },
  body: {
    fontSize: 16, // cbpBody3
    color: "#011728" // typography.primaryTextColor
  }
}))(TableCell);

const CustomTablePagination = withStyles((theme) => ({
  root: {
    "& span": {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Droid Sans", Ubuntu, "Helvetica Neue", Arial, sans-serif',
      fontSize: 14,
      color: "#5A6873" // typography.secondaryTextColor
    }
  },
  selectRoot: {
    marginTop: 4
  },
  select: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Droid Sans", Ubuntu, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    color: "#5A6873", // typography.secondaryTextColor
    paddingRight: 24
  },
  menuItem: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Droid Sans", Ubuntu, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    color: "#011728"
  }
}))(TablePagination);

const styles = (theme) => ({
  root: {
    width: 848,
    margin: "48px auto",
    overflowX: "auto"
  },
  table: {
    minWidth: 700,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Droid Sans", Ubuntu, "Helvetica Neue", Arial, sans-serif'
  },
  row: {
    height: "56px",
    "&:nth-of-type(odd)": {
      backgroundColor: "#F7F7F7" // beigeGray[200]
    }
  }
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "asc",
      orderBy: "rank",
      selected: [],
      data: [
        createData(1, "Data1", "akshat@g.com", 3.72),
        createData(2, "Data2", "akshat@g.com", 3.723),
        createData(3, "Data3", "akshat@g.com", 3.245),
        createData(4, "Data4", "akshat@g.com", 3.2157),
        createData(5, "Data5", "akshat@g.com", 3.2157),
        createData(6, "Data6", "akshat@g.com", 312.7),
        createData(7, "Data7", "akshat@g.com", 3245.7),
        createData(8, "Data8", "akshat@g.com", 3125.7),
        createData(9, "Data9", "akshat@g.com", 3.57),
        createData(10, "Data0", "akshat@g.com", 31.7),
        createData(11, "Data1", "akshat@g.com", 3.217),
        createData(12, "Data2", "akshat@g.com", 3.527),
        createData(13, "Data3", "akshat@g.com", 3.155217)
      ],
      page: 0,
      rowsPerPage: 5
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState((state) => ({ selected: state.data.map((n) => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = (id) => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Card className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n) => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={(event) => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                      className={classes.row}
                    >
                      <CustomTableCell component="th" scope="row">
                        {n.rank}
                      </CustomTableCell>
                      <CustomTableCell numeric>{n.name}</CustomTableCell>
                      <CustomTableCell numeric>{n.emailid}</CustomTableCell>
                      <CustomTableCell numeric>{n.score}</CustomTableCell>
                      {/* <CustomTableCell numeric>{n.protein}</CustomTableCell> */}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <CustomTablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Card>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);

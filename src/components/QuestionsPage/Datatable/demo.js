import React from "react";
import {useEffect,useState} from "react";
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
import SearchBar from "material-ui-search-bar";

import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


function createData(rank, name, emailid, score) {
  return { id: rank, rank, name, emailid, score };
}

const divStyle = {
  overflowY:'scroll',
  zindex:100000000000
};

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
  
  // const [searched, setSearched] = useState<string>("");
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
        color: "#e9eef2" // typography.primaryTextColor
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



const toolbarStyles = (theme) => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  // highlight:
  //   theme.palette.type === "light"
  //     ? {
  //         color: theme.palette.secondary.main,
  //         backgroundColor: lighten(theme.palette.secondary.light, 0.85)
  //       }
  //     : {
  //         color: theme.palette.text.primary,
  //         backgroundColor: theme.palette.secondary.dark
  //       },
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
  const { numSelected, classes,value,handleSearch } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
         {/*{numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            Nutrition
          </Typography>
        )}*/}
      </div> 
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {/* {numSelected > 0 ? ( */}
        {/* <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip> */}
        {/* ) : ( */}
        {/* <Tooltip title="Filter list">
          <IconButton aria-label="Filter list" />
        </Tooltip> */}
        {/* )} */}
      
      <div>
            <TextField
              placeholder="Enter email id to search..."
              onChange={handleSearch}
              value={value}
            />
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </div>
          </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);
//
const CustomTableCell = withStyles((theme) => ({
  root: {
    borderBottom: "1px solid #E0E3E5", // textColors.borderLight
    padding: "4px 8px 4px 24px"
  },
  head: {
    fontSize: 14, // cbpBody1
    fontWeight: 400,
    backgroundColor: theme.palette.common.pink,
    color: theme.palette.common.black,

  },
  body: {
    fontSize: 16, // cbpBody3
    color: "#011728" // typography.primaryTextColor
  }
}))(TableCell);
// const requestSearch = (searchedVal: string) => {
//   const filteredRows = originalRows.filter((row) => {
//     return row.name.toLowerCase().includes(searchedVal.toLowerCase());
//   });
//   setRows(filteredRows);
// };
// const cancelSearch = () => {
//   setSearched("");
//   requestSearch(searched);
// };
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
    fontSize: 0,
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
    width: "100%",
    height:"50%",
    maxHeight:500,
    // marginTop:"50px",
    // marginBottom:"50px",
    // margin: " auto",
    overflowY:'auto',
    overflowX: "auto",
    display:"block",
    

  },
  table: {
    minWidth: 700,
    maxheight:900,
    overflowY:'auto',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, "Droid Sans", Ubuntu, "Helvetica Neue", Arial, sans-serif'
  },
  row: {
    // height: "5%",
    "&:nth-of-type(odd)": {
      backgroundColor: "#F7F7F7" // beigeGray[200]
    }
  }
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    let data = [];
    this.props.data.map((e,i)=>{
      data[i] = createData(i+1,e.name,e.email,e.score);
    })
    this.state = {
      order: "asc",
      orderBy: "rank",
      selected: [],
      data: data,
      filterData:data,
      page: 0,
      rowsPerPage: 10
    };
  }
  
  componentWillReceiveProps(someProp) {
    let data = [];
    someProp.data.map((e,i)=>{
      data[i] = createData(i+1,e.name,e.email,e.score);
    })
    console.log(data);
    this.setState({...this.state,data:data})
  }


  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    const filterData = this.state.filterData.sort((a, b) =>
      order === "desc" ? b[orderBy] > a[orderBy] : a[orderBy] > b[orderBy]
    );

    this.setState({filterData, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState((state) => ({ selected: state.filterData.map((n) => n.id) }));
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

  handleSearch = (event) => {
    const  {data}  = this.state;
    let filteredDatas = [];
    filteredDatas = data.filter(e => {
      let mathesItems = Object.values(e);
      let retVal = true;
      mathesItems.forEach(e => {
        const regex = new RegExp(event.target.value, "gi");
        if (typeof e == "string") retVal = e.match(regex);
      });
      return retVal;
    });
    this.setState({
      filterData: filteredDatas,
      searchValue: event.target.value
    });
  };




  render() {
    const { classes } = this.props;
    const { filterData, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, filterData.length - page * rowsPerPage);

    return (
      <MuiThemeProvider>
      
     
      <Card className={classes.root}>
        {/* <SearchBar/> */}
        <EnhancedTableToolbar 
        numSelected={selected.length}
          handleSearch={this.handleSearch}
          value={this.searchValue}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle" stickyHeader>
            
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={filterData.length}
              // customStyles={{backgroundColor: "black",
              // color:"white"}}
            // />
            
          //  value={searched}
          //  onChange={(searchVal) => requestSearch(searchVal)}
          //  onCancelSearch={() => cancelSearch()}
          />
            <TableBody >
              {filterData
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
          count={filterData.length}
          rowsPerPage="10"
          labelRowsPerPage="(Rows per page : 10)"
          rowsPerPageOptions={[10]}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          // onChangeRowsPerPage={}
          style={{zIndex:"auto"}}
        />
      </Card>
      </MuiThemeProvider>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnhancedTable);

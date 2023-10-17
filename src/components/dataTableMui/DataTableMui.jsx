import React from "react";
import "./muiTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const DataTableMui = (props) => {

  const handleDelete=(id)=>{
console.log(id + " has been deleted")
  }
const actionCol = {
  feild : "action",
  headerName: "Action",
  width : "200",
  renderCell : (params)=>{
    return <div className="action"  >
      <Link to={`/${props.slug}/${params.row.id}`}>
      <img src="/svgs/view.svg" alt="" />
      </Link>
      <div className="delete" onClick={()=>handleDelete(params.row.id)}>
        <img src="/svgs/delete.svg" alt="" />
      </div>
    </div>
  }
}
  return (
    <div className="muiTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionCol]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTableMui;

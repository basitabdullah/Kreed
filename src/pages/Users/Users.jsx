import React from 'react'
import "./users.scss"
import DataTableMui from '../../components/dataTableMui/DataTableMui'
import { userRows } from '../../data';

const Users = () => {

  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 100,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 100,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 130,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      type: "string",
    },
   
  ];
  


  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
       <DataTableMui columns={columns} rows={userRows}  />
    </div>
  )
}

export default Users
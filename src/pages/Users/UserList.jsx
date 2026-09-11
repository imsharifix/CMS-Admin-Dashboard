import { Link } from "react-router-dom";
// MUI
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Image
import profileImg from "./../../assets/imgs/profile.jpg";

// CSS
import "./UserList.css";

// import UseState
import { useState } from "react";
function UserList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      User: "Bardia",
      img: profileImg,
      Email: "bardia@gmail.com",
      Status: "Active",
      Transaction: 120,
    },
    {
      id: 2,
      User: "Ali",
      img: profileImg,
      Email: "ali@gmail.com",
      Status: "Inactive",
      Transaction: 80,
    },
    {
      id: 3,
      User: "Ali",
      img: profileImg,
      Email: "ali@gmail.com",
      Status: "Inactive",
      Transaction: 80,
    },
    {
      id: 4,
      User: "Ali",
      img: profileImg,
      Email: "ali@gmail.com",
      Status: "Inactive",
      Transaction: 80,
    },
    {
      id: 5,
      User: "Ali",
      img: profileImg,
      Email: "ali@gmail.com",
      Status: "Inactive",
      Transaction: 80,
    },
  ]);

  const deleteUser = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "user-table-header",
    },

    {
      field: "User",
      headerName: "User",
      width: 200,
      headerClassName: "user-table-header",

      renderCell: (params) => {
        return (
          <Link className="Link" to={`/product/${params.row.id}`}>
            <div className="user-cell">
              <img
                src={params.row.img}
                alt={params.value}
                className="user-avatar"
              />

              <span className="user-name">{params.value}</span>
            </div>
          </Link>
        );
      },
    },

    {
      field: "Email",
      headerName: "Email",
      width: 230,
      headerClassName: "user-table-header",
    },

    {
      field: "Status",
      headerName: "Status",
      width: 140,
      headerClassName: "user-table-header",

      renderCell: (params) => {
        return (
          <span
            className={`status-badge ${
              params.value === "Active" ? "status-active" : "status-inactive"
            }`}
          >
            {params.value}
          </span>
        );
      },
    },

    {
      field: "Transaction",
      headerName: "Transaction",
      width: 150,
      headerClassName: "user-table-header",

      renderCell: (params) => {
        return <span className="transaction">${params.value}</span>;
      },
    },

    {
      field: "Action",
      headerName: "Action",
      width: 150,
      sortable: false,
      filterable: false,
      headerClassName: "user-table-header",

      renderCell: (params) => {
        return (
          <div className="action-buttons">
            <button className="edit-button">
              <EditIcon fontSize="small" />
            </button>

            <button
              className="delete-button"
              onClick={() => deleteUser(params.row.id)}
            >
              <DeleteIcon fontSize="small" />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <Box className="user-list-container">
      <div className="user-list-card">
        <div className="user-list-header">
          <div>
            <h2>Users</h2>
            <p>Manage your users and transactions</p>
          </div>

          <button className="add-user-button">+ Add User</button>
        </div>

        <div className="user-table-wrapper">
          <DataGrid
            rows={users}
            columns={columns}
            pageSizeOptions={[5, 10, 20]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                  page: 0,
                },
              },
            }}
            disableRowSelectionOnClick
            rowHeight={65}
            className="user-data-grid"
          />
        </div>
      </div>
    </Box>
  );
}

export default UserList;

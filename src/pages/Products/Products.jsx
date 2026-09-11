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
import "./Products.css";

// import UseState
import { useState } from "react";
function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      Name: "Html Course",
      Price: 120_000,
      img: profileImg,
    },
    {
      id: 2,
      Name: "Css Course",
      img: profileImg,
      Price: 80,
    },
    {
      id: 3,
      Name: "Css Course",
      img: profileImg,
      Price: 80,
    },
    {
      id: 4,
      Name: "Css Course",
      img: profileImg,
      Price: 80,
    },
    {
      id: 5,
      Name: "Css Course",
      img: profileImg,
      Price: 80,
    },
  ]);

  const deleteProduct = (id) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== id);
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
      field: "Name",
      headerName: "Name",
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
      field: "Price",
      headerName: "Price",
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
              onClick={() => deleteProduct(params.row.id)}
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
            <h2>Products</h2>
            <p>Manage your Products</p>
          </div>

          <button className="add-user-button">+ Add Product</button>
        </div>

        <div className="user-table-wrapper">
          <DataGrid
            rows={products}
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

export default Products;

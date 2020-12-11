import React from "react";
import NavDrawer from "./NavDrawer";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "",
    headerName: "View Oder",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params: CellParams) => {
      const onClick = () => {
        const api: GridApi = params.api;
        const fields = api
          .getAllColumns()
          .map((c) => c.field)
          .filter((c) => c !== "__check__" && !!c);
        const thisRow = {};

        fields.forEach((f) => {
          thisRow[f] = params.getValue(f);
        });

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick}>Click</Button>;
    },
  },
  { field: "price", headerName: "Price", type: Number, width: 90 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "phone", headerName: "Phone", width: 120 },
  { field: "address", headerName: "Address", width: 450 },
];

const rows = [
  {
    id: 1,
    price: 640,
    lastName: "Israr",
    firstName: "Shaikh",
    phone: 9967154843,
    address:
      "Vidyalankar Educational Campus, Vidyalankar College Rd, Wadala East, Deen Bandhu Nagar, Antop Hill, Mumbai,",
  },
  {
    id: 2,
    price: 230,
    lastName: "Israr",
    firstName: "Shaikh",
    phone: 9967154843,
    address:
      "Vidyalankar Educational Campus, Vidyalankar College Rd, Wadala East, Deen Bandhu Nagar, Antop Hill, Mumbai,",
  },
];

function Oder() {
  return (
    <div>
      <NavDrawer />
      <div
        style={{
          marginLeft: "235px",
        }}
      >
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oder;

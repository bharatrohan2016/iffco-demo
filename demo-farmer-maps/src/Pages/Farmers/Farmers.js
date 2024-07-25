import React from 'react';
import FarmerSearchBar from '../../Components/FarmerSearchBar/FarmerSearchBar';
import { useNavigate } from 'react-router-dom';
import { MaterialReactTable } from 'material-react-table';

const columnHeaders = [
    { key: "farmername", displayLabel: "Farmer Name" },
    { key: "state", displayLabel: "State" },
    { key: "district", displayLabel: "District" },
    { key: "block", displayLabel: "Block" },
    { key: "tehsil", displayLabel: "Tehsil" },
    { key: "village", displayLabel: "Village" },
    { key: "mobileNumber", displayLabel: "Mobile Number" },
    { key: "ownedLandArea", displayLabel: "Owned Land Area(Acres)" },
    { key: "leasedLandArea", displayLabel: "Leased Land Area(Acres)" }
];

const Farmers = () => {
    const navigate = useNavigate();
    const data = [
        {
            "farmername": "Ranjeet",
            "state": "Uttar Pradesh",
            "district": "Barabanki",
            "tehsil": "Sirauli Gauspur",
            "block": "Sirauli Gauspur",
            "village": "Murai",
            "mobileNumber": "6394966720",
            "ownedLandArea": 6,
            "leasedLandArea": 0,     
        },
        {
            "farmername": "Ravi Kishan",
            "state": "Uttar Pradesh",
            "district": "Agra",
            "tehsil": "Fatehabad",
            "block": "Sirauli Gauspur",
            "village": "Arrji Paliya",
            "mobileNumber": "6398966720",
            "ownedLandArea": 3,
            "leasedLandArea": 0,     
        },
        {
            "farmername": "Rajesh kumar",
            "state": "Uttar Pradesh",
            "district": "NawabGanj",
            "tehsil": "Masauli",
            "block": "Chandanpur",
            "village": "Chandanpur",
            "mobileNumber": "9398966720",
            "ownedLandArea": 3,
            "leasedLandArea": 0,     
        },
        {
            "farmername": "Keshav kumar",
            "state": "Rajasthan",
            "district": "Ajmer",
            "tehsil": "Ajmer",
            "block": "Ajaysar",
            "village": "Ajaysar",
            "mobileNumber": "8398966720",
            "ownedLandArea": 3,
            "leasedLandArea": 0, 
        }
    ];

    const columns = [
        {
          accessorKey: 'farmername',
          header: 'Farmer Name',
          Cell: ({ cell }) => {
              const handleNavigate = () => {
                  // Assuming you have the farmer's ID in your data
                  const farmerId = cell.row.original._id; // Adjust this according to your data structure
                  navigate(`/profile/123`); // Navigate to the desired route
              };

              return (
                  <button onClick={handleNavigate} style={{ color: "blue", textDecoration: 'underline', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                      {cell.row.original.farmername}
                  </button>
              );
          }
        },
        {
            accessorKey: 'state',
            header: 'State',
            Cell: ({ cell }) => {
                return <>{cell.getValue().toUpperCase()}</>
            }
        },
        {
            accessorKey: 'district',
            header: 'District',
            Cell: ({ cell }) => {
                return <>{cell.getValue().toUpperCase()}</>
            }
        },

        {
            accessorKey: 'tehsil',
            header: 'Tehsil',
            Cell: ({ cell }) => {
                return <>{cell.getValue().toUpperCase()}</>
            }
        },
        {
            accessorKey: 'block',
            header: 'Block',
            Cell: ({ cell }) => {
                return <>{cell.getValue().toUpperCase()}</>
            }
        },
        {
            accessorKey: 'village',
            header: 'Village',

            Cell: ({ cell }) => {
                return <>{cell.getValue().toUpperCase()}</>
            }
        },
        {
            accessorKey: 'mobileNumber',
            header: 'Contact'
        },
        {
            accessorKey: 'ownedLandArea',
            header: 'Owned Land Area',
            accessorFn: (data) => {
                return data.ownedLandArea + ' Acres';
            },
        },
        {
            accessorKey: 'leasedLandArea',
            header: 'Leased Land Area',
            accessorFn: (data) => {
                return data.leasedLandArea + ' Acres';
            },
        },
        {
            accessorKey: 'totalArea',
            header: 'Total Area',
            accessorFn: (data) => {
                return <>{data.leasedLandArea + data.ownedLandArea} Acres </>;
            },
        }
    ];

    return (
        <div>
            <h4>Farmers</h4>
            <FarmerSearchBar />
            <MaterialReactTable
                columns={columns}
                data={data}
                enableClickToCopy={true}
                enableRowSelection={true}
                selectAllMode='all'
                muiTableProps={{
                    sx: {
                        border: '1px solid rgba(81, 81, 81, 1)',
                    },
                }}
                muiTableHeadCellProps={{
                    sx: {
                        border: '1px solid rgba(81, 81, 81, 1)',
                    },
                }}
                muiTableBodyCellProps={{
                    sx: {
                        border: '1px solid rgba(81, 81, 81, 1)',
                    },
                }}

                muiTablePaginationProps={{
                    showFirstButton: true,
                    showLastButton: true,
                }}
                renderRowActions={({ row, table }) => (
                    <div style={{ display: 'flex' }}>

                        {
                            <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3" style={{ width: '90px' }}>
                                Edit <i className="typcn typcn-edit btn-icon-append"></i>
                            </button>
                        }
                        {
                            <button type="button" className="btn btn-sm btn-danger btn-icon-text" style={{ width: '90px' }} >
                                <>Delete <i className="typcn typcn-trash btn-icon-append"></i></>
                            </button>
                        }
                    </div>
                )}
            />
        </div>

    )
}

export default Farmers;

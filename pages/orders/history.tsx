import NextLink from 'next/link';
import { Grid, Typography, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { ShopLayout } from "../../components/layouts";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre completo', width: 300 },
    
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra informacion si esta pagada o no',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pagada" variant="outlined"/>
                    : <Chip color="error" label="No pagada" variant="outlined"/>
            )
        }
    },

    { 
        field: 'orden', 
        headerName: 'Ver orden',
        width: 200,
        description: 'Ir a la orden seleccionada',
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline='always'>
                        Ver orden
                    </Link>
                </NextLink>
            )
        }

    },
];

const row = [
    { id: 1, paid: true, fullname: 'Yoser Rodriguez' },
    { id: 2, paid: false, fullname: 'Yoser Rodriguez' },
    { id: 3, paid: true, fullname: 'Yoser Rodriguez' },
    { id: 4, paid: true, fullname: 'Yoser Rodriguez' },
    { id: 5, paid: false, fullname: 'Yoser Rodriguez' },
    { id: 6, paid: true, fullname: 'Yoser Rodriguez' },
    { id: 7, paid: true, fullname: 'Yoser Rodriguez' },
    { id: 8, paid: true, fullname: 'Yoser Rodriguez' },
]


const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription={"Historial de ordenes de clientes"} >

        <Typography variant="h1" component='h1'>
            Historial de ordenes
        </Typography>

        <Grid container>
            <Grid item xs={12} sx={{ height: 650, width:'100%' }}>
                <DataGrid 
                    rows={ row }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />
            </Grid>
        </Grid>

    </ShopLayout>
  )
}

export default HistoryPage
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styled from 'styled-components';


export type Task = {
    id: number;
    title: string;
    description: string;
    status: string;
    created_at: string;
    updated_at?: string;

}

interface DataTableProps{
    columns: GridColDef[];
    rows: Task[];
}

const TableContainer = styled.div`
    height: 60%;
    width: 100%;
    margin: 0 auto;
`

export function DataTable(props:DataTableProps){
    return (
        <TableContainer>
            <DataGrid
                rows={props.rows}    
                columns={props.columns}
                initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                pageSizeOptions={[5, 10]}
    
            />
        </TableContainer>
    )

}
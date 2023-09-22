import { DataTable, Task } from "../../components/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";
import { useState } from "react";

const width = window.innerWidth;

const rows = [
    {
      id: 1,
      title: "TArefa 1",
  
      description: "Mudar x",
      created_at: "2021-10-10",
      status: "Em andamento",
      updated_at: "2021-10-10",
      
  
    },
    {
      id: 2,
      description: "Mudar y",
      title: "Tarefa 2",
      created_at: "2021-10-10",
      status: "Em andamento",
      updated_at: "2021-10-10",
  
    },
      {
      id: 3,
      description: "Mudar z",
      title: "Tarefa 3",
      created_at: "2021-10-10",
      status: "Em andamento",
      updated_at: "2021-10-10",
      }
  
  
  
  ];
  

export function TaskPage() {
    const [tasks, setTasks] = useState<Task[]>(rows);
    const [ searchText, setSearchText ] = useState('');
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', type: 'number', width: (width / 100) * 3 },
        { field: 'title', headerName: 'Título', type: 'string', width: (width / 100) * 20},
        { field: 'description', headerName: 'Descrição', type: 'string', width: (width / 100) * 30 },
        
        { field: 'created_at', headerName: 'Created At', type: 'number', width: (width / 100) * 10 },
        { field: 'updated_at', headerName: 'Updated At', type: 'number', width: (width / 100) * 10 },
        { field: 'status', headerName: 'Status', type: 'string', width: (width / 100) * 15 },
        {
          field: 'actions',
          headerName: 'Actions',
          type: 'actions',
          width: (width / 100) * 10,
          getActions: () => [
            <Edit
              key="edit"
              onClick={(event) => {
                console.log('Editar');
              }}
            />,
            <Delete
              key="delete"
              onClick={(params: any) => {
                console.log(params);
                const newTasks = tasks.filter((task) => task.id !== params.row.id);
                setTasks(newTasks);
                console.log(newTasks);
              }}
            />,
          ],
        },
      ];

    const handleAddTask = () => {
        const newTask: Task = {
            id: 4,
            title: "Tarefa 4",
            description: "Mudar w",
            status: "Em andamento",
            created_at: "2021-10-10",
            updated_at: "2021-10-10",
        }
        console.log(newTask);
        setTasks([...tasks, newTask]);
    }
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }

    const searchedData = tasks.filter((doc) => {
        return JSON.stringify(doc).toLowerCase().includes(searchText.toLowerCase());
    });
   

    
    
    

  return (
    <>
      <h1>TaskPage</h1>
      <button onClick={handleAddTask}>Adicionar</button>
      <input type="text" placeholder="Pesquisar" onChange={handleSearch} />
      <DataTable rows={searchedData} columns={columns} />
    </>
  );
}

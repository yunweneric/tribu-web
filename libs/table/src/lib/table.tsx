import { useState, useEffect, FC } from 'react';
import axios from 'axios';
import DataTable, {
  TableColumn,
  TableStyles,
} from 'react-data-table-component';
import TableLoader from './table_loader';
const customStyles: TableStyles = {
  table: {
    style: {
      borderLeft: '0.2px solid #F3F4F6 !important',
      borderRight: '0.2px solid #F3F4F6 !important',
      borderTop: '0.2px solid #F3F4F6 !important',
      borderBottom: '0px solid #F3F4F6 !important',
    },
  },
  rows: {
    style: {
      minHeight: '60px',
      borderBottom: '0.2px solid #F3F4F6 !important',
    },
  },
  headCells: {
    style: {
      padding: '0 30px',
      backgroundColor: '#effef5',
    },
  },
  cells: {
    style: {
      padding: '0 30px',
    },
  },
};
export interface UserData {
  first_name: string;
  last_name: string;
  email: string;
}
export const AppTable: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const columns: TableColumn<UserData>[] = [
    {
      name: 'First Name',
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(3);

  const fetchUsers = async (page: number) => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`
    );

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    fetchUsers(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`
    );

    setData(response.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1); // fetch page 1 of users
  }, []);

  return (
    <div {...props}>
      <DataTable
        title=""
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        progressComponent={<TableLoader />}
        customStyles={customStyles}
      />
    </div>
  );
};

export default AppTable;

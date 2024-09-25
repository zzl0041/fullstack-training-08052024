import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users', error));
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Username',
      dataIndex: 'login',
      key: 'login',
      width: '45%',
    },
    {
      title: 'Image',
      dataIndex: 'avatar_url',
      key: 'avatar_url',
      render: (text) => <Avatar src={text} shape="square" size={64} />,
      width: '45%',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      pagination={false}
      onRow={(user) => ({
        onClick: () => navigate(`/users/${user.login}`),
      })}
      className="user-list-table"
    />
  );
};

export default UserList;

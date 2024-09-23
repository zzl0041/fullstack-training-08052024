import { Avatar, Table } from 'antd';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface GitHubUser {
  login: string;
  avatar_url: string;
  id: number;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://api.github.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
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
      render: (text: string) => <Avatar src={text} shape='square' size={64} />,
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
      style={{
        cursor: 'pointer',
        width: '40%',
        margin: '20px auto',
      }}
    />
  );
};

export default UserList;

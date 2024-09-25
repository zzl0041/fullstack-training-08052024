import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Avatar, Table } from 'antd';

const UserList = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users', error));
  }, []);

  const renderAvatar = (avatarUrl) => <Avatar src={avatarUrl} shape="square" size={64} />;

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
      render: renderAvatar,
      width: '45%',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      pagination={false}
      onRow={(user) => ({
        onClick: () => onUserSelect(user.login),
      })}
      className="user-list-table"
    />
  );
};

UserList.propTypes = {
  onUserSelect: PropTypes.func.isRequired,
};

export default UserList;

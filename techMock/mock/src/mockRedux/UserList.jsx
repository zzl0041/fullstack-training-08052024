import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { Card, CardContent, Typography, CircularProgress, Grid } from '@mui/material';

const UserList = () => {
    const dispatch = useDispatch();
    const usersState = useSelector(state => state.users); // Ensure key matches rootReducer
    const { loading, users = [], error } = usersState || {}; // Default users to an empty array

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>GitHub Users</Typography>
            {loading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}
            <Grid container spacing={2}>
                {users.map(user => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{user.login}</Typography>
                                <img src={user.avatar_url} alt={user.login} width={50} height={50} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default UserList;

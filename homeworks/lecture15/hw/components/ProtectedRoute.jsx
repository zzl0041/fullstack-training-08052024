import { useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const user = useMemo(() => localStorage.getItem('user'), []);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);
  return <>{children}</>;
}

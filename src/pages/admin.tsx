import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AdminPanel from '../widgets/admin-panel';
import { useSelector } from '../services/hooks';
import { jwt } from '../services/api';

const Page = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Admin = () => {
  const navigate = useNavigate();
  const { roles } = useSelector((state) => state.profile);
  const isLogged = useSelector(
    (state) => state.system.isLoggedIn
        && !!state.profile.username,
  )
    && jwt.test();

  React.useEffect(() => {
    if (!isLogged) {
      navigate('/login');
    }
    if (!roles?.includes('admin')) {
      navigate('/');
    }
  }, [isLogged, roles, navigate]);

  return (
    <Page>
      <AdminPanel />
    </Page>
  );
};

export default Admin;

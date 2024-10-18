import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Exibindo perfil do usuário com ID: {id}</p>
    </div>
  );
}

export default UserProfile;

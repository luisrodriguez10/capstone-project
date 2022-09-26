import axios from 'axios';

export const updateUser = (user) => {
  return async () => {
    await axios.put(`/api/users/${user.id}`, user);
  };
};

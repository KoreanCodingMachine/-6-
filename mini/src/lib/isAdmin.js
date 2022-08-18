const isAdmin = () => {
  return !!localStorage.getItem('access-token');
};

export default isAdmin;

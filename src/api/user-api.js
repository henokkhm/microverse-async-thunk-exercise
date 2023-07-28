const apiUrl = 'https://randomuser.me/api/?results=5';

const fetchAll = () =>
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });

const userAPI = { fetchAll };

export default userAPI;

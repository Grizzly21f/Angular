const baseURL = 'https://jsonplaceholder.typicode.com';

const users = `${baseURL}/users`;

const urls = {
  users: {
    users,
    userPosts: (id: number): string => `${users}/${id}/posts`
  }
};

export {
  urls
};

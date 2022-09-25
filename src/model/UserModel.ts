import { User } from '../domain/User';

import users from '../user.json';

/**
 * Get all the users.
 * @returns {Promise<User[]>}
 */
 export const getAllUser = async (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

/**
 * Get a user.
 * 
 * @returns {Promise<User[]>}
 */
 export const getUser = async (id: number): Promise<User> => {
    return new Promise((resolve, reject) => {
      const user = users.find(user => user.id === id);

      if (user) {
        resolve(user);
      }

      reject({ statusCode: 404, message: 'User not found' });
    });
  };
  
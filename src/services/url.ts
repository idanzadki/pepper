interface Params {
  id?: string;
  phone_number?: string;
  email?: string;
}

export const apiUrl = ({ id, phone_number, email }: Params = {}) => ({
  baseUrl:'baseUrl',
  users: {
    getById: `/user/byId/${id}`,
    register: '/user/insert_user',
    auth: `/user/authentication`, //phone_number
    getByPhone: '/user/byphone',
    login: `/user/login/${email || phone_number}`,
    update: '/user',
  },
 
});

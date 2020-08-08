import getApi from './GetApi';

const UserApi = {
  getAll: (params) => {
    const url = '/students';
    return getApi.get(url, { params });
  },

  insert: (params) =>{
    const url = '/students/create/student' + params;
    return getApi.get(url);
  },

  delete: (id) =>{
    const url = '/students/delete/' + id;
    return getApi.get(url);
  },

  update: (params) =>{
    const url = '/students/update/' + params;
    return getApi.get(url);
  },

  findbyid: (id) =>{
    const url = '/students/' + id;
    return getApi.get(url);
  }

}
export default UserApi;

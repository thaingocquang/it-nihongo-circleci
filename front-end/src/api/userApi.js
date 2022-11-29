import axiosClient from './axiosClient'

const userApi  = {
    getUserById: (id) => {
        const url = `api/users/${id}`
        return axiosClient.get(url)
    },
    createNew: (credentials) => {
        const url = 'api/users'
        return axiosClient.post(url, credentials)
    },
    updateById: (id, credentials) => {
        const url = `api/users/${id}`
        return axiosClient.patch(url, credentials)
    },
}

export default userApi 

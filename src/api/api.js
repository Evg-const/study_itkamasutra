import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "api-key": "04fa5cad-6b3b-4f27-af9c-0c0605d2397a"
    }
})

export const userAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}

export const authApi ={
    getMyProfile(){
        return  instance.get(`auth/me`);
    },
    login(email, password, rememberMe){
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }


}
export const profileAPI ={
    getProfile(userId){
        return  instance.get('profile/' + userId)
    },
    getStatus(userId){
        return  instance.get('profile/status/' + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    }
}






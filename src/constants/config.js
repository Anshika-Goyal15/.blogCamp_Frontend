
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message : 'Data is being loaded, Please wait'
    },
    success: {
        title: 'Success',
        message: 'Data successfully loaded'
    },
    responseFailure:{
        title: 'Error',
        message:'Error occured while fetching respose, Try again later'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while requesting for data'
    },
    networkError:{
        title:'Error',
        message: 'Unable to connect, check internet connectivity and try again later'
    }
}

export const SERVICE_URLS = {
    userSignup : {url: '/signup', method: 'POST'},
    userLogin : {url: '/login', method: 'POST'},
    uploadFile: {url: '/file/upload',method: 'POST'},
    createPost: {url : 'create', method: 'POST'},
    getAllPosts: {url:'/posts',method: 'GET', params: true},
    getPostById: {url:'/post', method: 'GET', query: true},
    updatePost: {url: '/update' ,method: 'PUT', query: true},
    deletePost: {url: '/delete', method: 'DELETE', query: true},
    
}
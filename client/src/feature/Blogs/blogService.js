import api from '../../Intercepter/Intercepter'
const API_URL='/posts'

// create posts
const createPosts = async (postsData) => {
    
    const response = await api.post(API_URL, postsData);
    return response.data.data;
};

// Get all posts
const getAllPosts = async () => {
    const response = await api.get(API_URL);
    console.log(response.data.data,'response')
    return response.data.data.posts;
};

// Delete movie
const deletePost = async (postData) => {
    const response = await api.post(API_URL);
    return response.data.message;
};

const blogService={
    createPosts,
    getAllPosts,
    deletePost
}
export default blogService
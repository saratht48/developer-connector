import api from '../../Intercepter/Intercepter'
import { authurl } from '../../Constants/apiurl'

const API_URL=authurl;

// Add new profile
const createProfile = async (profileData) => {
    const response = await api.post(API_URL+'/updateProfile', profileData);
    return response.data.data;
};

// Get profile
const getProfile = async () => {
    const response = await api.get(API_URL+'/myprofile');
    return response.data.data;
};


const ProfileService={
    createProfile,
    getProfile
}
export default ProfileService
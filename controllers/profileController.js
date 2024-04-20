const profileService = require('../services/profileService');
const { upload } = require('../middlewares/multer');

const getProfile = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Anda tidak terautentikasi',
            });
        }
        const id_user = user.id_user;
        const userData = await profileService.rProfileService(id_user);

        res.status(200).json({
            success: true,
            message: 'Data profil didapatkan',
            data: userData,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server',
        });
    }
}

const updateProfile = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Anda tidak terautentikasi',
            });
        }
        const id_user = user.id_user;
        const { username, email, alamat, no_hp } = req.body;
        
        const currentUserData = await profileService.rProfileService(id_user);
        console.log(currentUserData);
        const updatedData = {
            username: username || currentUserData.username,
            password: currentUserData.password, 
            email: email || currentUserData.email,
            alamat: alamat || currentUserData.alamat, 
            no_hp: no_hp || currentUserData.no_hp,
            role: currentUserData.role,
        };
        console.log(updatedData);

        const userData = await profileService.uProfileService(id_user, updatedData);

        if (userData) {
            res.status(200).json({
                success: true,
                message: 'Data profil berhasil diperbarui',
                data: userData,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User tidak ditemukan',
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan dalam server',
        });
    }
}

const addProfileImage = async (req, res) => {
    try {
        const id_user = req.user.id_user;
        const fileName = req.file.filename;
        const uploadedProfile = await profileService.cProfileImage(id_user, fileName);
        if(uploadedProfile){
            return res.status(200).json({
                success: true,
                message: "file berhasil di upload",
            });
        }else{
            res.status(404).json({
                success: false,
                message: 'file gagal diupload',
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error : error
        });
    }
}

module.exports = {
    getProfile,
    updateProfile,
    addProfileImage,
}
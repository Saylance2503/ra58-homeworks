import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto } from '../store/profileSlice';

const ProfilePhoto = () => {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.profile.photos);

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const photoData = event.target.result;
            dispatch(addPhoto(photoData));
            setSelectedPhoto(photoData);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            {selectedPhoto && <img src={selectedPhoto} alt="Profile" width="200" height="200" />}
            <div style={{ display: 'flex' }}>
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Uploaded Photo ${index}`} width="200" height="200" />
                ))}
            </div>
        </div>
    );
};

export default ProfilePhoto;

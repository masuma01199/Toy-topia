import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function MyProfile() {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      toast.success("✅ Profile updated successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      <div className="flex flex-col items-center mb-6">
        <img
          src={user.photoURL || "https://via.placeholder.com/120"}
          alt="avatar"
          className="w-24 h-24 rounded-full mb-2"
        />
        <p className="font-semibold">{user.displayName}</p>
        <p className="text-gray-500">{user.email}</p>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input input-bordered w-full"
        />
        <input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary w-full">Save Changes</button>
      </form>
    </div>
  );
}

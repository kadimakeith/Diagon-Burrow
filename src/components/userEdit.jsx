import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Sidebar from './sidebar'
import { db }from '../utils/firebaseInit';

const UserEdit = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setuser] = useState({ name: '', contactNumber: '', drivingLicenceNumber: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchuser = async () => {
      setLoading(true);
      const userRef = doc(db, 'drivers', userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setuser(userSnap.data());
      } else {
        alert('user not found!');
        navigate('/users');
      }
      setLoading(false);
    };

    fetchuser();
  }, [userId, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuser((prevuser) => ({ ...prevuser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userRef = doc(db, 'drivers', userId);
    await updateDoc(userRef, user);
    setLoading(false);
    navigate('/users/update');
  };

  return (
    <div className=" flex">
      <Sidebar/>
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit user</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={user.contactNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="drivingLicenceNumber" className="block text-sm font-medium text-gray-700">Driving Licence Number</label>
            <input
              type="text"
              id="drivingLicenceNumber"
              name="drivingLicenceNumber"
              value={user.drivingLicenceNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 transition duration-300 ease-in-out"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;


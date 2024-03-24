import { useContext } from 'react';
import AuthContext from '../Context/JWTAuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;

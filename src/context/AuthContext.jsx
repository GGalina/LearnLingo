import React, {
    useEffect,
    createContext,
    useContext,
    useState
} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registeredUserName, setRegisteredUserName] = useState('');
    
    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn === 'true') {
            setIsLoggedIn(true);

            const storedUserName = localStorage.getItem('registeredUserName');
            if (storedUserName) {
                setRegisteredUserName(storedUserName);
            }
        }
    }, []);
    
    const setRegistrationStatus = (status, userName) => {
        setIsLoggedIn(status);
        
        if (status) {
            setRegisteredUserName(userName);
        }
    };
    
    const userLogOut = () => {
        setIsLoggedIn(false);
        setRegisteredUserName('');
    };

  return (
    <AuthContext.Provider value={{ isLoggedIn, registeredUserName, setRegistrationStatus, userLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

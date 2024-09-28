import { useState, useEffect } from 'react';


const useOnlineStatus = () => {

    //check if online status
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        //add event listener
        window.addEventListener('offline', ( ) => setOnlineStatus(false));
        window.addEventListener('online', ( ) => setOnlineStatus(true));
    }, []);

    //return boolean
    return onlineStatus;
}

export default useOnlineStatus;
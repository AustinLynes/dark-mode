import {useEffect}from 'react';

import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = initalVal =>{
     const [darkMode, setDarkMode] = useLocalStorage('dark-mode');
     const toggleMode = e => {
        e.preventDefault();
        alert(darkMode.getItem('dark-mode'))
        setDarkMode(!darkMode);
      };

      useEffect(() => {
        window.localStorage['dark-mode'] === 'true' ? document.body.classList.add('dark-mode'): document.body.classList.remove('dark-mode')
      }, [darkMode]);

    return [darkMode, setDarkMode, toggleMode];
}
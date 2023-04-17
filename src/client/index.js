import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

alert("I EXIST");

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service worker registered: ', registration);
      }).catch(registrationError => {
        console.log('Service worker registration failed: ', registrationError);
      });
    });
  }
  
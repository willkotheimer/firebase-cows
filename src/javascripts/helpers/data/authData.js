import firebase from 'firebase/app';
import 'firebase/auth';
import pasture from '../../components/pasture/pasture';
import userData from './userData';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      userData.getUser(user);
      $('#auth').addClass('hide');
      $('#pasture').removeClass('hide');
      $('#pasture').html(`<img src='${user.photoURL}' alt='${user.displayName}'`);
      pasture.buildCows();
    } else {
      // person is not logged in
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#pasture').addClass('hide');
    }
  });
};

export default { checkLoginStatus };

import { uport } from './../../../util/connectors.js'
import { browserHistory } from 'react-router'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return function(dispatch) {
    // UPort and its web3 instance are defined in ./../../../util/connectors.
    // Request uPort persona of account passed via QR.
    uport.requestCredentials({
      requested: ['name', 'phone', 'country', 'email'],
      notifications: true
    }).then((credentials) => {
      // Log credentials if received.
      // console.log(credentials)

      dispatch(userLoggedIn(credentials))

      // Used a manual redirect here as opposed to a wrapper.
      // This way, once logged in a user can still access the home page.
      var currentLocation = browserHistory.getCurrentLocation()

      if ('redirect' in currentLocation.query)
      {
        return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
      }

      return browserHistory.push('/profile')
    }).catch(function(error) {
      console.log("Error requesting uPort credentials: " + error);
    })
  }
}

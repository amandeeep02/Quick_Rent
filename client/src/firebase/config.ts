import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBMDQeHJyrlnGwfidxifAY_4zjrp0tTL0s',
  authDomain: 'quickrent-fc51f.firebaseapp.com',
  projectId: 'quickrent-fc51f',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

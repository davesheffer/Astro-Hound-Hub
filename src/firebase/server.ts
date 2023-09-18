import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
const serviceAccount = {
  "type": "service_account",
  "project_id": "hound-hub",
  "private_key_id": "38ff62377946b1e461d188ccf2031b9ef6f305f9",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/ljAO9PoaVp1d\nXdHjyPL5g9j3sY1hOrxNuYkux7bFxjKbPJEmdbOnOJeIq7zmEqzGGRCNxJ3cn8Ee\n4aF4pGaRe6dQGa2N6+Vxi+LfQi692+vcSYiMCooDWOU70MCHojbvxgSo0ilKF3l1\nu63e79+Y3efCM2nM9dlm1P3tM3ECff3PdL2GWQbnmB39HD50J6zDv8uV+WGbowv3\n1wCIOkNkLJpiADpwlwFh9PF34j/7QK+NwRckEHbZD80sJFVq4fLdnULgRxU4KY3k\nE/bvM5kivV7nc/n87mKdrVfFziXU3UultzxBRD0qLM1Nti0ME1l4AB9MWSFu20KB\ne576UyttAgMBAAECggEAJfbyO4iGhhEbWmzUwoVnxpN+u2ii+j0sIt/NBCjdulfB\n3/qyzbL9wHmJp7LWeiYBuDivy9QGLzm2CHNQLsqvK42cFFaeSnUQML22XaTtA8Dw\nfmTQ6uVMv4iOVlnRyR7XMZDlC/onZe/8aNzhwb95aL6yZgyPnuap58N1tRsgPgyW\nsDC6Ix33RvX70UmYcTk0OwBiWfRlu3Z8slZuUMz0+cfsafb631t9quAtfIogkeCP\n7jgjpLsqT0p2LZZHBGUG9Lb9bkEfC5WQKJjKMYSJNPdTzHOrcRjsnR7DftUJ+MeS\ngsDc+iuEd8QQTTz/QclKvLqAfUMdkE1Fwhdy+4r4YQKBgQD1r+TV6phTOAYHgXJ8\ni6YdkL/fOrBSYkHymhZ1K1HLa+1txHV51afZ0alJQ1rDUkeMqkZ3/SXnQcfpA5CZ\n6+ss17X/WsX40cLUr6axwkpjD1ddNhHrc145Bb8ZHeKtrJVpvj2lvNsthuzA02c3\n0tn2oSbgBdxF2/d5r3s236LcYQKBgQDHoPDyhHIbEGNMxUVbkKUhnSsdtG9K/CsA\nDJGrksbVdf/D+Cq7RrXy3DnPaKvVnzzSlacvLGFfJMaoSTtGoKqWin1zHL3kpPTY\nVl4gGGQKKVPs1OkLYg6klo7g+c3vJ6JkILPZLI6o5qQudLvZayUU9IVbVKsx9ITH\nhF16L4QKjQKBgQCQkeQyDE1+CqVhnUZlCzfAhgChtsMydycfPpSgddE3xlZ8FPKb\nsqGGhtz6g2vRK4V2vGujB49aOVcNQk/AgxZr2LL7g8qi06u1w3Zve0iSaeCatMpu\npgB3xW3htbhBQiDZjFxyPmMqsw51mPBP5P7lJYbepBQt93X0YNI8Q/RtgQKBgQDH\nD+aUfpvl/u52FFS4HMF9hmMDKPS9mj0qvF3Z7+/T1emoOeQqgTVYKmB/QUnwJ+yX\ntOFUefXS0TJDh1rTb80LdqfnzKZSxGbe/yi26nt/YnysshZ84lflqbhqAM9ohmY5\nYB7XFcZgCDV5ma/j+yKsBbShQQnBM6nf5k7sU0tg1QKBgHg8U2ih92RdXYsMgyxZ\nvjDMkbILKncg8EcruS2n5tCMXqw6moBtL4QHFWfbZMCax5A+8aDZ73OjNp4YPzg1\njAEcydj9cwUgvznfaa0ZzigI0naF/IqdklJfkz/oqA5o+Gkpg5MHSejJIQ8r7Q4U\nz/S1R20xQN6wupN4RATFdH9P\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-30qbp@hound-hub.iam.gserviceaccount.com",
  "client_id": "102582934154796314472",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-30qbp%40hound-hub.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

 export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
}, 'raped');

export const auth = getAuth(app);
export const firestore = getFirestore(app);
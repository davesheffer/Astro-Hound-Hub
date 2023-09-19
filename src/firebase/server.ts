import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = {
  "type": "service_account",
  "project_id": import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  "private_key_id": import.meta.env.FIREBASE_PUBLIC_PRIVATE_KEY_ID,
  "private_key":import.meta.env.PUBLIC_FIREBASE_PRIVATE_KEY,
  "client_email": import.meta.env.PUBLIC_FIREBASE_CLIENT_EMAIL,
  "client_id": import.meta.env.PUBLIC_FIREBASE_CLIENT_ID,
  "auth_uri": import.meta.env.PUBLIC_FIREBASE_AUTH_URI,
  "token_uri": import.meta.env.PUBLIC_FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": import.meta.env.PUBLIC_FIREBASE_AUTH_CERT_URL,
  "client_x509_cert_url": import.meta.env.PUBLIC_FIREBASE_CLIENT_CERT_URL,
  "universe_domain": "googleapis.com"
};

 export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
},'hound-hub-server');
export const auth = getAuth(app);
export const firestore = getFirestore(app);
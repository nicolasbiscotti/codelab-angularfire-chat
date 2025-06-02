import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import {
  provideFunctions,
  getFunctions,
  connectFunctionsEmulator,
} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'chat-2025-e47fa',
        appId: '1:821850267006:web:a0889691245f8c6dece72f',
        storageBucket: 'chat-2025-e47fa.firebasestorage.app',
        apiKey: 'AIzaSyAhKOXRYmlJSQiaw3CaonXUbcW4TL2MDb0',
        authDomain: 'chat-2025-e47fa.firebaseapp.com',
        messagingSenderId: '821850267006',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ],
};

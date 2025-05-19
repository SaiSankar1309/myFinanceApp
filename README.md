**Angular + Firebase Test Sample Project**

This is a test project demonstrating how to connect an Angular frontend with a Firebase backend.

**Features**

- Angular frontend for data entry and display
- Firebase (Firestore) backend for data storage
- Real-time data synchronization between frontend and backend

**Getting Started**

1. **Clone the repository**  
git clone <your-repo-url>

2. **Install dependencies**  
npm install

3. **Set up Firebase**  
- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com).
- Create a Firestore database (in test mode for development).
- Copy your Firebase configuration into `src/environments/environment.ts`:
  ```
  export const environment = {
    firebase: {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    }
  };
  ```

4. **Run the app**  
ng serve

Visit [http://localhost:4200](http://localhost:4200) in your browser.

## Purpose

This project is for testing and demonstration purposes only.  
It shows how to connect Angular with Firebase for basic CRUD operations.

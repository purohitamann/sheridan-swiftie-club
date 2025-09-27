
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, addDoc, arrayUnion, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
// Your web app's Firebase configuration
const firebaseConfig = {

  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'it';
auth.useDeviceLanguage();
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export function googleAuth() { signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log('User signed in:', user);
    
  }).catch(() => {
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });}
// Create a new user with email and password
export const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created:', userCredential.user);
  
    return userCredential.user;
    
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    // Initialize the user's Firestore structure
    await initializeUserStructure(userId);

    console.log('User signed up and structure initialized');
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Sign in an existing user with email and password
export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

// Sign out the current user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

// Get user data from Firestore
export const getUserFromDatabase = async (userId: string) => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.error('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Save user data to Firestore
// export const saveUserToDatabase = async (userId: string, userData: any) => {
//   try {
//     await setDoc(doc(firestore, 'users', userId), userData);
//     console.log('User data saved');
//     // await initializeUserStructure(userId);

//     // console.log('User signed up and structure initialized');
//   } catch (error) {
//     console.error('Error saving user data:', error);
//     throw error;
//   }
// };

export const initializeUserStructure = async (userId: string) => {
  try {
    // Create a user document in the 'users' collection
    const userDocRef = doc(firestore, 'users', userId);
    console.log('User doc ref:', userDocRef); 
    // Set initial data for the user document, e.g., empty inventory
    await setDoc(userDocRef, {
      createdAt: new Date(),
      // Add any other default user data here
    });

    // Optionally, create an initial empty inventory or other collections
    // Here, we just set up an empty document to show structure
    const inventoryDocRef = doc(firestore, 'users', userId, 'inventory', 'exampleItem');
    await setDoc(inventoryDocRef, {
      name: 'Initial Item',
      quantity: 0,
      description: 'Example item to show structure'
    });

    console.log('User structure initialized');
    console.log('User doc ref:', userDocRef);
  } catch (error) {
    console.error('Error initializing user structure:', error);
    throw error;
  }
};

// Upload image to Firebase Storage
export const uploadImageToStorage = async (file: File, path: string): Promise<string> => {
  try {
    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      throw new Error('File size must be less than 5MB');
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Save giveaway entry to Firestore
export const saveGiveawayEntry = async (entryData: {
  name: string;
  email: string;
  imageUrl: string;
  timestamp: Date;
}) => {
  try {
    const giveawayDocRef = doc(firestore, 'fall-2025', 'giveaway');
    
    // First, get the document to see if it exists
    const docSnapshot = await getDoc(giveawayDocRef);
    
    if (docSnapshot.exists()) {
      // Document exists, update it by adding to the entries array
      await updateDoc(giveawayDocRef, {
        entries: arrayUnion(entryData),
        lastUpdated: new Date()
      });
    } else {
      // Document doesn't exist, create it with the first entry
      await setDoc(giveawayDocRef, {
        entries: [entryData],
        createdAt: new Date(),
        lastUpdated: new Date()
      });
    }
    
    console.log('Giveaway entry saved successfully');
  } catch (error) {
    console.error('Error saving giveaway entry:', error);
    throw error;
  }
};

// Upload selfie and save giveaway entry
export const submitGiveawayEntry = async (
  name: string, 
  email: string, 
  selfieFile: File
): Promise<void> => {
  try {
    // Validate inputs
    if (!name.trim()) {
      throw new Error('Name is required');
    }
    if (!email.trim()) {
      throw new Error('Email is required');
    }
    if (!selfieFile) {
      throw new Error('Selfie image is required');
    }

    // Create a unique filename for the selfie
    const timestamp = Date.now();
    const filename = `${timestamp}_${selfieFile.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    const imagePath = `giveaway/fall-2025/selfies/${filename}`;
    
    // Upload the image to Firebase Storage
    console.log('Uploading image to Firebase Storage...');
    const imageUrl = await uploadImageToStorage(selfieFile, imagePath);
    console.log('Image uploaded successfully:', imageUrl);
    
    // Prepare the entry data
    const entryData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      imageUrl,
      timestamp: new Date()
    };
    
    // Save the entry to Firestore
    console.log('Saving entry to Firestore...');
    await saveGiveawayEntry(entryData);
    console.log('Entry saved successfully');
  } catch (error) {
    console.error('Error submitting giveaway entry:', error);
    throw error;
  }
};
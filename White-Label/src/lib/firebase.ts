// Firebase configuration - temporarily disabled for demo
// Uncomment and add your Firebase config when ready

export const auth = {
  currentUser: null,
  onAuthStateChanged: (callback: any) => {
    // Mock auth state
    setTimeout(() => callback(null), 100)
    return () => {}
  }
} as any

export const db = {} as any
export const storage = {} as any

// Mock functions for demo
export const signInWithEmailAndPassword = async (auth: any, email: string, password: string) => {
  if (email === 'admin@demo.com' && password === 'demo123') {
    return { user: { email } }
  }
  throw new Error('Invalid credentials')
}

export const signOut = async () => {
  console.log('Signed out')
}

export default {}
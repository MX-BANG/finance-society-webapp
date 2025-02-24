interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthResponse {
  user: User | null;
  error?: string;
}

interface StoredUser {
  id: string;
  email: string;
  password: string;
}

const USERS_STORAGE_KEY = 'finance_society_users';
const CURRENT_USER_KEY = 'finance_society_current_user';

const getStoredUsers = (): Record<string, StoredUser> => {
  try {
    const usersStr = localStorage.getItem(USERS_STORAGE_KEY);
    return usersStr ? JSON.parse(usersStr) : {};
  } catch {
    return {};
  }
};

const setStoredUsers = (users: Record<string, StoredUser>) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export const authApi = {
  async register(email: string, password: string): Promise<AuthResponse> {
    const users = getStoredUsers();
    
    if (users[email]) {
      return { user: null, error: 'User already exists' };
    }

    const newUser: StoredUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      password
    };

    // Store user in localStorage
    users[email] = newUser;
    setStoredUsers(users);

    // Set current user in cookie and localStorage
    const userData = { id: newUser.id, email: newUser.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
    setCookie(CURRENT_USER_KEY, JSON.stringify(userData));

    return { user: userData };
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const users = getStoredUsers();
    const user = users[email];

    if (!user || user.password !== password) {
      return { user: null, error: 'Invalid email or password' };
    }

    // Set current user in cookie and localStorage
    const userData = { id: user.id, email: user.email };
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
    setCookie(CURRENT_USER_KEY, JSON.stringify(userData));

    return { user: userData };
  },

  logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    deleteCookie(CURRENT_USER_KEY);
  },

  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem(CURRENT_USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
};

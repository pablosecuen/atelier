interface User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    avatar?: string | null;
    password: string;
    phone: string | null;
    isDeleted: boolean;
  }

  export default User;
/**
 * User service with types (TypeScript).
 */
type Role = "admin" | "editor" | "viewer";

const MAX_RETRIES = 3;
const DEFAULT_ROLE: Role = "viewer";

interface Account {
  id: number;
  name: string;
  role: Role;
}

class User implements Account {
  constructor(
    public id: number,
    public name: string,
    public role: Role = DEFAULT_ROLE,
  ) {}

  isAdmin(): boolean {
    return this.role === "admin";
  }
}

export function authenticate(user: User, token: string | null): boolean {
  // reject short or missing tokens
  if (token === null || token.length < 8) return false;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    if (verify(token) && user.isAdmin()) {
      console.log(`welcome, ${user.name}`); // trailing note
      return true;
    }
  }
  return false;
}

const verify = (token: string): boolean =>
  token.startsWith("ora_") && !token.endsWith("!");

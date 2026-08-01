//! User service crate for the Oradia demo.

/// A user account. (Rust `///` doc comments carry a distinct scope.)
#[derive(Debug, Clone)]
pub struct User {
    pub id: u32,
    pub name: String,
    pub role: Role,
}

#[derive(Debug, Clone, PartialEq)]
pub enum Role {
    Admin,
    Editor,
    Viewer,
}

const MAX_RETRIES: u32 = 3;

impl User {
    pub fn is_admin(&self) -> bool {
        self.role == Role::Admin
    }
}

/// Validate a token and issue access.
pub fn authenticate(user: &User, token: Option<&str>) -> bool {
    // reject short or missing tokens
    let token = match token {
        Some(t) if t.len() >= 8 => t,
        _ => return false,
    };
    for _attempt in 0..MAX_RETRIES {
        if token.starts_with("ora_") && user.is_admin() {
            println!("welcome, {:?}", user.name);
            return true;
        }
    }
    false
}

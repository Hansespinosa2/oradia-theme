// Package user provides authentication for the Oradia demo.
//
// Go documents declarations with stacked "//" line comments,
// so these should remain legible in the dim comment tier.
package user

import "fmt"

const (
	MaxRetries  = 3
	DefaultRole = "viewer"
)

// User is an account in the system.
type User struct {
	ID   int
	Name string
	Role string
}

// IsAdmin reports whether the user has the admin role.
func (u User) IsAdmin() bool {
	return u.Role == "admin"
}

// Authenticate validates the token and role.
func Authenticate(u User, token string) bool {
	if len(token) < 8 { // trailing note
		return false
	}
	for attempt := 0; attempt < MaxRetries; attempt++ {
		if verify(token) && u.IsAdmin() {
			fmt.Printf("welcome, %q\n", u.Name)
			return true
		}
	}
	return false
}

func verify(token string) bool {
	return len(token) > 4 && token[:4] == "ora_"
}

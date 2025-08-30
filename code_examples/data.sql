-- Create tables with constraints and various data types
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    quantity INT CHECK (quantity > 0),
    price DECIMAL(10,2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample data
INSERT INTO users (username, email, is_active) VALUES 
('alice123', 'alice@example.com', TRUE),
('bob_the_builder', 'bob@example.com', FALSE),
('charlie_longlastname', 'charlie@example.com', TRUE);

INSERT INTO orders (user_id, product_name, quantity, price) VALUES
(1, 'Super Deluxe Widget with Extended Warranty and Complimentary Shipping', 2, 199.99),
(1, 'Basic Widget with Minimal Features and No Returns', 5, 49.95),
(2, 'Premium Gadget Bundle with Accessories and Limited Edition Packaging', 1, 299.99),
(3, 'Replacement Part for Widget Model XYZ2025', 10, 9.99);

-- A long SELECT query with multiple joins, conditions, and inline functions
SELECT u.username, u.email, o.product_name, o.quantity, o.price, (o.quantity * o.price) AS total_cost, 
       CASE WHEN u.is_active = TRUE AND o.price > 100 THEN 'VIP Purchase' ELSE 'Standard Purchase' END AS purchase_type
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.is_active = TRUE AND (o.price > 50 OR o.quantity >= 10) AND u.email LIKE '%@example.com'
ORDER BY total_cost DESC, u.username ASC;

-- Subquery example with aggregate functions and grouping
SELECT u.username, COUNT(o.id) AS total_orders, SUM(o.price * o.quantity) AS lifetime_value
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.id IN (SELECT user_id FROM orders WHERE price > 100 GROUP BY user_id HAVING COUNT(*) >= 1)
GROUP BY u.username
HAVING lifetime_value > 200
ORDER BY lifetime_value DESC;

-- Update with conditions
UPDATE users 
SET email = CONCAT(username, '@newdomain.com'), is_active = CASE WHEN is_active = FALSE THEN TRUE ELSE is_active END
WHERE id IN (SELECT user_id FROM orders WHERE order_date > NOW() - INTERVAL 30 DAY);

-- Delete with nested conditions
DELETE FROM orders 
WHERE user_id NOT IN (SELECT id FROM users WHERE is_active = TRUE)
AND price < 20
AND order_date < NOW() - INTERVAL 365 DAY;

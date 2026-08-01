-- LOOK AT: columns / data structure should be the easiest thing to read
SELECT
    i.id,
    i.name,
    i.price,
    i.active,
    COUNT(o.id)        AS order_count,
    SUM(o.quantity)    AS units_sold,
    ROUND(AVG(o.price), 2) AS avg_price
FROM items AS i
LEFT JOIN orders AS o ON o.item_id = i.id
WHERE i.active = TRUE
  AND i.price > 5.00
  AND i.created_at >= '2026-01-01'
GROUP BY i.id, i.name, i.price, i.active
HAVING COUNT(o.id) > 0
ORDER BY units_sold DESC
LIMIT 25;

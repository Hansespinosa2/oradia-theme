// LOOK AT: names/types pop; plain vars & strings sit back; `true` bold; ${} popout; bracket ladder
type Item = { id: number; name: string; price: number; active: boolean };

export function tallyItems(items: Item[], opts: { taxRate: number }): { total: number; ok: boolean } {
  const subtotal = items.reduce((n, i) => (i.active ? n + i.price : n), 0);
  const total = subtotal * (1 + opts.taxRate);
  const label = `USD ${total.toFixed(2)} across ${items.length} item(s)`;
  console.log(label);
  return { total, ok: total > 0 };
}

const seed: Item[] = [
  { id: 1, name: "widget", price: 9.99, active: true },
  { id: 2, name: "gizmo", price: 4.5, active: false },
];

const counter = seed.length;          // put your cursor on `counter` → all uses highlight
const doubled = counter + counter;
console.log(counter, doubled, tallyItems(seed, { taxRate: 0.08 }));

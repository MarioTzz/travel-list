export default function Item({ item, onDelete, onToggle }) {
  return (
    <li>
      {/* 对于checkbox的属性 checked是默认被选中，value只是代表该dom的值  */}
      <input type='checkbox' value={item.packed} onChange={() => onToggle(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}

        {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}> ❌</button>
    </li>
  );
}

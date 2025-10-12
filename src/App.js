import { useState } from 'react';
import Logo from './Component/Logo';
import Form from './Component/Form';
import PackingList from './Component/PackingList';
import Stats from './Component/Stats';

export default function App() {
  // 将公共的state提升到父组件
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems(items => [...items, item]);
  }
  // 删除的话 用filter ？ 然后不断向下传递，传递到Item组件中(建议用唯一标识id来进行删除)
  function handleDelIems(id) {
    setItems(items.filter(i => i.id !== id));
    console.log(items);
  }
  //用来对Item的checkbox进行操作
  function handleToggleItems(id) {
    setItems(items => items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }
  function handleClear() {
    // 定一个alert窗口
    const confirm = window.confirm('Are you sure?');
    if (confirm) setItems([]);
  }
  return (
    <div className='app'>
      <Logo />
      <Form onHandleItems={handleItems} />
      <PackingList items={items} onDelete={handleDelIems} onToggle={handleToggleItems} onClear={handleClear} />
      <Stats items={items} />
    </div>
  );
}

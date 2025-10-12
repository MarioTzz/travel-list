import { useState } from 'react';

export default function Form({ onHandleItems }) {
  //控制元件状态更新分三步
  //1.设置state
  //2.将state中的变量设置到对应的组件中
  //3.在组件中用set变量函数进行更新，保证界面与数据同步

  // 获取当前input的输入值，并且进行对应的设置更新
  const [description, setDescription] = useState('');

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    // console.log(newItem);
    onHandleItems(newItem);
    // 提交后要进行数据的重制
    setDescription('');
    setQuantity(1);
  }
  return (
    // form表单的作用 对于回车或者表单中的按钮button，都会起到submit的作用，不需要在button中定义一个onClick
    //在这里提交后，e能直接获取当前对象的数据，在传统js可以直接用获取的数据进行显示，在这用State更新显示
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* 对于发生改变时，用onChange */}
      <input type='text' placeholder='Item....' value={description} onChange={e => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

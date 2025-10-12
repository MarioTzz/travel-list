export default function Stats({ items }) {
  if (!items.length) return <footer className='stats'>Add some travel plan!</footer>;
  const numItems = items.length;
  const pack = items.filter(item => item.packed).length;
  const percentage = Math.round((pack / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        you have {numItems > 0 ? numItems : '?'} in your trip,and already packed {pack} item({percentage}%)
      </em>
    </footer>
  );
}

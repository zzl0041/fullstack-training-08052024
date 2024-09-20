export function Selector({ labels, handleChange }) {
  return (
    <select
      className='selector card-selector'
      onChange={handleChange}
    >
      <option value=''>choose the card</option>
      {labels.map((label, idx) => (
        <option
          key={idx}
          value={idx + 1}
        >
          {label}
        </option>
      ))}
    </select>
  );
}

export function ColorSelector({ colors, handleChange }) {
  return (
    <select
      className='selector color-selector'
      onChange={handleChange}
    >
      <option value=''>choose the color</option>
      {colors.map((color, index) => (
        <option
          key={index}
          value={color}
        >
          {color}
        </option>
      ))}
    </select>
  );
}

export function Card({ header, color }) {
  return (
    <div
      className='card'
      style={{ background: color }}
    >
      <h3>{header}</h3>
    </div>
  );
}

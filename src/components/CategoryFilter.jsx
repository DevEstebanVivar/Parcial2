const CategoryFilter = ({ categories, selected, onSelect }) => (
  <div className="filter">
    <button onClick={() => onSelect("Todos")}>Todos</button>
    {categories.map((cat) => (
      <button key={cat} onClick={() => onSelect(cat)}>{cat}</button>
    ))}
  </div>
);
export default CategoryFilter;

export default function FilterContrys({ select, onChange, continants }) {
  return (
    <div>
      <select value={select} onChange={(e) => onChange(e.target.value)}>
        {continants.map((continant) =>
          continant === "Filtrez" ? (
            <option key="Trie" value="">
              Filtrez
            </option>
          ) : (
            <option key={continant} value={continant}>
              {continant}
            </option>
          )
        )}
      </select>
    </div>
  );
}

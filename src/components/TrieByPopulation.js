export default function TrieByPopulation({ select, onChange, tries }) {
  return (
    <div>
      <select value={select} onChange={(e) => onChange(e.target.value)}>
        {tries.map((contry) =>
          contry === "Trie par population" ? (
            <option key="Filtrez" value="">
              Trie par population
            </option>
          ) : (
            <option key={contry} value={contry}>
              {contry}
            </option>
          )
        )}
      </select>
    </div>
  );
}

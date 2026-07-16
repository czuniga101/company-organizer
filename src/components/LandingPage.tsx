import { useMemo, useRef, useState } from "react";

interface Props {
  onSelectApple: () => void;
  onSelectTesla: () => void;
  onSelectToyota: () => void;
  onSelectSpaceX: () => void;
  onSelectNvidia: () => void;
  onSelectAmazon: () => void;
  onSelectMeta: () => void;
  onSelectMicrosoft: () => void;
  onSelectGoogle: () => void;
}

export default function LandingPage({ onSelectApple, onSelectTesla, onSelectToyota, onSelectSpaceX, onSelectNvidia, onSelectAmazon, onSelectMeta, onSelectMicrosoft, onSelectGoogle }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const companies = useMemo(() => [
    { name: "Apple", onSelect: onSelectApple },
    { name: "Tesla", onSelect: onSelectTesla },
    { name: "Toyota", onSelect: onSelectToyota },
    { name: "SpaceX", onSelect: onSelectSpaceX },
    { name: "NVIDIA", onSelect: onSelectNvidia },
    { name: "Amazon", onSelect: onSelectAmazon },
    { name: "Meta", onSelect: onSelectMeta },
    { name: "Microsoft", onSelect: onSelectMicrosoft },
    { name: "Google", onSelect: onSelectGoogle },
  ], [onSelectApple, onSelectTesla, onSelectToyota, onSelectSpaceX, onSelectNvidia, onSelectAmazon, onSelectMeta, onSelectMicrosoft, onSelectGoogle]);

  const matches = query.trim()
    ? companies.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()))
    : [];

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const selectMatch = (onSelect: () => void) => {
    closeSearch();
    onSelect();
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d1a",
      color: "#fff",
      fontFamily: "'Inter', system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 16px",
    }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", flex: 1 }}>

        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}>
          {searchOpen ? (
            <div style={{ position: "relative", width: 240 }}>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && matches.length > 0) selectMatch(matches[0].onSelect);
                  if (e.key === "Escape") closeSearch();
                }}
                onBlur={() => setTimeout(closeSearch, 120)}
                placeholder="Search companies…"
                style={searchInput}
              />
              {matches.length > 0 && (
                <div style={searchDropdown}>
                  {matches.map((c) => (
                    <div
                      key={c.name}
                      onMouseDown={() => selectMatch(c.onSelect)}
                      style={searchOption}
                    >
                      {c.name}
                    </div>
                  ))}
                </div>
              )}
              {query.trim() && matches.length === 0 && (
                <div style={searchDropdown}>
                  <div style={{ ...searchOption, color: "#888", cursor: "default" }}>No matches</div>
                </div>
              )}
            </div>
          ) : (
            <button style={searchBtn} onClick={openSearch}>Search</button>
          )}
        </div>

        {/* Middle */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <button style={companiesBtn}>Tech Sector</button>
          <button onClick={onSelectApple} style={appleBtn}>Apple</button>
          <button onClick={onSelectTesla} style={teslaBtn}>Tesla</button>
          <button onClick={onSelectToyota} style={toyotaBtn}>Toyota</button>
          <button onClick={onSelectSpaceX} style={spacexBtn}>SpaceX</button>
          <button onClick={onSelectNvidia} style={nvidiaBtn}>NVIDIA</button>
          <button onClick={onSelectAmazon} style={amazonBtn}>Amazon</button>
          <button onClick={onSelectMeta} style={metaBtn}>Meta</button>
          <button onClick={onSelectMicrosoft} style={microsoftBtn}>Microsoft</button>
          <button onClick={onSelectGoogle} style={googleBtn}>Google</button>
        </div>

      </div>
    </div>
  );
}

const searchBtn: React.CSSProperties = {
  background: "none",
  border: "1px solid #444",
  color: "#ccc",
  fontSize: 13,
  fontWeight: 600,
  padding: "8px 20px",
  borderRadius: 20,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const searchInput: React.CSSProperties = {
  width: "100%",
  background: "#13131f",
  border: "1px solid #444",
  color: "#fff",
  fontSize: 13,
  fontWeight: 500,
  padding: "8px 16px",
  borderRadius: 20,
  outline: "none",
  boxSizing: "border-box",
};

const searchDropdown: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 6px)",
  left: 0,
  right: 0,
  background: "#13131f",
  border: "1px solid #333",
  borderRadius: 10,
  overflow: "hidden",
  zIndex: 10,
};

const searchOption: React.CSSProperties = {
  padding: "10px 16px",
  fontSize: 13,
  color: "#ddd",
  cursor: "pointer",
};

const companiesBtn: React.CSSProperties = {
  background: "linear-gradient(135deg, #6C8EF5, #8C6CF5)",
  border: "none",
  color: "#fff",
  fontSize: 16,
  fontWeight: 700,
  padding: "20px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const appleBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const teslaBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const toyotaBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const spacexBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const nvidiaBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const amazonBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const metaBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const microsoftBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

const googleBtn: React.CSSProperties = {
  background: "#13131f",
  border: "1px solid #333",
  color: "#ddd",
  fontSize: 16,
  fontWeight: 700,
  padding: "16px 60px",
  borderRadius: 10,
  cursor: "pointer",
  letterSpacing: "0.02em",
};

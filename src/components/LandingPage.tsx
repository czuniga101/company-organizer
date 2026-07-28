import { useEffect, useMemo, useRef, useState } from "react";
import { getUserVote, getVoteCount, setUserVote } from "../voteStorage";

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
    { key: "apple", name: "Apple", onSelect: onSelectApple, style: appleBtn },
    { key: "tesla", name: "Tesla", onSelect: onSelectTesla, style: teslaBtn },
    { key: "toyota", name: "Toyota", onSelect: onSelectToyota, style: toyotaBtn },
    { key: "spacex", name: "SpaceX", onSelect: onSelectSpaceX, style: spacexBtn },
    { key: "nvidia", name: "NVIDIA", onSelect: onSelectNvidia, style: nvidiaBtn },
    { key: "amazon", name: "Amazon", onSelect: onSelectAmazon, style: amazonBtn },
    { key: "meta", name: "Meta", onSelect: onSelectMeta, style: metaBtn },
    { key: "microsoft", name: "Microsoft", onSelect: onSelectMicrosoft, style: microsoftBtn },
    { key: "google", name: "Google", onSelect: onSelectGoogle, style: googleBtn },
  ], [onSelectApple, onSelectTesla, onSelectToyota, onSelectSpaceX, onSelectNvidia, onSelectAmazon, onSelectMeta, onSelectMicrosoft, onSelectGoogle]);

  const [voteCounts, setVoteCounts] = useState<Record<string, number>>({});
  useEffect(() => {
    setVoteCounts(Object.fromEntries(companies.map((c) => [c.key, getVoteCount(c.key)])));
  }, [companies]);

  const vote = (companyKey: string, direction: 1 | -1) => {
    const current = getUserVote(companyKey);
    const next = current === direction ? 0 : direction;
    setUserVote(companyKey, next);
    setVoteCounts((prev) => ({ ...prev, [companyKey]: 1 + next }));
  };

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
          {companies.map((c) => (
            <div key={c.key} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={voteWidget}>
                <span onClick={() => vote(c.key, 1)} style={voteArrow}>⇧</span>
                <span style={voteCount}>{voteCounts[c.key] ?? 1}</span>
                <span onClick={() => vote(c.key, -1)} style={voteArrow}>⇩</span>
              </div>
              <button onClick={c.onSelect} style={c.style}>{c.name}</button>
            </div>
          ))}
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

const voteWidget: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "linear-gradient(135deg, #6C8EF5, #8C6CF5)",
  borderRadius: 20,
  padding: "6px 14px",
};

const voteArrow: React.CSSProperties = {
  fontSize: 14,
  color: "#fff",
  cursor: "pointer",
  userSelect: "none",
  lineHeight: 1,
};

const voteCount: React.CSSProperties = {
  minWidth: 16,
  textAlign: "center",
  fontSize: 13,
  fontWeight: 700,
  color: "#fff",
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

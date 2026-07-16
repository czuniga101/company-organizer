import { useState } from "react";

interface Props {
  onBack: () => void;
}

interface Comment {
  text: string;
  timestamp: string;
}

const backBtn: React.CSSProperties = { background: "none", border: "1px solid #333", color: "#aaa", fontSize: 14, padding: "8px 14px", borderRadius: 10, cursor: "pointer" };
const card: React.CSSProperties = { background: "#13131f", border: "1px solid #222", borderRadius: 16, padding: "16px 20px" };
const label: React.CSSProperties = { fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666", marginBottom: 8 };
const textarea: React.CSSProperties = { width: "100%", minHeight: 80, background: "#0d0d1a", border: "1px solid #333", borderRadius: 10, color: "#fff", fontSize: 14, fontFamily: "inherit", padding: "10px 12px", resize: "vertical", boxSizing: "border-box" };
const postBtn: React.CSSProperties = { background: "linear-gradient(135deg, #6C8EF5, #8C6CF5)", border: "none", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 20px", borderRadius: 20, cursor: "pointer", letterSpacing: "0.02em", marginTop: 10, alignSelf: "flex-end" };

export default function ForumsPage({ onBack }: Props) {
  const [draft, setDraft] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const postComment = () => {
    if (!draft.trim()) return;
    setComments(prev => [{ text: draft.trim(), timestamp: new Date().toLocaleString() }, ...prev]);
    setDraft("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d1a", color: "#fff", fontFamily: "'Inter', system-ui, sans-serif", display: "flex", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={onBack} style={backBtn}>‹ Back</button>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>Forums</div>
        </div>

        <div style={{ ...card, display: "flex", flexDirection: "column" }}>
          <div style={label}>Add a Comment</div>
          <textarea
            style={textarea}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            placeholder="Share your thoughts..."
          />
          <button onClick={postComment} style={postBtn}>Post</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {comments.length === 0 && (
            <div style={{ fontSize: 13, color: "#666", textAlign: "center", padding: "20px 0" }}>No comments yet. Be the first to post.</div>
          )}
          {comments.map((c, i) => (
            <div key={i} style={card}>
              <div style={{ fontSize: 14, color: "#eee", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{c.text}</div>
              <div style={{ fontSize: 11, color: "#555", marginTop: 8 }}>{c.timestamp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

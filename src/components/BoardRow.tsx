import type { BoardMember } from "../types";

function Avatar({ member }: { member: BoardMember }) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 72 }}>
      {member.photoUrl ? (
        <img
          src={member.photoUrl}
          alt={member.name}
          style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", border: "2px solid #333" }}
        />
      ) : (
        <div style={{
          width: 52, height: 52, borderRadius: "50%",
          background: "#2a2a4a", border: "2px solid #444",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, fontWeight: 700, color: "#aaa"
        }}>
          {initials}
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#ddd", lineHeight: 1.2 }}>{member.name}</div>
        <div style={{ fontSize: 10, color: "#777", lineHeight: 1.2 }}>{member.role}</div>
      </div>
    </div>
  );
}

export default function BoardRow({ members }: { members: BoardMember[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      {members.map((m, i) => (
        <Avatar key={i} member={m} />
      ))}
    </div>
  );
}

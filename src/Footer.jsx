export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "15px",
        textAlign: "center",
        background: "#2C3E50",
        color: "white",
      }}
    >
      <p>© {new Date().getFullYear()} My React App</p>
    </footer>
  );
}
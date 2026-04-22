import { Link } from "react-router";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>404 — Pagina nu există</h1>
      <p>Ne pare rău, pagina pe care o cauți nu există.</p>

      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Înapoi la Home
      </Link>
    </div>
  );
}
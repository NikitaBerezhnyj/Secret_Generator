import Header from "../components/Header";
import "../styles/page.css";

export default function About() {
  return (
    <main className="page-container">
      <Header activePage="/about" />
      <div className="page-content">
        <h1>About Secret Generator</h1>
        <p>
          Secret Generator is a React app for easily generating secure JWT
          secrets and passwords for high-security applications.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Generate secure JWT secrets (32-byte hex)</li>
          <li>Generate strong 12-character passwords</li>
          <li>One-click copy with visual feedback</li>
          <li>Open API for integration</li>
        </ul>

        <h2>Security</h2>
        <p>
          Uses <code>crypto.getRandomValues()</code> for secure generation,
          ensuring privacy and security.
        </p>

        <h2>Open API</h2>
        <p>Accessible API endpoints:</p>
        <ul>
          <li>
            <code>/api/jwt-secret</code> for JWT secrets
          </li>
          <li>
            <code>/api/password</code> for passwords
          </li>
        </ul>
      </div>
    </main>
  );
}

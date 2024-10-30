import Header from "../components/Header";
import "../styles/page.css";

export default function Docs() {
  return (
    <main className="page-container">
      <Header activePage="/docs" />
      <div className="page-content">
        <h1>API Documentation</h1>
        <p>
          Secret Generator API provides endpoints for creating secure JWT
          secrets and passwords, ideal for integration into other applications.
        </p>

        <h2>Endpoints</h2>

        <h3>1. JWT Secret</h3>
        <p>
          Generates a 32-byte secure JWT secret.
          <br />
          <strong>Method:</strong> GET
          <br />
          <strong>URL:</strong> <code>/api/jwt-secret</code>
          <br />
          <strong>Result:</strong>{" "}
          <code>{`{ "jwtSecret": "your_jwt_secret_here" }`}</code>
        </p>

        <h3>2. Secure Password</h3>
        <p>
          Generates a 12-character password with mixed characters.
          <br />
          <strong>Method:</strong> GET
          <br />
          <strong>URL:</strong> <code>/api/password</code>
          <br />
          <strong>Result:</strong>{" "}
          <code>{`{ "password": "your_password_here" }`}</code>
        </p>

        <p>
          Send a GET request to each endpoint; responses return JSON with the
          generated value. The API is open, secure, and does not store values.
        </p>
      </div>
    </main>
  );
}

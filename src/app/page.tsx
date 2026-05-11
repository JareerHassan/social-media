import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.title}>AI Social Manager Pro 🚀</h1>
        <p style={styles.subtitle}>
          Generate AI content and auto-post it on TikTok, Instagram & Facebook
        </p>

        <div style={styles.buttons}>
          <a href="http://localhost:5000/api/tiktok/login" style={styles.btnPrimary}>
            Login with TikTok
          </a>

          <button style={styles.btnSecondary}>
            Try AI Generator
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div style={styles.features}>
        <div style={styles.card}>
          <h3>🤖 AI Content</h3>
          <p>Generate viral posts, captions & hashtags instantly</p>
        </div>

        <div style={styles.card}>
          <h3>📲 Auto Posting</h3>
          <p>Post directly to TikTok, Instagram & Facebook</p>
        </div>

        <div style={styles.card}>
          <h3>⚡ Fast & Simple</h3>
          <p>One click automation system for creators</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2026 AI Social Manager Pro. All rights reserved.</p>
      </footer>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
  },

  hero: {
    padding: "80px 20px",
    background: "#0f172a",
    color: "white",
  },

  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
  },

  buttons: {
    marginTop: "20px",
  },

  btnPrimary: {
    padding: "12px 25px",
    background: "#ff0050",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    marginRight: "10px",
  },

  btnSecondary: {
    padding: "12px 25px",
    background: "#1e293b",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "50px",
    flexWrap: "wrap",
  },

  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },

  footer: {
    padding: "20px",
    background: "#f1f5f9",
    marginTop: "40px",
  },
};
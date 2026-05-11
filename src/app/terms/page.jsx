export default function TermsPage() {
  return (
    <div style={styles.container}>
      <h1>Terms of Service</h1>

      <p>
        Welcome to AI Social Manager Pro. By using this platform, you agree to
        the following terms and conditions.
      </p>

      <h3>1. Use of Service</h3>
      <p>
        This application provides AI-generated content and social media automation tools.
        Users are responsible for all content they create and publish.
      </p>

      <h3>2. User Responsibility</h3>
      <p>
        You agree not to use the platform for illegal, harmful, or abusive content.
      </p>

      <h3>3. Data Usage</h3>
      <p>
        We only store necessary authentication and user activity data for functionality purposes.
      </p>

      <h3>4. Changes</h3>
      <p>
        We may update these terms anytime without prior notice.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    lineHeight: "1.6",
  },
};
export default function PrivacyPage() {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>

      <p>
        Your privacy is important to us. This policy explains how we collect and use data.
      </p>

      <h3>1. Data Collection</h3>
      <p>
        We collect minimal data such as authentication tokens and usage logs.
      </p>

      <h3>2. Data Usage</h3>
      <p>
        Data is used only for providing AI content generation and social media posting services.
      </p>

      <h3>3. Data Sharing</h3>
      <p>
        We do not sell or share user data with third parties.
      </p>

      <h3>4. Security</h3>
      <p>
        We use secure methods to protect your information.
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
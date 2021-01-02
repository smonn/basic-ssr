import Layout from "../components/Layout";
import RegistrationForm from "../components/registration-form";

export default function Register() {
  return (
    <Layout>
      <h1>Register</h1>
      <RegistrationForm action="/register" />
    </Layout>
  );
}

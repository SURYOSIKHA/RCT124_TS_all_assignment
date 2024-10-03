import useForm from "./hooks/useForm";

function LoginForm() {
    const [formData, handleInputChange] = useForm({ username: '', password: '' });
  
    return (
      <form>
        <input name="username" value={formData.username} onChange={handleInputChange} />
        <input name="password" value={formData.password} onChange={handleInputChange} />
      </form>
    );
  }
  
export default LoginForm
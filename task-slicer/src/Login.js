export default function Login() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="passw" id="passw" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

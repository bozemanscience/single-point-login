import { Link } from "react-router-dom";
import supabase from "../supabase";
import { useSession } from "../context/SessionContext";

const HomePage = () => {
  const { session } = useSession();
  return (
    <main>
      <section className="main-container">
        <h1 className="header-text">Single Point Studio</h1>
        <p>Current User : {session?.user.email || "None"}</p>
        {session ? (
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        ) : (
          <Link to="/auth/sign-in">Sign In</Link>
        )}
        <Link to="/protected">Protected Page 🛡️</Link>
        <div id="divider"></div>
      </section>
    </main>
  );
};

export default HomePage;

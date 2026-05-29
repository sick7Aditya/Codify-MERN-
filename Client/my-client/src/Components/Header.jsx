import { useState, useEffect } from 'react';
import './head.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginForm from '../Log/Login';
import SignupForm from '../Log/Sign';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("data");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => setUser(tokenResponse),
  });

  useEffect(() => {
    if (user?.access_token) {
      axios
        .get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
          headers: { Authorization: `Bearer ${user.access_token}` },
        })
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem('data', JSON.stringify(res.data));
          setShowLoginModal(false);
          setShowSignupModal(false);
        });
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('data');
  };

  return (
    <div className="head-div">
      <nav>
        <div className="logo">
          <span>Codify</span>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Components/Learn" onClick={() => setMenuOpen(false)}>Learn</Link></li>
          <li><Link to="/Components/CODEPART" onClick={() => setMenuOpen(false)}>Code</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>

        {/* AUTH */}
        <div className="auth-area">
          {profile ? (
            <>
              <img src={profile.picture} alt="profile" />
              <span>{profile.name}</span>
              <button className="logout-btn" onClick={logOut}>Logout</button>
            </>
          ) : (
            <>
              <button className="login-btn" onClick={() => setShowLoginModal(true)}>Login</button>
              <button className="signup-btn" onClick={() => setShowSignupModal(true)}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span className="close-modal" onClick={() => setShowLoginModal(false)}>×</span>
            <LoginForm loginWithGoogle={loginWithGoogle} />
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignupModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span className="close-modal" onClick={() => setShowSignupModal(false)}>×</span>
            <SignupForm loginWithGoogle={loginWithGoogle} />
          </div>
        </div>
      )}
    </div>
  );
}

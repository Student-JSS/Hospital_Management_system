import React, { useState } from "react";
import { loginPageStyles, toastStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const STORAGE_KEY = "doctorToken_v1";

const LoginPage = () => {

  const API_BASE = "http://localhost:4000";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [busy, setBusy] = useState(false);

  const navigate = useNavigate();

  // ✅ MOVE INSIDE COMPONENT
  const handleChange = (e) => {
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ MOVE INSIDE COMPONENT
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("All fields are required.", {
        style: toastStyles.errorToast,
      });
      return;
    }

    try {
      setBusy(true);

      const res = await fetch(`${API_BASE}/api/doctors/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        toast.error(json?.message || "Login failed");
        return;
      }

      const token = json?.token || json?.data?.token;

      if (!token) {
        toast.error("Authentication token missing");
        return;
      }

      const doctorId =
        json?.data?._id ||
        json?.doctor?._id ||
        json?.data?.doctor?._id;

      if (!doctorId) {
        toast.error("Doctor ID missing");
        return;
      }

      localStorage.setItem(STORAGE_KEY, token);

      window.dispatchEvent(
        new StorageEvent("storage", {
          key: STORAGE_KEY,
          newValue: token,
        })
      );

      toast.success("Login successful");

      navigate(`/doctor-admin/${doctorId}`);

    } catch (err) {
      console.error(err);
      toast.error("Network error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={loginPageStyles.mainContainer}>

      <Toaster position="top-right" />

      <button
        onClick={() => navigate("/")}
        className={loginPageStyles.backButton}
      >
        <ArrowLeft className={loginPageStyles.backButtonIcon} />
        Back to Home
      </button>

      <div className={loginPageStyles.loginCard}>

        <div className={loginPageStyles.logoContainer}>
          <img src={logo} alt="logo" className={loginPageStyles.logo} />
        </div>

        <h2 className={loginPageStyles.title}>Doctor Admin</h2>

        <p className={loginPageStyles.subtitle}>
          Sign in to change your profile & schedule
        </p>

        <form
          onSubmit={handleLogin}
          className={loginPageStyles.form}
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={loginPageStyles.input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={loginPageStyles.input}
            required
          />

          <button
            type="submit"
            disabled={busy}
            className={loginPageStyles.submitButton}
          >
            {busy ? "Signing in..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default LoginPage;
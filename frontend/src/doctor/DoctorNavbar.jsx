import React, { useMemo, useState } from "react";
import { navbarStylesDr } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { Calendar, Edit, Home, LogOut, Menu, X } from "lucide-react";

const DoctorNavbar = () => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const location = useLocation();

  const doctorId = useMemo(() => {
    if (params?.id) return params.id;
    const m = location.pathname.match(/\/doctor-admin\/([^/]+)/);
    if (m) return m[1];
    return null;
  }, [params, location.pathname]);

  const basePath = doctorId
    ? `/doctor-admin/${doctorId}`
    : "/doctor-admin/login";

  const navItems = [
    { name: "Dashboard", to: `${basePath}`, Icon: Home },
    { name: "Appointments", to: `${basePath}/appointments`, Icon: Calendar },
    { name: "Edit Profile", to: `${basePath}/profile/edit`, Icon: Edit },
  ];
  return (
    <>
      <nav className={navbarStylesDr.navContainer}>
        <div className={navbarStylesDr.leftBrand}>
          <div className={navbarStylesDr.logoContainer}>
            <img src={logo} alt="logo" className={navbarStylesDr.logoImage} />
          </div>

          <div className={navbarStylesDr.brandTextContainer}>
            <div className={navbarStylesDr.brandTitle}>MedTek</div>
            <div className={navbarStylesDr.brandSubtitle}>
              HealthCare Solutions
            </div>
          </div>
        </div>

        {/* desktop navigations */}
        <div className={navbarStylesDr.desktopMenu}>
          <div className={navbarStylesDr.desktopMenuItems}>
            {navItems.map(({ name, to, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === basePath}
                className={({ isActive }) =>
                  `${navbarStylesDr.baseLink} ${
                    isActive
                      ? navbarStylesDr.activeLink
                      : navbarStylesDr.activeLink
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <span className={navbarStylesDr.linkContent}>
                  <Icon size={16} className={navbarStylesDr.linkIcon} />
                  <span className={navbarStylesDr.linkText}>{name}</span>
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className={navbarStylesDr.rightActions}>
          <button
            onClick={() => {
              window.location.href = "/doctor-admin/login";
            }}
            className={navbarStylesDr.logoutButtonDesktop}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>

          {/* to toggle  */}
          <button
            onClick={() => setOpen((s) => !s)}
            className={navbarStylesDr.hamburgerButtonMd}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            onClick={() => setOpen((s) => !s)}
            className={navbarStylesDr.hamburgerButtonLg}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <div className={navbarStylesDr.mobileMenuContainer(open)}>
        <div className={navbarStylesDr.mobileMenuContent}>
          {navItems.map(({ name, to, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === basePath}
              className={({ isActive }) =>
                `${navbarStylesDr.mobileActiveLink} ${
                  isActive
                    ? navbarStylesDr.mobileActiveLink
                    : navbarStylesDr.mobileInactiveLink
                }`
              }
              onClick={() => setOpen(false)}
            >
              <Icon size={18} className="text-emerald-400" />
              <span>{name}</span>
            </NavLink>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              window.location.href = "/doctor-admin/login";
            }}
            className={navbarStylesDr.mobileLogoutButton}
          >
            <div className={navbarStylesDr.mobileLogoutContent}>
              <LogOut size={16} />
              Logout
            </div>
          </button>
        </div>
      </div>
      <div className={navbarStylesDr.spacer}></div>
    </>
  );
};

export default DoctorNavbar;

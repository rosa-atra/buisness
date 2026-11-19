import type { PropsWithChildren, ReactNode } from "react";

const navigation = [
  { label: "Overview", icon: "grid", active: true },
  { label: "Customers", icon: "users", active: false },
  { label: "Orders", icon: "bag", active: false },
  { label: "Analytics", icon: "chart", active: false },
] as const;

function NavigationIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    grid: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l1 13H4L5 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-5 5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="nav-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

export function PageLayout({ children }: PropsWithChildren) {
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/" aria-label="Northstar home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M8 22.5V9.5h8.2c3.1 0 4.8 1.5 4.8 3.8 0 1.6-.9 2.8-2.4 3.3 2 .4 3.4 1.7 3.4 3.8 0 2.6-2 4.1-5.3 4.1H8Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
              />
              <path d="M12 14h4.2M12 20h5.1" stroke="currentColor" strokeWidth="2.4" />
            </svg>
          </span>
          <span className="brand__copy">
            <strong>northstar</strong>
            <small>BUSINESS OS</small>
          </span>
        </a>

        <div className="workspace-switcher">
          <span className="workspace-avatar">S</span>
          <span className="workspace-copy">
            <strong>Studio & Co.</strong>
            <small>Workspace</small>
          </span>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </div>

        <p className="nav-heading">WORKSPACE</p>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const className = `nav-item${item.active ? " nav-item--active" : ""}`;
            const content = (
              <>
                <NavigationIcon name={item.icon} />
                <span>{item.label}</span>
                {item.label === "Orders" && <span className="nav-count">4</span>}
              </>
            );

            return item.active ? (
              <a
                aria-current="page"
                className={className}
                href="/"
                key={item.label}
              >
                {content}
              </a>
            ) : (
              <span aria-disabled="true" className={className} key={item.label}>
                {content}
              </span>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-mark" aria-hidden="true">?</span>
            <div>
              <strong>Need a hand?</strong>
              <span>Visit our help center</span>
            </div>
            <span className="help-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="profile">
            <span className="profile-avatar">JD</span>
            <span className="profile-copy">
              <strong>Jordan Davis</strong>
              <small>Administrator</small>
            </span>
            <button className="more-button" type="button" aria-label="More profile options">
              ···
            </button>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <span aria-hidden="true">/</span>
            <strong>Overview</strong>
          </div>
          <div className="topbar-actions">
            <span className="today-label">{today}</span>
            <a
              className="icon-button notification-button"
              href="http://localhost:8000/docs"
              aria-label="Open API documentation"
              title="Open API documentation"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
              </svg>
              <span className="notification-dot" />
            </a>
            <span className="topbar-avatar">JD</span>
          </div>
        </header>

        <div className="page-content">{children}</div>
        <footer className="footer">
          <span>© {year} Northstar, Inc.</span>
          <span className="footer-links">
            <a href="http://localhost:8000/docs">Help center</a>
            <span>·</span>
            <span>Made for what’s next</span>
          </span>
        </footer>
      </main>
    </div>
  );
}

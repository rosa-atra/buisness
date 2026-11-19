import { PageLayout } from "../layouts/PageLayout";
import { useApiHealth } from "../hooks/useApiHealth";

const activities = [
  {
    initials: "AM",
    name: "Alex Morgan",
    action: "placed a new order",
    detail: "Order #NS-2048",
    amount: "$248.00",
    time: "10 min ago",
    tone: "lavender",
  },
  {
    initials: "SL",
    name: "Samantha Lee",
    action: "joined your customer list",
    detail: "New customer",
    amount: "—",
    time: "42 min ago",
    tone: "peach",
  },
  {
    initials: "JT",
    name: "Jamie Taylor",
    action: "placed a new order",
    detail: "Order #NS-2047",
    amount: "$129.50",
    time: "1 hour ago",
    tone: "mint",
  },
  {
    initials: "RC",
    name: "Riley Chen",
    action: "placed a new order",
    detail: "Order #NS-2046",
    amount: "$86.00",
    time: "2 hours ago",
    tone: "blue",
  },
];

const metrics = [
  {
    label: "Total revenue",
    value: "$48,294",
    change: "+12.8%",
    note: "vs. last month",
    icon: "↗",
    tone: "violet",
  },
  {
    label: "Active customers",
    value: "2,420",
    change: "+8.2%",
    note: "vs. last month",
    icon: "◎",
    tone: "peach",
  },
  {
    label: "Total orders",
    value: "1,284",
    change: "+4.6%",
    note: "vs. last month",
    icon: "▤",
    tone: "mint",
  },
  {
    label: "Avg. order value",
    value: "$37.61",
    change: "+2.4%",
    note: "vs. last month",
    icon: "◇",
    tone: "blue",
  },
];

function RevenueChart() {
  return (
    <div className="chart-wrap">
      <div className="chart-y-labels" aria-hidden="true">
        <span>$12k</span>
        <span>$9k</span>
        <span>$6k</span>
        <span>$3k</span>
        <span>$0</span>
      </div>
      <div className="chart-plot">
        <svg
          aria-label="Revenue trend over the last 12 months, rising overall"
          className="revenue-chart"
          preserveAspectRatio="none"
          role="img"
          viewBox="0 0 760 220"
        >
          <defs>
            <linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#7867ef" stopOpacity=".22" />
              <stop offset="100%" stopColor="#7867ef" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 174H760M0 130H760M0 86H760M0 42H760M0 218H760"
            className="chart-grid"
          />
          <path
            d="M0 176 C24 165 32 169 56 160 S91 166 112 147 S147 157 168 139 S201 150 224 126 S258 139 280 119 S313 129 336 111 S369 123 392 98 S425 112 448 91 S481 101 504 78 S537 91 560 68 S593 85 616 62 S649 69 672 48 S706 61 728 34 S748 39 760 23 L760 220 L0 220 Z"
            fill="url(#revenue-fill)"
          />
          <path
            d="M0 176 C24 165 32 169 56 160 S91 166 112 147 S147 157 168 139 S201 150 224 126 S258 139 280 119 S313 129 336 111 S369 123 392 98 S425 112 448 91 S481 101 504 78 S537 91 560 68 S593 85 616 62 S649 69 672 48 S706 61 728 34 S748 39 760 23"
            className="chart-line"
          />
          <circle cx="760" cy="23" r="5" className="chart-point" />
        </svg>
        <div className="chart-x-labels" aria-hidden="true">
          <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
          <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
          <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
        </div>
      </div>
    </div>
  );
}

export function DashboardPage() {
  const { status, error } = useApiHealth();
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <PageLayout>
      <section className="welcome">
        <div>
          <p className="eyebrow">
            {today} <span>·</span> WORKSPACE OVERVIEW <span>·</span> SAMPLE DATA
          </p>
          <h1>Good morning, Jordan <span aria-hidden="true">✳</span></h1>
          <p className="intro">
            Here’s what’s happening with your business today.
          </p>
        </div>
        <a className="primary-button" href="http://localhost:8000/docs">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Explore your API
        </a>
      </section>

      <section className="metrics-grid" aria-label="Business metrics">
        {metrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <div className="metric-card__top">
              <span>{metric.label}</span>
              <span className={`metric-icon metric-icon--${metric.tone}`} aria-hidden="true">
                {metric.icon}
              </span>
            </div>
            <p className="metric-value">{metric.value}</p>
            <p className="metric-change">
              <span>{metric.change}</span> {metric.note}
            </p>
          </article>
        ))}
      </section>

      <div className="dashboard-grid">
        <section className="panel revenue-panel" aria-labelledby="revenue-title">
          <div className="panel-heading">
            <div>
              <h2 id="revenue-title">Revenue overview</h2>
              <p>Your business is moving in the right direction.</p>
            </div>
            <button className="period-select" type="button">
              <span>Last 12 months</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
          <div className="chart-summary">
            <strong>$48,294<span>.00</span></strong>
            <span className="summary-change">↗ 12.8%</span>
            <span className="summary-caption">compared to $42,812 last year</span>
          </div>
          <RevenueChart />
        </section>

        <section className="panel health-panel" aria-labelledby="health-title">
          <div className="panel-heading">
            <div>
              <h2 id="health-title">Your workspace</h2>
              <p>Everything in one place.</p>
            </div>
            <span className="workspace-symbol" aria-hidden="true">✳</span>
          </div>
          <div className="workspace-status">
            <span className={`health-indicator${status === "Online" ? " health-indicator--online" : ""}`} />
            <div>
              <strong>Platform status</strong>
              <span>{error ?? (status ? `API ${status.toLowerCase()}` : "Checking API connection…")}</span>
            </div>
            <span className={`status-pill${status === "Online" ? " status-pill--online" : ""}`}>
              {status ?? "Checking"}
            </span>
          </div>
          <div className="workspace-divider" />
          <div className="workspace-note">
            <span className="workspace-note__icon" aria-hidden="true">✦</span>
            <p>
              Your workspace is ready to grow. Connect your tools and bring
              your business into focus.
            </p>
          </div>
          <a className="text-link" href="http://localhost:8000/docs">
            View platform details <span aria-hidden="true">→</span>
          </a>
        </section>
      </div>

      <section className="panel activity-panel" aria-labelledby="activity-title">
        <div className="panel-heading activity-heading">
          <div>
            <h2 id="activity-title">Recent activity</h2>
            <p>The latest updates from your business.</p>
          </div>
          <a className="text-link" href="#activity-title">
            View all activity <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="activity-table" role="table" aria-label="Recent activity">
          <div className="activity-row activity-row--header" role="row">
            <span role="columnheader">ACTIVITY</span>
            <span role="columnheader">REFERENCE</span>
            <span role="columnheader">AMOUNT</span>
            <span role="columnheader">TIME</span>
          </div>
          {activities.map((activity) => (
            <div className="activity-row" key={activity.detail} role="row">
              <div className="activity-person" role="cell">
                <span className={`person-avatar person-avatar--${activity.tone}`}>
                  {activity.initials}
                </span>
                <span>
                  <strong>{activity.name}</strong>
                  <small>{activity.action}</small>
                </span>
              </div>
              <span className="activity-reference" role="cell">{activity.detail}</span>
              <strong className="activity-amount" role="cell">{activity.amount}</strong>
              <span className="activity-time" role="cell">{activity.time}</span>
            </div>
          ))}
        </div>
      </section>

    </PageLayout>
  );
}

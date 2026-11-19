type StatusCardProps = {
  title: string;
  value: string;
  detail: string;
  healthy: boolean;
};

export function StatusCard({
  title,
  value,
  detail,
  healthy,
}: StatusCardProps) {
  return (
    <article className="status-card">
      <div className="status-card__top">
        <h2>{title}</h2>
        <span
          className={`status-dot${healthy ? " status-dot--healthy" : ""}`}
          aria-hidden="true"
        />
      </div>
      <p className="status-card__value">{value}</p>
      <p className="status-card__detail">{detail}</p>
    </article>
  );
}

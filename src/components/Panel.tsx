import './Panel.css';

function Panel(title: string, content: string) {
  return (
    <div className="panel">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Panel;
function Panel({ title, image, content, onClick }) {
  return (
    <div className="panel" onClick={onClick}>
      <div className="image-container">
        <img src={image} alt={title} />
        <h2 className="panel-title">{title}</h2>
      </div>
      <p className="panel-content">{content}</p>
    </div>
  );
}

export default Panel;

function Panel({ title, image, content }) {
  const panelStyle = {
    maxWidth: '200px',
    minWidth: '250px',
    width: '100%',
    height: 'auto',
    padding: '15px',
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontFamily: 'monospace, sans-serif',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
  };

  const titleStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    color: 'white',
    padding: '10px',
    margin: '0',
    fontFamily: 'monospace, sans-serif',
  };

  const contentStyle = {
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'monospace, sans-serif',
  };

  return (
    <div style={panelStyle}>
      <div style={imageContainerStyle}>
        <img src={image} alt={title} style={{ width: '100%', display: 'block' }} />
        <h2 style={titleStyle}>{title}</h2>
      </div>
      <p style={contentStyle}>{content}</p>
    </div>
  );
}

export default Panel;

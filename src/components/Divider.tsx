function Divider({ title, align1, align2 }) {
    const alignment: React.CSSProperties = {
        marginLeft: align1,
        marginRight: align2,
    };
    return (
      <div className="divider" style={alignment}>
        {title}
      </div>
    );
  }
  
  export default Divider;
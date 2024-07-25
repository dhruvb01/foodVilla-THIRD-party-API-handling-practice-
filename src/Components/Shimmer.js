import React from 'react'

function Shimmer() {
    const innerContainerStyle = {
        display: 'flex',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        alignItems: 'flex-start'
      };
      const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
        width:"200px",
        height:"300px"
      };
  return (
    <div style={innerContainerStyle}>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
          <div style={cardStyle}></div>
    </div>
  )
}

export default Shimmer
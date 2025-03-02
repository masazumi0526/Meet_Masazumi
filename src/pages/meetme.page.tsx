import React from 'react';

export default function Page() {
  const pageContainerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  };

  const listStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#777',
    margin: '5px 0',
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={headingStyle}>中田雅澄（Masazumi Nakada）</h1>
      <p style={paragraphStyle}>こんにちは！私はWeb開発者を目指しています。</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>趣味: サッカー</li>
      </ul>
    </div>
  );
}

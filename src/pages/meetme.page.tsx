import React from 'react';

export default function Page() {
  const pageContainerStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const listStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={headingStyle}>中田雅澄（Masazumi Nakata）</h1>
      <p>こんにちは！私はWeb開発者を目指しています。</p>
      <ul style={listStyle}>
        <li>趣味: サッカー</li>
      </ul>
    </div>
  );
}

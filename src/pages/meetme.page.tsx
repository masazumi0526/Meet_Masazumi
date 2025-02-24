import styles from './meetmepage.module.css';

export default function Page() {
  return (
    <div className={styles['page-container']}>
      <h1>中田雅澄（Masazumi Nakata）</h1>
      <p>こんにちは！私はWeb開発者を目指しています。</p>
      <ul>
        <li>趣味: サッカー</li>
      </ul>
    </div>
  );
}
import styles from './Header.module.css';

const Header = () => {
  const handleClick = () => {
    // Действия при нажатии на логотип
    console.log('Logo clicked!');
    // Можно добавить здесь переход на главную страницу или другую логику
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={handleClick}>
        Placeholder Logo
      </div>
      <span className={styles.title}>Онлайн магазин</span>
    </div>
  );
};

export default Header;
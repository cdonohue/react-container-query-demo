import "normalize.css/normalize.css";
import styles from "./App.css";

import Widget from "./Widget";

const App = React => (props) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <section className={styles.row}>
          <div className={styles.container}>
            <Widget />
          </div>
        </section>
        <section className={styles.row}>
          <div className={styles.container}>
            <Widget />
          </div>
          <div className={styles.container}>
            <Widget />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

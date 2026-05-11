function AboutMe() {
  return (
    <section>
      <h2>Про мене</h2>

      <p>
        Привіт! Мене звати Олійник Андрій. Я початківець Frontend-розробник,
        який вивчає HTML, CSS, JavaScript та React.
      </p>

      <p>
        Мені подобається створювати сучасні сайти, працювати з кодом та
        постійно покращувати свої навички у веброзробці.
      </p>

      <h3>Мої цінності</h3>

      <ul>
        <li>Відповідальність</li>
        <li>Саморозвиток</li>
        <li>Наполегливість</li>
        <li>Чесність</li>
      </ul>

      <h3>Мої захоплення</h3>

      <p>
        Програмування, комп’ютерні технології, ігри та спорт.
      </p>

      <h3>Мій досвід навчання</h3>

      <p>
        Під час навчання я освоїв основи HTML, CSS, JavaScript, React,
        GitHub та роботу з API.
      </p>

      <h3>Мої проєкти</h3>

      <div className="cards">
        <div className="card">
          <h4>HTML + CSS</h4>

          <a
            href="https://github.com/dedlay1?tab=repositories"
            target="_blank"
          >
            Переглянути репозиторій
          </a>
        </div>

        <div className="card">
          <h4>JavaScript</h4>

          <a
            href="https://github.com/dedlay1?tab=repositories"
            target="_blank"
          >
            Переглянути репозиторій
          </a>
        </div>

        <div className="card">
          <h4>React</h4>

          <a
            href="https://github.com/dedlay1?tab=repositories"
            target="_blank"
          >
            Переглянути репозиторій
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
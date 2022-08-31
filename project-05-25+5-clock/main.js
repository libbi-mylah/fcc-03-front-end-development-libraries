class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      break: 5,
      time: "",
      timeLeft: "",
      timerOn: false,
      currentTimer: "session",
    };
    this.timer = 0;
    this.setTime = this.setTime.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
    this.startStop = this.startStop.bind(this);
    this.countDown = this.countDown.bind(this);
    this.reduceTime = this.reduceTime.bind(this);
  }
  setTime(changeSession) {
    var newSession = this.state.session + changeSession;
    var newDuration = newSession * 60;
    var minute = parseInt(newDuration / 60, 10);
    minute = minute < 10 ? "0" + minute : minute;

    this.setState({
      session: newSession,
      time: newDuration,
      timeLeft: `${minute}:00`,
    });
  }

  increase(e) {
    return e.target.className === "break" &&
      this.state.break < 60 &&
      this.state.timerOn === false
      ? this.setState({ break: this.state.break + 1 })
      : e.target.className === "session" &&
        this.state.session < 60 &&
        this.state.timerOn === false
      ? this.setTime(1)
      : null;
  }

  decrease(e) {
    return e.target.className === "break" &&
      this.state.break > 1 &&
      this.state.timerOn === false
      ? this.setState({ break: this.state.break - 1 })
      : e.target.className === "session" &&
        this.state.session > 1 &&
        this.state.timerOn === false
      ? this.setTime(-1)
      : null;
  }

  reset() {
    this.setState(
      {
        session: 25,
        break: 5,
        time: "",
        timeLeft: "",
        timerOn: false,
        currentTimer: "session",
      },
      () => {
        clearInterval(this.timer);
        this.setTime(0, 0);
        this.audioBeep.pause();
        this.audioBeep.currentTime = 0;
        document.getElementById("timer");
        document.getElementById("start_stop");
      }
    );
  }

  startStop() {
    return this.state.timerOn === false && this.state.time > 0
      ? this.setState({ timerOn: true }, () => {
          this.timer = setInterval(this.countDown, 1000);
          document.getElementById("start_stop");
        })
      : this.state.timerOn === true
      ? this.setState({ timerOn: false }, () => {
          clearInterval(this.timer);
          this.timer = 0;
          document.getElementById("start_stop");
          document.getElementById("timer");
        })
      : document.getElementById("start_stop");
  }

  countDown() {
    if (this.state.currentTimer === "session") {
      document.getElementById("timer");
      let seconds = this.state.time - 1;
      this.reduceTime(seconds);

      if (seconds <= 0) {
        this.setState(
          { currentTimer: "break", time: this.state.break * 60 + 1 },
          () => {
            this.audioBeep.play();
          }
        );
      }
    } else if (this.state.currentTimer === "break") {
      document.getElementById("timer").style.backgroundColor = "$wine";
      let seconds = this.state.time - 1;
      this.reduceTime(seconds);

      if (seconds <= 0) {
        this.setState({
          currentTimer: "session",
          time: this.state.session * 60 + 1,
        });
      }
    }
  }

  reduceTime(timeLeft) {
    var newDuration = timeLeft;

    var minute = parseInt(newDuration / 60, 10);
    var second = parseInt(newDuration % 60, 10);
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    this.setState({ time: newDuration, timeLeft: `${minute}:${second}` });
  }

  render() {
    window.onload = () => this.reset();

    return (
      <div id="clock">
        <p id="h1">25 + 5 Clock</p>

        <div id="break">
          <div id="break-label">Break Length</div>
          <button id="break-decrement" class="break" onClick={this.decrease}>
            -
          </button>
          <div id="break-length">{this.state.break}</div>
          <button id="break-increment" class="break" onClick={this.increase}>
            +
          </button>
        </div>

        <div id="session">
          <div id="session-label">Session Length</div>
          <button
            id="session-decrement"
            class="session"
            onClick={this.decrease}
          >
            -
          </button>
          <div id="session-length">{this.state.session}</div>
          <button
            id="session-increment"
            class="session"
            onClick={this.increase}
          >
            +
          </button>
        </div>

        <div id="bottom">
          <div id="timer">
            <div id="timer-label">{this.state.currentTimer}</div>
            <div id="time-left">{this.state.timeLeft}</div>
          </div>

          <button id="start_stop" onClick={this.startStop}>
            Start/Stop
          </button>
          <button id="reset" onClick={this.reset}>
            Reset
          </button>
        </div>

        <div id="footer">
          Project by: <a href="https://codepen.io/Libbi-Mylah">Libbi Damian</a>{" "}
          for
          <a href="https://www.freecodecamp.org/">
            <img
              alt="freeCodeCamp"
              src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
              width="150"
              height="15"
            ></img>
          </a>
        </div>
        <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

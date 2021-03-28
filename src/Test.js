import * as React from 'react';

class Component extends React.Component {
  componentDidMount() {
    console.log(this.test);
    this.test.onmouseover = () => {
      this.timeId && clearInterval(this.timeId);
    };
    this.test.onmouseout = () => {
      console.log(this.state.time);
      this.timeId = setInterval(this.handler, this.state.time);
    };
    this.auto();
  }
  state = {
    time: 5,
  };
  timeId = null;
  yisTop = false;
  xisLeft = false;
  t = 0;
  l = 0;

  handler = () => {
    let { yisTop, xisLeft, t, l } = this;
    const viewHeight = document.documentElement.clientHeight;
    const viewWidth = document.documentElement.clientWidth;
    const refHeight = this.test.clientHeight;
    const refWidth = this.test.clientWidth;
    const offWidth = viewWidth - refWidth;
    const offHeight = viewHeight - refHeight;

    if (!yisTop) {
      let _t = t + 1;
      this.t = _t;
      if (_t >= offHeight) {
        this.yisTop = true;
      }
    } else {
      let _t = t - 1;
      this.t = _t;
      if (_t <= 0) {
        this.yisTop = false;
      }
    }

    if (xisLeft) {
      let _l = l + 1;
      this.l = _l;
      if (_l >= offWidth) {
        this.xisLeft = false;
      }
    } else {
      let _l = l - 1;
      this.l = _l;
      if (_l <= 0) {
        this.xisLeft = true;
      }
    }

    this.test.style.transform = `translate(${l}px,${t}px)`;
  };

  auto = () => {
    this.timeId = setInterval(this.handler, this.state.time);
  };

  render() {
    return (
      <div
        ref={(ref) => (this.test = ref)}
        style={{ position: 'fixed', background: 'red', width: 200, height: 200 }}
      ></div>
    );
  }
}

export default Component;

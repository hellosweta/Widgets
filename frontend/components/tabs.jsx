const React = require('react');

class Headers extends React.Component {
  render() {
    let selectedTabIndex = this.props.selectedTabIndex;
    let tabTitles = this.props.panes.map((pane, idx) => (
      <header
        id = "awesome"
        onClick = {this.props.onTabChosen.bind(null, idx)}
        className = {selectedTabIndex === idx ? "headers selected" : "headers unselected"}
        >
        {pane.title}
      </header>
    ));
    return (
      <div>
        {tabTitles}
      </div>
    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      selectedTabIndex: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(idx){
    this.setState({selectedTabIndex: idx});
  }

  render() {
    let pane = this.props.panes[this.state.selectedTabIndex];
    return (
      <div className = "container">
        <Headers

          onTabChosen = {this.selectTab}
          selectedTabIndex = {this.state.selectedTabIndex}
          panes = {this.props.panes}>
        </Headers>

        <article className = "content">{pane.content}</article>
      </div>
    );

  }
}

module.exports = Tabs;

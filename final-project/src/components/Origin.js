import React from "react";
import '../Origin.css';

const overlayStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    width: 900,
    height: 700
};

const Title = ({ title = "Here *" }) => (
    <div style={overlayStyle}>
        <h1 className="title">{title}</h1>
    </div>
);

export default class Origin extends React.Component {
    constructor() {
        super();
        this.state = { hover: false };
        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
    }

    onEnter = () => {
        this.setState({ hover: true });
    }

    onExit = () => {
        this.setState({ hover: false });
    }


    render() {
        var photoStyle = {
            background:
                "url(../images/canada_map.jpg)",
            backgroundSize: "cover",
            width: 900,
            height: 700,
            margin: 30
        };

        return (
            <div className="main-content">
                <div style={photoStyle} onMouseEnter={this.onEnter} onMouseLeave={this.onExit}>
                    {this.state.hover && <Title />}
                </div>
                <p id='origin-story'>
                    I was born in a little town about an hour outside of Toronto. Naturally I grew up as a Maple Leafs fan.
                    When I was 7, my parents moved to New Hampshire and got new jobs. My allegiances shifted to the Boston Bruins,
                    becoming a massive Patrice Bergeron fan. But I still love maple syrup.
                </p>
            </div>
        )
    }
}
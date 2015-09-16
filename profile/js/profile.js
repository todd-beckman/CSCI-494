window.initprofile = function(p) {
    var url = ROOTURL+"/people/" + p + ".json";
    var durl = ROOTURL+"/profile/" + p + "desc.html"; 
    var ProfileDesc = React.createClass({displayName: "ProfileDesc",
        getInitialState : function () {
            return { data : ""};
        },
        loadState : function () {
            ajax(url, function (response) {
                this.setState(JSON.parse(response));
            }.bind(this));
        },
        componentDidMount : function () {
            this.loadState();
        },
        render : function (){
            return "";
        }
    });
    var Profile = React.createClass({displayName: "Profile",
        getInitialState : function () {
            return {name: null, title: "", email: "", github: "", website: "", desc: ""}
        },
        loadState : function () {
            ajax(url, function (response) {
                this.setState(JSON.parse(response));
            }.bind(this));
        },
        componentDidMount : function () {
            this.loadState();
        },
        render : function () {
            if (this.state.name == null) {
                return React.createElement("div", null);
            }
            var url="/img/" + this.state.name.split(" ")[0].toLowerCase() + ".jpg";
            var git="https://github.com/" +  this.state.github;

            return (React.createElement("div", null, 
                React.createElement("div", {className: "col-xs-12 col-sm-5"}, 
                    React.createElement("div", {id: "personpic"}, React.createElement("img", {src: url, alt: this.state.name})), 
                    React.createElement("div", {id: "personinfo", class: "row"}, 
                        React.createElement("div", {className: "col-xs-3"}, 
                            React.createElement("p", null, "Email:"), 
                            React.createElement("p", null, "Github:"), 
                            React.createElement("p", null, "Website:")
                        ), 
                        React.createElement("div", {className: "col-xs-9"}, 
                            React.createElement("p", null, this.state.email), 
                            React.createElement("p", null, React.createElement("a", {href: git}, this.state.github)), 
                            React.createElement("p", null, React.createElement("a", {href: this.state.website}, "Link Here"))
                        )
                    )
                ), 
                React.createElement("div", {className: "col-xs-12 col-sm-6"}, 
                    React.createElement("h1", null, this.state.name), 
                    React.createElement("h2", null, this.state.title), 
                    React.createElement("iframe", {src: durl})
                )
            ));
        }
    });

    React.render(React.createElement(Profile, null), document.getElementById("personarea"));
};
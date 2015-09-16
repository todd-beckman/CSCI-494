window.initprofile = function(p) {
    var url = ROOTURL+"/people/" + p + ".json";
    var Profile = React.createClass({
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
                return <div></div>;
            }
            var url="/img/" + this.state.name.split(" ")[0].toLowerCase() + ".jpg";
            var git="https://github.com/" +  this.state.github;
            var content = this.state.desc.split("\n\n").map(function (line, key) {
                return (
                    <p key={key} className="lead">{line}</p>
                );
            });
            return (<div>
                <div className="col-xs-12 col-sm-5">
                    <div id="personpic"><img src={url} alt={this.state.name}/></div>
                    <div id="personinfo" class="row">
                        <div className="col-xs-3">
                            <p>Email:</p>
                            <p>Github:</p>
                            <p>Website:</p>
                        </div>
                        <div className="col-xs-9">
                            <p>{this.state.email}</p>
                            <p><a href={git}>{this.state.github}</a></p>
                            <p><a href={this.state.website}>Link Here</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <h1>{this.state.name}</h1>
                    <div>{content}</div>
                </div>
            </div>);
        }
    });

    React.render(<Profile/>, document.getElementById("personarea"));
};
import React from "react";

class ProfileClass extends React.Component {
    render() {
        return (
            <h1>profie class component</h1>
        )
    }
}

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1> hello component using class based component</h1>
            </div>
        )
    }
}


export class AnotherProfile extends React.Component {
    render () {
        return (
            <div>
                <h1> This is practice session for class based components</h1>
            </div>
        )
    }
}

export default ProfileClass;
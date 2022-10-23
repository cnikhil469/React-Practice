function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}


function MainContent() {
    return (
        <h1>Hey, I'm learning React</h1>
    )
}



ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>, 

document.getElementById("aloha"))


// function addElement(content) {
//     let item = document.createElement('h1')
//     item.textContent = content
//     return item
// }

// document.getElementById("aloha").appendChild(addElement("yeah.. you learnt appendChild functionality!!"))


// const f = 
// <div>
//     <h1 className="header">hey, this is a h1 tag</h1>
//     <p>this is a p tag.. that's just for a practice!!</p>
// </div>
// ReactDOM.render(f, document.getElementById("aloha"))

// function Mavbar() {
//     return (
//         <nav>
//             <h1>Nikhil!</h1>
//                 <ul>
//                     <li>first list item</li>
//                     <li>second list item</li>
//                     <li>third list item</li>
//                 </ul>
//         </nav>
//     )
// }

// ReactDOM.render(
//     <Mavbar />
//     , document.getElementById("aloha")
// )

const test = 
<div>
    <h1>h1 tag</h1>
    <p>p tag</p>
    <h2>h2 tag</h2>
    <br>break tag</br>
    <span>span tag</span>
    <nav>nav tag</nav>
</div>

// document.getElementById("aloha").append(JSON.stringify(test))
document.getElementById("aloha").appendChild(test)
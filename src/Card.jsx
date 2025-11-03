import ReactLogo from './assets/react.svg';

function Card() {

    return (
        <div className="card">
            <img src={ReactLogo} alt="profile picture"></img>
            <h2>Bro Code</h2>
            <p>I make Youtube videos and play video games</p>
        </div>
    )

}

export default Card
import '../css/design.css'
import '../css/global.css'
import '../css/layout.css'

export default function Footer(){
    return (
    <footer className="footer_main">
        <section className="configs_game">
            <button className="buttons_config">RESET</button>
            <button className="buttons_config">CHANGE COLOR</button>
            <button className="buttons_config">TURN DAY</button>
            <button className="buttons_config">TURN NIGHT</button>
        </section>
    </footer>
    );
}
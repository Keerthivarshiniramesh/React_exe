import ocean from '../images/ocean.jpg'
import ocean1 from '../images/ocean2.jpg'
import falls from '../images/falls2.jpg'
import mountain from '../images/mountains2.jpg'
import mountain1 from '../images/mountainskies.jpg'

import { useNavigate } from 'react-router-dom'



function Portofolio() {
    const use = useNavigate()
    return (
        <main id="porto">
            <button onClick={() => use('/')} id="btn">Home</button>
            <section className="s1">
                <img src={ocean} alt="Ocean1"></img>
            </section>
            <section className="s1">
                <img src={ocean1} alt="Ocean2"></img>
            </section>
            <section className="s1">
                <img src={falls} alt="Ocean3"></img>
            </section>
            <section className="s1">
                <img src={mountain} alt="Ocean4"></img>
            </section>
            <section className="s1">
                <img src={mountain1} alt="Ocean5"></img>
            </section>

        </main>
    )
}
export default Portofolio
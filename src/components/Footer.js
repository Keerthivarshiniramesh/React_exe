function Footer() {
    return (
        <footer id="message">
            <p className="para1">Contact</p>
            <p className="para2">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim,
                ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.
                Praesent tincidunt sed tellus.</p>

            <label >Name</label><br></br>
            <input id="name" type="text">
            </input><br></br><br></br>

            <label >E-mail </label><br></br>
            <input id="email" type="email">
            </input><br></br><br></br>

            <label>Message </label><br></br>
            <input id="message" type="type">
            </input><br></br><br></br>
            <button>SEND</button>

        </footer>
    )
}
export default Footer
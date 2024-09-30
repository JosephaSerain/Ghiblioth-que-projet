
import "./Header.css";



function Header() {
    return (
        <header className="headerContainer">
            <h1 className="main-site-title">Ghibliothèque</h1>
            <div className="introContainer"> {/* Correction ici */}
                <div className="studioIntro">
                    <h2 className="sectionName">Le studio</h2>
                    <p className="presentationText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos quaerat voluptates est soluta architecto, pariatur labore 
                        exercitationem unde quisquam reprehenderit, iste libero consequuntur quia voluptatem assumenda temporibus iusto alias.</p>
                </div>
                <div className="presentationImg">
                    <img src="https://i.pinimg.com/736x/dd/52/ac/dd52ac67c092b97e6b6921f52d83e676.jpg" alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;

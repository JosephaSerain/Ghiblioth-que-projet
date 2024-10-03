import './MovieModal.css';

type TMovie = {
    id: number;
    name: string;
    date: number;
    resume: string;
    image: string;
    bande_annonce: string;
  };
  

type TMovieModal = {
    isOpen: boolean;
    movie: TMovie;
    onClose: ()=> void;
};

function MovieModal (props: TMovieModal){
    const {isOpen, movie, onClose}= props;
    if(!isOpen || !movie) return null;
    return(
        <div className={`modal ${isOpen ? 'is-active': ''}`} id='movie-modal'>
            <div className='modal-background' onClick={onClose}></div>
            <div className='modal-card'>
                <header className='modal-card-head'>
                    <p className='modal-card-title'>{movie.name}</p>
                    <button className='delete' aria-label='close' onClick={onClose}></button>
                </header>
                <section className='modal-card-body'>
                    <div className='column' id='left-column-modal'>
                        <figure className="image is-200x200">
                            <img src={movie.image} alt={movie.name} />
                        </figure>
                        <div className="column" id="right-column-modal">
                            <h3>{movie.name}</h3>
                            <p>{movie.date}</p>
                            <p>{movie.resume}</p>
                            <a href={movie.bande_annonce} target="_blank" rel="noopener noreferrer">
                                Voir la bande-annonce
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>      
    );

};

export default MovieModal;
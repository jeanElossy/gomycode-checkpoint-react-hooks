import React, { useState } from 'react'

const AddCard = ({add}) =>{

    const [increment, setIncrement] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [urlPoster, setUrlPoster] = useState("");
    const [urlFilm, setUrlFilm] = useState("");
    
    const handleIncrement = (e) => {
        e.preventDefault();
        (increment < 5 ? setIncrement(increment + 1) : setIncrement(increment))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        (title === "" 
            || description === "" 
            || urlPoster === "" 
            || urlFilm === ""
            || increment === 0
        ) ? alert("Veuillez renseigner tous les champs") : (
            add({
            id: new Date().getTime(),
            title,
            description,
            urlPoster,
            urlFilm,
            increment
        }))
        setTitle("")
        setDescription("")
        setUrlPoster("")
        setUrlFilm("")
        setIncrement(0)
    }

    return (
        <div className="add__film container mb-4">
            <h1 className="text-center mb-4 text-decoration-underline">Ajouter un film</h1>
            <form className="row g-3">
                <div className="col-md-6 position-relative">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Le titre de votre film" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="col-md-6 position-relative">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="La descrption de votre film" 
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <div className="d-md-flex gap-3">
                    <div className="input-group mb-3">
                        <input 
                            type="url" 
                            id="homepage" 
                            name="homepage" 
                            className="form-control" 
                            placeholder="Inserer url de votre poster"
                            onChange={(e) => setUrlPoster(e.target.value)}
                            value={urlPoster}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input 
                            type="url" 
                            id="homepage" 
                            name="homepage" 
                            className="form-control" 
                            placeholder="Inserer url de votre film"
                            onChange={(e) => setUrlFilm(e.target.value)}
                            value={urlFilm}
                        />
                    </div>
                </div>
                <div className="d-flex align-items-center mb-2 justify-content-between flex-xs-column">
                    <div className="d-flex align-items-center mb-2">
                        <button className="btn btn-success" onClick={handleIncrement}>Evaluer</button>
                        <div>&nbsp; Note: <span>{increment}</span>/5 </div>
                    </div>
                    <input type="submit" value="Ajouter un film" className="btn btn-outline-primary" onClick={handleSubmit} />
                </div>
            </form>
            
        </div>
    )
}
export default AddCard;

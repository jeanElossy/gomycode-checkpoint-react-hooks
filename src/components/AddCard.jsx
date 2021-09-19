import React, { useState } from 'react'

const AddCard = ({add}) =>{

    const [increment, setIncrement] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [urlPoster, setUrlPoster] = useState("");
    const [urlFilm, setUrlFilm] = useState("");
    
    const handleIncrement = () => {
        if(increment < 5){
            setIncrement(increment + 1)
        }else{
            setIncrement(increment)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        add({
            id: new Date().getTime(),
            title,
            description,
            urlPoster,
            urlFilm
        })
    }

    return (
        <div className="add__film container mb-4">
            <h1 className="h2 text-center mb-4">Ajouter un film a la liste</h1>
            <form className="row g-3">
                <div className="col-md-6 position-relative">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Le titre de votre film" 
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-6 position-relative">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="La descrption de votre film" 
                        required
                        onChange={(e) => setDescription(e.target.value)}
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
                        />
                    </div>
                </div>
                <div className="d-flex align-items-center mb-2 justify-content-between">
                    <div className="d-flex align-items-center mb-2">
                        <button className="btn btn-success" onClick={handleIncrement}>Evaluer</button>
                        <div>&nbsp;Evaluer votre <span>{increment}</span>/5 </div>
                    </div>
                    <input type="submit" value="Ajouter un film" className="btn btn-outline-primary" onClick={handleSubmit} />
                </div>
            </form>
            
        </div>
    )
}
export default AddCard;

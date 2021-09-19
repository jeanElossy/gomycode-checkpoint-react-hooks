import React, { useState } from 'react'

const AddCard = () =>{

    const [increment, setIncrement] = useState(0);
    const handleIncrement = () => {
        if(increment < 5){
            setIncrement(increment + 1)
        }else{
            setIncrement(increment)
        }
    }

    return (
        <div className="add__film container mb-4">
            <h1 className="h2 text-center">Ajouter un film a la liste</h1>
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-6 position-relative">
                    <input type="text" className="form-control" id="validationTooltip01" placeholder=" Le titre de votre film" required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-6 position-relative">
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="La descrption de votre film" required/>
                    <div className="valid-tooltip">
                    Looks good!
                    </div>
                </div>
                <div className="d-md-flex gap-3">
                    <div className="input-group mb-3">
                        <input type="url" id="homepage" name="homepage" className="form-control" placeholder="Inserer url de votre poster"></input>
                    </div>
                    <div class="input-group mb-3">
                        <input type="url" id="homepage" name="homepage" className="form-control" placeholder="Inserer url de votre film"></input>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-2 justify-content-between">
                    <div className="d-flex align-items-center mb-2">
                        <button className="btn btn-success" onClick={handleIncrement}>Evaluer</button>
                        <div>&nbsp;Evaluer votre <span>{increment}</span>/5 </div>
                    </div>
                    <input type="submit" value="Ajouter un film" className="btn btn-outline-primary"/>
                </div>
            </form>
            
        </div>
    )
}
export default AddCard;

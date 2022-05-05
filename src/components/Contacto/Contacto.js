import React from 'react';
import Map from './Map';


const Contacto = () => {
    return (
        <section className='bg-gray'>
                <h3 className='ms-madi'>Contactanos</h3>
                <hr />
                <div className='row'>
                    <div className='col'>
                        <Map />
                    </div>
                    <div className='col'>
                        <form>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingNombre" placeholder="Tú Nombre" />
                                <label for="floatingNombre">Nombre</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" />
                                <label for="floatingEmail">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingAsunto" placeholder="Asunto" />
                                <label for="floatingAsunto">Asunto</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" placeholder="Mensaje" id="floatingMensaje" style={{height: "160px"}}></textarea>
                                <label for="floatingMensaje">Mensaje</label>
                            </div>
                            <button type="submit" className="btn btn-es" style={{width:"100%"}}>Enviar</button>
                        </form>
                    </div>
                </div>
        </section>
    );
}

export default Contacto;
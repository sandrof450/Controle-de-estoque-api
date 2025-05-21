import { useEffect, useState} from 'react';
import '../App.css'
import './Dashboard.css'


export default function Dashboard(props: any){
    return(
        <>
            <header className="cabecalho-dashboard">
                <div className='header-container'>
                    <div className="d-flex justify-content-between align-items-center me-5">
                        <h2>Dashboard</h2>
                        <button className="btn btn-primary px-2 py-1">
                            <i className="bi bi-plus me-2"></i>
                            Adicionar Produto
                        </button>
                    </div>
                </div>
            </header>            
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <label className="form-label">Datalist example</label>
                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
                        </input>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import { useEffect, useState} from 'react';
import './MenuLateral.css';

interface MenuItem{
    id: string;
    text: string;
    icone: string;
}

export default function MenuLateral(){   
    const [itemMenuState, setItemMenuState] = useState<string | null>(null);
    const [expandirMenuLateral, setExpandirMenuLateral] = useState<Boolean | false>(false);
    
    const [items] = useState<MenuItem[]>([
    {id: '1', text: 'Dashboard', icone: 'bi bi-columns-gap'},
    {id: '2', text: 'Produtos', icone: 'bi bi-box'},
    {id: '3', text: 'Categorias', icone: 'bi bi-collection'},
    {id: '4', text: 'Fornecedores', icone: 'bi bi-person-plus'},
    {id: '5', text: 'Entradas/Saídas', icone: 'bi bi-arrow-down-up'},
    {id: '6', text: 'Relatórios', icone: 'bi bi-journals'},
    {id: '7', text: 'Configurações', icone: 'bi bi-gear'},
    {id: '8', text: 'Sair', icone: 'bi bi-box-arrow-left'},
    ])

    useEffect(()=> {
        debugger;
        setItemMenuState('1');
    }, [])

    function selectLink(id: string){
        setItemMenuState(id);
    };

    return (
        <>
            <nav 
                className={`menu-lateral ${expandirMenuLateral === true? 'expandir': ''}`}
            >
                <div className='btn-expandir'>
                <i 
                    className='bi bi-list'
                    id='btn-exp' 
                    onClick={() => {
                        setExpandirMenuLateral(!expandirMenuLateral);
                    }}
                ></i>
                </div>
                <ul>
                {items.map((item) => (
                <li 
                    key={item.id} 
                    className={`item-menu ${itemMenuState === item.id ? 'ativo' : ''}`} 
                    onClick={() => 
                    selectLink(item.id)}
                >
                    <a href="#">
                        <span className='icon'><i className={item.icone}></i></span>
                        <span className='txt-link'>{item.text}</span>
                    </a>
                </li>
                ))}
                </ul>
            </nav>
        </>
    )
}
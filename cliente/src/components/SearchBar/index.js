import React, { useState } from 'react';
import {FaSearch } from 'react-icons/fa';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const onKeyUp = (e, props, url) =>{
    if (e.keyCode === 13){
        props.navigate(url)
    }
}
const SearchBar = (props)=>{
    const [busca,setBusca] = useState(props.initial);
    return(
        <Container className='input-group-sm shadow-sm '>
            <input onKeyUp={(e)=>onKeyUp(e, props, props.finalUrl + busca)} value={busca} onChange={(e)=>setBusca(e.target.value)} name="busca" id="busca" type="text" 
                                className="rounded-0 form-control card bg-white border-0"   
                             />
            <div className="input-group-append">
                <Link to={props.finalUrl + busca}>
                    <button  className="btn card bg-white rounded-0 border-0"><FaSearch size={15}/></button>
                </Link>
            </div>
        </Container>     
    )
}
export default SearchBar
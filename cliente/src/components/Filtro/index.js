import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {DivFiltro} from './styles'
import { FaAlignLeft } from "react-icons/fa";
import api from '../../services/api';

const preRender = async (base) => {
  for (const item of base) {
    if (item?.checks && typeof item?.checks[0] === 'string') {
      let url = item.checks.pop();
      try {
        const response = await api.get(url);
        response.data.forEach((obj) => {
          Object.entries(obj).forEach(([chave, valor]) => {
            item.checks.push({ label: valor.charAt(0).toUpperCase() + valor.slice(1), value: valor })
          });
        });
      } catch (error) {
      }
    }
  }
  return base;
};


const Filtro = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await preRender(props.formData);
      setFormData(result);
    })();
  }, [props.formData]);

  const renderFormGroup = (data) => { 
    return data.map((item, index) => (
      <Form.Group key={index} className="form-group">
        <Form.Label><strong>{item.label[0]}</strong></Form.Label>
        {item.input ? (
          <Form.Control type={item.input.type} name={item.input.label} value={item.input.value} onChange={(e) => handleInputChange(index, e)}/>
        ) : (
          item.checks.map((check, i) => (
            <Form.Check key={i} type="radio" name={item.label[1]} id={`${item.label[1]}-${i}`} label={check.label} value={check.value}/>
          ))
        )}
      </Form.Group>
    ));
  };
  
  const handleInputChange = (index, e) => {
    const updatedFormData = [...formData];
    updatedFormData[index].input.value = e.target.value;
    setFormData(updatedFormData);
  };
  
  return (
    <>
      <h6 className="filtro" onClick={()=>setExpanded(!expanded)}><FaAlignLeft size={20} /> Filtro</h6> 
        {expanded && (
          <DivFiltro>
          <Form className="form" onSubmit={props.handleSubmit}>
            {renderFormGroup(formData)}
            <Button type="submit" className="btn btn-sm btn-dark">
                Salvar alterações
            </Button>
          </Form>
          </DivFiltro>
        )}
    </>
  );
};
export {Filtro, preRender};

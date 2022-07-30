import { Component } from "react";
import {Conteudo, Doacoes, SobreMim, SobreHackin} from './styles'
import Loading from "../../components/Loading";
import qrcode from '../../svgs/qrcode.jpeg'
import donatin from '../../svgs/donatin.gif'

export default class Donate extends Component{
 constructor(props){
    super(props);
    this.state={
        isLoading:true
    }
 }
 componentDidMount(){
     this.setState({isLoading:false})
 }
 render(){
    const {isLoading} =this.state;
    return(
        isLoading ? <Loading isPage={true}/>:
        <>
        <Conteudo>
            <Doacoes>
                <h5 className="aquin font-weight-bold">Doações</h5>
                <h6 className="mt-2 mb-3">Você pode nos ajudar fazendo uma doação em qualquer valor atraves das plataformas abaixo: </h6>
                <h6 className="rozin font-weight-bold" >Paypal:</h6>
                <form target="_blank"  className="topico2 mt-2" action="https://www.paypal.com/donate" method="post" >
                    <input type="hidden" name="hosted_button_id" value="WDCCM9RV7BV7W" />
                    <input type="image" src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                </form>
                <h6 className="rozin font-weight-bold mt-3" >Chaves Pix:</h6>
                <h6 className="mt-2 mb-2">972d6bfe-9cfb-4f3d-b954-c402c4bed010</h6>
                <h6>+5535998190720</h6>
                <h6 className="rozin font-weight-bold mt-3" >Qr Code:</h6>
                <div>
                    <img className="mt-2 me-5" width={160} height={160} src={qrcode} alt=""/>
                    <img width={180} height={180}  className="img-thumbnail ms-5"src={donatin} alt=""/>
                </div>
            </Doacoes>
            <SobreMim>
                <h5 className="aquin mb-2 font-weight-bold">Sobre nós</h5>
                <h6>Olá sou Guilherme, tenho 18 anos, criei esse site com o objetivo de divulgar noticias de forma facil e direta</h6>
            </SobreMim>
            <SobreHackin>
                <h5 className="rozin mb-2 font-weight-bold">Sobre o site</h5>
                <h6>O webapp foi feito com: </h6>
                <div className="d-flex flex-row mt-2">
                    <h6 className="font-weight-bold me-1">Client: </h6>
                    <h6 className="">ReactJs,Bootstrap</h6>
                </div>
                <div className="d-flex flex-row mt-2">
                    <h6 className="font-weight-bold me-1">Backend: </h6>
                    <h6 >AdonisJs</h6>
                </div>

            </SobreHackin>
        </Conteudo>
        </>
    );
 }
}
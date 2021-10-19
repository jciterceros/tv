import React, {Component} from 'react';
import ReactTV,{ Plataform} from 'react-tv';
import './App.css';
//https://github.com/raphamorim/react-tv
import Contato from "./componentes/layout/contato";
import Card from "./componentes/layout/Card";
import PlayList from './componentes/PlayList';



function App(props){
    //state ={date: new Date()}
    /*
      componentDidMount(){
      setInterval(() => setState({date: new Date()}),1000)
    }
    https://pt-br.reactjs.org/docs/state-and-lifecycle.html
    */
    const texto0 = "Contato"
    const texto1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est dolore minima quo nesciunt. Repudiandae laudantium quam quas soluta a ducimus eum dolorem quia inventore. Quia omnis tenetur voluptate explicabo."
    const texto2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, perspiciatis. Quo natus omnis atque quam fugiat exercitationem quos. Beatae inventore omnis aliquid ducimus vitae assumenda alias molestiae aliquam unde reiciendis."
    const texto3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum, asperiores explicabo laudantium nam ex animi non nobis porro ullam minima vitae illo delectus earum placeat. Expedita tenetur saepe rem."
    const texto4 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero tempora nesciunt et perferendis rerum soluta omnis repellendus maiores sapiente provident, exercitationem similique explicabo minus vel voluptas velit debitis eum ipsam?"
    return(
      <div className="App">
        <Contato titulo="Fomulario">{texto0}</Contato>
        
        <Card titulo="PlayList">
          <PlayList></PlayList>
        </Card>
        <Card titulo="Footer1">{texto1}</Card>
        <Card titulo="Footer2">{texto2}</Card>
        <Card titulo="Footer3">{texto3}</Card>
        <Card titulo="Footer4">{texto4}</Card>
      </div>
    );
};
export default App;
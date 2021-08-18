import  React, { Component } from 'react';
import './Header.css';

export default class Header extends Component{
	render(){
		return(
			<header>
				<div className="titulo">React-Juego de memoria </div>
				<div>
					<button className="boton-reiniciar"  onClick={this.props.resetearPartida}>
					Reiniciar
					</button>
				</div>
				<div>
					<div className="titulo">Intentos:{this.props.numeroDeIntentos} </div>
				</div>
			</header>
			);

	}
};



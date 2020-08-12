import React, {Component} from 'react';

export default class Produto extends Component {
    constructor(props){
        super(props)

        this.state = {
            nome: "vacina para covid",
            qtde: 0,
            preco: 0,
            total: 0,
        }
    }

    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }

    setQtde(e){
        this.setState({
            qtde: e.target.value
        })
    }

    setPreco(e){
        this.setState({
            preco: e.target.value
        })
    }

    calcular() {
        this.setState({
            total: this.state.preco * this.state.qtde
        })
    }

    render() {
        const nome = this.state.nome
        const qtde = this.state.qtde
        const preco = this.state.preco
        return (
            <div>
                <div>
                    <label>Nome do produto</label>
                    <input type="text" value={nome} onChange={e => this.setNome(e)} id=""/>
                </div>
                <div>
                    <label>Qtde do produto</label>
                    <input type="number" value={qtde} onChange={e => this.setQtde(e)} id=""/>
                </div>
                <div>
                    <label>Preço do produto</label>
                    <input type="number" value={preco} onChange={e => this.setPreco(e)} id=""/>
                </div>
                <button onClick={() => this.calcular()}>Calcular</button>
                <div>
                    <label>Total: {this.state.total}</label>
                </div>
            </div>
        );
    }
}
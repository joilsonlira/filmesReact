// import Test from './Components/test'
// import Chip from './Components/Chip'
// import { wait } from '@testing-library/react';
import React, { Component } from 'react'
import Card from './Components/layout/Card'
import './App.css'
// import Card from './Components/layout/Card'
import Api from './data/api'

// export default Props =>(
//     // <Test nome='Joilson'></Test>
//     // <Chip
//     // number='01# '
//     // name='Bulbasaur'>
//     // </Chip>
// )

class App extends Component{


    state={
        pokes: [],
    }

    async componentDidMount(){
        const response = await Api.get('war')

        this.setState({ pokes: response.data});
    }

    render(){

        const {pokes} = this.state;

        return(
            <div>
                <h1>Listar Filmes</h1>
                <div className="App">
                    
                    {pokes.map(pK => (
                        <div  key={pK.show.id}>
                            <Card 
                            cabe={pK.show.name} 
                            titulo={pK.show.url}>
                                
                                <img src={pK.show.image.original} />
                                
                            </Card>
                            {console.log(pokes)}
                            </div>
                        ))}
                </div>
            </div>
        );
    };
};
export default App;
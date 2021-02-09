import React, {Component} from 'react';
import './App.css';

class App extends Component {
   foo2 = () => 'Bar2';
  render() {
     const name = 'John  Doe';
     const foo= () => 'Bar';
     const loading = false;
     const showName = true; 

   

    return (
      <div className="App">
      {loading ? <h4>Loading...</h4> :  <h1>Hello { showName && name.toUpperCase()} {1+1}</h1>


    }
          <h1>{foo()}</h1>
          <h1>{this.foo2()}</h1>
         </div>




      
 
    );
  }

}

export default App;

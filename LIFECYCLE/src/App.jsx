// import React from "react";
// import { Component } from "react";


// class App extends Component{
//   constructor(props)
//   {
//     super(props);
//     console.log("constructor created")
//     this.state={Count:0};
//   }
//   static getDerivedStateFromProps(props,state)
//   {
//     console.log("get derivedfrom pros worked");
//     return null;
//   }
//   componentDidMount()
//   {
//     console.log("componet mounting in dom")
//   }
//   render(){
//     console.log("render worked successfully")
//     return(
//       <div>
//         <h2>Count:{this.state.Count}</h2>
//       </div>
//     )
//   }
// }

// export default App;









// import React from "react";
// import { Component } from "react";

// class App extends Component{
//   constructor(props)
//   {
//     super(props);
//     console.log("constructor created")
//     this.state={Count:0};
//   }
//   static getDerivedStateFromProps(props,state)
//   {
//     console.log("get derivedfrom pros worked");
//     return null;
//   }
//   shouldComponentUpdate(nextprops,nextstate)
//   {
//     console.log("update done success")
//     return true;
//   }
//     render(){
//     console.log("render worked successfully")
//     return(
//       <div>
//         <h2>Count:{this.state.Count}</h2>
//         <button onClick={()=>{
//             this.setState({count:this.state.Count + 1});
//         }}>
//             increment
//         </button>
//       </div>
//     );
//   }
// }

// export default App;








import React from "react";
import { Component } from "react";

class App extends Component{
  componentDidMount()
  {
    console.log("child mounted")
    this.timer=setInterval(()=>{
        console.log("running interval")
    },1000);
 }
componentWillUnmount()
{
    console.log("unmounting");
    clearInterval(this.timer)
}

  render(){
    console.log("render worked successfully")
    return(
      <div>
        <h2>Count</h2>
      </div>
    )
  }
}

export default App;
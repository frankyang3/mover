
import React from "react"
import './index.css';

//main app component
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            pos: 28,   //position
        };
        
    }

    //Keypress Listeners in lifecycle methods:
    componentWillMount() {
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
    }
  
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
    }      



    //when key pressed, what happens
    onKeyPressed(e) {
      this.setState(prevState => {
          return{
              pos: movement(prevState.pos,e.keyCode)
          }
      })
    }

    

    //render board
    render() {
        
        //Inline style for black block
        var styles = {
            border: '1px solid #999',
            float: 'left',
            height: '34px', 
            width: '34px',
            marginRight: '-1px',
            marginTop: '-1px'
        }
        var blk = {
            background: 'black',
        }

        var board = []
        for(var i = 0; i<8; i++){
            for(var j =0; j<8; j++){
                if(8*i + j == this.state.pos){
                    console.log("hi")
                    board.push(<Square id = {8*i + j} style = {blk}  />)
                }else{
                    board.push(<Square id = {8*i + j} style = {styles} />)
                }
            }
            board.push(<div className = "board-row" />)
        }
        
        return (
          <div>
            {board}
          </div>
            
        )    
    }

    
    
}


//28 is midpoint, +8 to go up, -8 go down +1 right, -1 left
function movement(cur, dir){
    //dir uses keycodes left 37, clockwise till 40
    if(dir == 39 && cur%8 != 7){
        return (cur+1)
    }else if( dir == 40 && cur+8 < 64){
        return (cur+8)
    }else if (dir == 37 && cur%8 != 0){
        return (cur -1)
    }else if(dir == 38 && cur-8 >=0){
        return (cur-8)       
    }else{
        return cur
        
    }
}
//Square component
function Square(props){
    
    return(
        <div className="squares" id = {props.id} style = {props.style} >
            
        </div>
    )
}
    

export default App
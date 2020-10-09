import React from 'react';
import Nav from './Nav';
import SideDrawer from './Sidetoggler';
import Backdrop from './Backdrop';
class App extends React.Component {
state={
  sideDrawerOpen:false
};
  drawerToggleClickHandler=()=>{
    this.setState((prevState)=>{
      return {sideDrawerOpen:! prevState.sideDrawerOpen};
    });
  };

backdropClickHandler=() => {
  this.setState({sideDrawerOpen:false});
};

  render(){
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop=<Backdrop click={this.backdropClickHandler}/>;
    }
    return(
      <div style={{height:'100%'}}>
      <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      </div>
    );
  }

}export default App;

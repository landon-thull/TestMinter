import "./index.css"
import React, { Component } from "react"
import {Box, SwitchNet, AlgoButton, AlgoMint, Pipeline, Form, Input} from "pipeline-ui"


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      myAddress: "",
      asaData: {
        creator: "",
        note: "",
        amount: 2,
        decimals: 0,
        assetName: "",
        unitName: ""
      }
    }
  }

  myAlgoWallet = Pipeline.init();

  handleCreator = (e) => {
    this.setState(prevState => ({
      myAddress: e,
      asaData: {
        ...prevState.asaData,
        creator: e,
      }
    }))
  } 

  handleNote = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      asaData: {
        ...prevState.asaData,
        note: e.target.value,
      }
    }))
  } 

  handleAmount = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      asaData: {
        ...prevState.asaData,
        amount: Number(e.target.value),
      }
    }))
  } 

  handleDecimals = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      asaData: {
        ...prevState.asaData,
        decimals: Number(e.target.value),
      }
    }))
  } 

  handleAssetName = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      asaData: {
        ...prevState.asaData,
        assetName: e.target.value,
      }
    }))
  } 

  handleUnitName = (e) => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      asaData: {
        ...prevState.asaData,
        unitName: e.target.value,
      }
    }))
  } 

  render() {

    return (
      <div className="App">
        <h1>Test Minter</h1>
        <Box className="content">
          <SwitchNet />
          <br />
          <AlgoButton wallet={this.myAlgoWallet} context={this} onChange={this.handleCreator} />
          <br />
          {this.state.myAddress.length === 58 ? "Connected!" : ""}
          <Box className="form-container">
            <Form>
              <Input required className="input" placeholder="Note" onChange={this.handleNote} />
              <Input required className="input" type="number" placeholder="Amount" onChange={this.handleAmount} />
              <Input required className="input" type="number" placeholder="Decimals" onChange={this.handleDecimals} />
              <Input required className="input" placeholder="Asset Name" onChange={this.handleAssetName} />
              <Input required className="input" placeholder="Unit Name" onChange={this.handleUnitName} />
            </Form>
            <AlgoMint context={this} asaObject={this.state.asaData} returnTo={"asaIndex"}/>
          </Box>
        </Box>
      </div>
    )
  }
}
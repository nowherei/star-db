import React, {Component} from 'react';

import Header from "../header";
import RandomPlanet from "../random-planet";

import './app.css';
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-idicator/error-indicator";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header/>

          <Row
            left={personDetails}
            right={starshipDetails} />

          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}>

            {(i) => (
              `${i.name} (${i.diameter})`
            )}

          </ItemList>

          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={({name, model}) => `${name} (${model})`}>

            {(i) => (
              `${i.name} (${i.model})`
            )}

          </ItemList>

          {/*{planet}
          <div className="button-row">
            <button
              className="toggle-planet btn btn-warning btn-tg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PeoplePage />

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}>

                {(i) => (
                  `${i.name} (${i.diameter})`
                )}

              </ItemList>
            </div>
            <div className="col-md-6">
              <ItemDetails personId={this.state.selectedPerson} />
            </div>
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={({name, model}) => `${name} (${model})`}>

                {(i) => (
                  `${i.name} (${i.model})`
                )}

              </ItemList>
            </div>
            <div className="col-md-6">
              <ItemDetails personId={this.state.selectedPerson} />
            </div>
          </div>*/}

        </div>
      </ErrorBoundry>
    );
  }
};
import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderBirthYearAndName = ({name, birthYear}) => <span>{name} ({birthYear})</span>;

const renderDiameterAndName = ({name, diameter}) => <span>{name} ({diameter})</span>;

const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};
const PersonList = withSwapiService(mapPersonMethodsToProps)(
                      withData(
                        withChildFunction(renderBirthYearAndName)(
                          ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                      withData(
                        withChildFunction(renderDiameterAndName)(
                          ItemList)));
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                        withData(
                          withChildFunction(renderModelAndName)(
                            ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList
}
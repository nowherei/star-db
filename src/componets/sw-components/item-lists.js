import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService, withChildFunction, compose} from '../hoc-helpers';



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
const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withData,
                      withChildFunction(renderBirthYearAndName)
                   )(ItemList);
const PlanetList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withData,
                      withChildFunction(renderDiameterAndName)
                   )(ItemList);
const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderModelAndName)
                     )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}
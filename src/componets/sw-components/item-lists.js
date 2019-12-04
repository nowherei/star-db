import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderBirthYearAndName = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;
const renderDiameterAndName = ({ name, diameter }) => <span>{name} ({diameter})</span>;
const renderModelAndName = ({ model, name  }) => <span>{name} ({model})</span>;

const PersonList = withData(
                      withChildFunction(ItemList, renderBirthYearAndName),
                      getAllPeople);
const PlanetList = withData(
                      withChildFunction(ItemList, renderDiameterAndName),
                      getAllPlanets);
const StarshipList = withData(
                      withChildFunction(ItemList, renderModelAndName),
                      getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
}
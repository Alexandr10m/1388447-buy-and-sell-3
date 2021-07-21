'use strict';

const {Router} = require(`express`);
const {getAPI} = require(`../api`);

const mainRoutes = new Router();
const api = getAPI();

mainRoutes.get(`/`, async (req, res) => {
  const offers = await api.getOffers();
  res.render(`main`, {offers});
});
mainRoutes.get(`/register`, (req, res) => res.render(`sign-up`));
mainRoutes.get(`/login`, (req, res) => res.render(`login`));
mainRoutes.get(`/search`, async (req, res) => {
  try {
    const {search} = req.query;
    const results = await api.search(search);
    res.render(`search-result`, {results});
  } catch (err) {
    res.render(`search-result`, {results: []});
  }

});

module.exports = mainRoutes;

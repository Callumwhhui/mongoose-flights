
const Flight = require('../models/flight')
const express = require('express');
const router = express.Router()

module.exports = {
    new: newFlight,
    create,
    index,
}


async function index(req, res) {
    try {
      const flights = await Flight.find(); // Fetch flights from the database
      console.info(flights)
      res.render('flights/index', { flights });
    } catch (err) {
      // Handle error
      res.render('error');
    }
  }

function newFlight(req,res) {
    res.render('flights/new', {errorMsg: ''})
}

async function create (req,res) {
    req.body.airline = req.body.airline.trim();
    try {
        await Flight.create(req.body);
        res.redirect('flights');
    }catch (err) {
        res.render('flights');
    }
}


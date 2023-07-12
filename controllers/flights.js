
const Flight = require('../models/flight')
const express = require('express');
const router = express.Router()
const Ticket = require('../models/ticket');
// const tickets = require('./tickets');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
}


async function index(req, res) {
    try {
      const flights = await Flight.find(); // Fetch flights from the database
      res.render('flights/index', { flights });
    } catch (err) {
      // Handle error
      res.render('error');
    }
  }

  async function show(req,res) {
    const flights = await Flight.findById(req.params.id);
    // const tickets = await Ticket.find({flight: flight._id})
    res.render('flights/show', { flight: flights })
  }

function newFlight(req,res) {
    res.render('flights/new', {errorMsg: ''})
}

async function create (req,res) {
    console.log(req.body)
    req.body.airline = req.body.airline.trim();
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    }catch (err) {
        res.render('flights');
    }
}


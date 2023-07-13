const  Ticket = require('../models/ticket')
const Flight = require('../models/flight')
module.exports = {
    new: newTicket,
    create,
}

async function newTicket(req,res) {
    const flight = await Flight.findById(req.params.id);

    res.render('tickets/new', {title: 'Flight', flight})
}



async function create (req,res) {
    const flight = await Flight.findById(req.params.id);
    req.body.flight = flight._id;
    // console.log()
    try{
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/flights/${flight._id}`)
}

  
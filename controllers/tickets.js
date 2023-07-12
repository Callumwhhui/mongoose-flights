const  Ticket = require('../models/ticket')
const Flight = require('../models/flight')
module.exports = {
    new: newTicket,
    create,
}

async function newTicket(req,res) {
    const tickets = await Ticket.find({}).sort('price')
    res.render('tickets/new', {title: 'newTicket', tickets})
}

async function create (req,res) {
    const ticket = await Ticket.findById(req.params.id);
    ticket.body.push(req.body);

    try{
        await ticket.save();
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/flights/${flight._id}`)
}


// async function create(req, res) {
//     const ticket = await Ticket.findById(req.params.id);
//     ticket.body.push(req.body);
  
//     try {
//       await ticket.save();
//       res.redirect(`/flights/${ticket._id}`);
//     } catch (err) {
//       console.log(err);
//       res.render('error');
//     }
//   }
  
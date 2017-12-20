
import mongoose from 'mongoose';

//import models
import Rug from '../models/rug.server.model';

export const getRugs = (req, res) => {
    Rug.find().exec((err, rugs) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        return res.json({ 'success': true, 'message': 'Rugs fetched successfully', rugs });
    });
}

export const addRug = (req, res) => {
    const newRug = new Rug(req.body);
    newRug.save((err, rug) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        return res.json({ 'success': true, 'message': 'Rug added successfully', rug });
    })
}

export const updateRug = (req, res) => {
    Rug.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, rug) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
        }
        console.log(rug);
        return res.json({ 'success': true, 'message': 'Updated successfully', rug });
    })
}

export const getRug = (req, res) => {
    Rug.find({ _id: req.params.id }).exec((err, rug) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }
        if (rug.length) {
            return res.json({ 'success': true, 'message': 'Rug fetched by id successfully', rug });
        }
        else {
            return res.json({ 'success': false, 'message': 'Rug with the given id not found' });
        }
    })
}

export const deleteRug = (req, res) => {
    Rug.findByIdAndRemove(req.params.id, (err, rug) => {
        if (err) {
            return res.json({ 'success': false, 'message': err });
        }
        console.log(rug);
        return res.json({ 'success': true, 'message': 'Rug deleted successfully' , rug});
    })
}
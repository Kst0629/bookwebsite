import express, {Request, Response } from 'express';
const router = express.Router();


import bookModel from '../../models/Book';

router.get('/test', (req: express.Request, res: express.Response) => res.send('book route testing!'));

router.get('/', (req: express.Request, res: express.Response) => {
    bookModel.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found'})); 

});

router.get('/:id', (req: express.Request, res: express.Response) => {
    bookModel.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'no Book found'}));
});

router.post('/', (req: express.Request, res: express.Response) => {
    bookModel.create(req.body)
    .then(book => res.json({msg: 'Book added successfully'}))
    .catch(err => res.status(404).json({error: 'Unable to add this book'}));    
});

router.put('/:id', (req: express.Request, res: express.Response) => {
    bookModel.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: 'Updated Succesfully'}))
    .catch(err => res.status(404).json({error: 'Unable to update the Database'}));
});

router.delete('/:id', (req: express.Request, res: express.Response) => {
    bookModel.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({msg: 'Book entry deleted'}))
    .catch(err => res.status(404).json({error: 'No such Book'}));  
});

export default router;
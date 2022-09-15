const accommodationControllers = require('./accommodations.controllers')

const getAll = (req, res) => {
    accommodationControllers.getAllAccommodations()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getById = (req, res) => {
    const id = req.params.id
    accommodationControllers.getAccommodationById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const createAcc = (req, res) => {
    const data = req.body
    const hostId = req.params.id
    const placeId = req.params.placeId

    accommodationControllers.createAccommodation(data, hostId, placeId)
    .then((response) => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(400).json({message: err.message, stack: err.stack})
      }) 
  }


  const editAcc = (req, res) => {
    const accommodationId = req.params.id
    const data = req.body
    const id = req.params.id
    
    accommodationControllers.updateAccommodations(id, accommodationId, data)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
      }
    

    const removeAcc = (req, res) => {
        const id = req.params.id;
        accommodationControllers.deleteAccommodations(id)
          .then((response) => {
            if(response){
              res.status(204).json()
            }else{
              res.status(400).json({
                message: 'Invalid ID'
              })
            }
          })
      };



module.exports = {
    getAll,
    getById,
    createAcc,
    editAcc,
    removeAcc
}

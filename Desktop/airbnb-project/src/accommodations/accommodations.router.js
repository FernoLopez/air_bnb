const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middleware/role.middleware')
const accommodationServices = require('./accommodations.http')
const reservationServices = require('../reservations/reservations.http')
require('../middleware/auth.middleware')(passport)

router.route('/')
    .get(accommodationServices.getAll)
    .post(accommodationServices.createAcc)

    router.route('/:id')
    .get(accommodationServices.getById)
    .put(passport.authenticate('jwt', {session: false}),accommodationServices.editAcc)
    .delete(passport.authenticate('jwt', {session: false}), accommodationServices.removeAcc)

    router.route('/:id/make-reservation')
    .post( passport.authenticate('jwt', {session: false}), reservationServices.postReservation )


module.exports= {
    router
}
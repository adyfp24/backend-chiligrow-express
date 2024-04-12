const { body, validationResult } = require('express-validator');
const userValidationRules = () => {
  return [
    body('username').notEmpty().withMessage('Username tidak boleh kosong'),
    body('email').notEmpty().isEmail().withMessage('Email tidak valid'),
    body('password').notEmpty().isLength({ min: 1 }).withMessage('Password minimal 6 karakter'),
    body('alamat').notEmpty().withMessage('Alamat tidak boleh kosong'),
    body('no_hp').notEmpty().withMessage('Nomor HP tidak boleh kosong'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}
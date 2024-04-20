const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: error.details[0].message
            });
        }
    };
};

module.exports = validate;

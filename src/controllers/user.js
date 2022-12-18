const { user } = require('../../models');

exports.addUsers = async (req, res) => {
    try {
        const data = req.body;

        const createdData = await user.create(data);

        res.send({
            status: 'success',
            message: 'Insert data user with ORM finished',
            data: createdData,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: 'failed',
            message: 'Server Error',
        });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await user.findAll({
            attributes: {
                exclude: ["password", "createdAt", "updatedAt"]
            },
        });

        res.send({
            status: 'Success',
            message: 'Find All users Success',
            data: {
                users,
            },
        });
        
    } catch (error) {
        console.log(error);
        res.send({
            status: 'Failed',
            message: 'Server Error'
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userId = await user.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ["passowrd", "createdAt", "updatedAt"]
            },
        });

        if(!userId) {
            return res.send({
                error: {
                    message: `Data user with ID: ${id} not found`
                },
            });
        }

        res.send({
            status: 'Success',
            message: `This Data user with ID: ${id}`,
            data: {
                userId,
            },
        });
        
    } catch (error) {
        console.log(error);

        res.send({
            status: 'Failed',
            message: 'Server Error',
        });
    }
};

exports.updatedUser = async (req, res) => {
    try {
        const {id} = req.params;
        const newData = req.body;

        await user.update(newData, {
            where: {
                id,
            },
        });

        res.send({
            status: "Success",
            message: `Updated User with ID: ${id} finished`,
            data: {
                newData,
            }
        });

    } catch (error) {
        console.log(error);
        res.send({
            status: 'Failed',
            message: 'Server Error',
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const oldData = await user.destroy({
            where: {
                id,
            },
        });

        if(!oldData) {
            return res.send({
                error: {
                    message: `User Data with ID: ${id} Failed to Delete because Data was not found`
                }
            });
        };

        res.send({
            status: "Success",
            message: `Delete User with ID: ${id} Success`,
            data: {
                oldData,
            },
        });

    } catch (error) {
        console.log(error);
        res.send({
            status: 'Failed',
            message: 'Server Error'
        });
    }
};
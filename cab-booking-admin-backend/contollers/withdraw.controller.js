import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema({}, { strict: false });
const WithdrawModel = mongoose.model('withdraw', withdrawSchema, 'withdraw');


export const getAllWithdrals = async (req, res) => {
    try {
        const customers = await WithdrawModel.find({});
        return res.status(200).json({
            success: true,
            message: 'withdraw fetched successfully',
            data: customers,
        });

    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch withdraw data' });
    }

};

// export const getWithdrawCount = async (req, res) => {
//     try {
//         const CustomerCount = await WithdrawModel.countDocuments({});

//         return res.status(200).json({
//             success: true,
//             message: 'Customer count fetched successfully',
//             count: CustomerCount,
//         });
//     } catch (err) {
//         return res.status(500).json({ error: 'Failed to fetch Customer count' });
//     }
// };
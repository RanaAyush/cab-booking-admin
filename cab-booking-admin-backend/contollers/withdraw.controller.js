import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema({}, { strict: false });
const WithdrawModel = mongoose.model('earning', withdrawSchema, 'earning');


export const getAllWithdrawals = async (req, res) => {
    try {
        // Fetch entries with request > 0
        const request = await WithdrawModel.find({ request: { $gt: 0 } });
        return res.status(200).json({
            success: true,
            message: 'Withdrawals fetched successfully',
            data: request,
        });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch withdrawal data' });
    }
};
export const updateRequest = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from params
        const { balance, request } = req.body; // Extract data from request body

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Driver ID is required.",
            });
        }

        if (balance == null || request == null) {
            return res.status(400).json({
                success: false,
                message: "Both balance and request are required.",
            });
        }

        const updates = {
            balance: balance - request,
            request: 0,
            updatedAt: new Date(),
        };

        const updatedRequest = await WithdrawModel.findOneAndUpdate(
            { phonenumber: id }, // Filter by phone number
            { $set: updates },   // Apply updates
            { new: true }        // Return updated document
        );

        if (!updatedRequest) {
            return res.status(404).json({
                success: false,
                message: "No record found for the given phone number.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Withdrawal request updated successfully.",
            data: updatedRequest,
        });
    } catch (err) {
        console.error("Error updating withdrawal request:", err);
        return res.status(500).json({ 
            success: false, 
            message: "Failed to update withdrawal data." 
        });
    }
};


export const getWithdrawCount = async (req, res) => {
    try {
        const count = await WithdrawModel.countDocuments({ request: { $gt: 0 } });

        return res.status(200).json({
            success: true,
            message: 'Customer count fetched successfully',
            count: count,
        });
    } catch (err) {
        return res.status(500).json({ error: 'Failed to fetch Customer count' });
    }
};
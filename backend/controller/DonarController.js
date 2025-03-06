const DonarModel = require('../models/DonaterModel')
const GetData = (req, res) => {
    return res.status(200).json({ ok: "working" });
}
const addDonar = async (req, res) => {
    try {
        const newDonar = new DonarModel(req.body)
        await newDonar.save();
        res.status(201).json({ message: "Donar added successfully!", Donar: newDonar });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const NearByDonar = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        // console.log(latitude, longitude)
        if (!latitude || !longitude) {
            return res.status(400).json({ message: "Missing required parameters" });
        }

        const donors = await DonarModel.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: [parseFloat(longitude), parseFloat(latitude)] },
                    distanceField: "distance",
                    maxDistance: 10000,
                    spherical: true,
                    key: "location",
                },
            },
        ]);
        res.json(donors);
    } catch (error) {
        res.status(500).json({ message: "Error finding donors", error });
    }
}

module.exports = { GetData, addDonar, NearByDonar }
const users = require("../../models/mongo/users.js");

exports.insert = async (req, res, next) => {
    let data = new users({
        email: "Worachit8112@gmail.com",
        name: "worachit",
        lastname: "Toto"
    });

    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
}
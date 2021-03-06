const Student = require("../models/StudentModel.js");

exports.findAll = (req, res) => {
    Student.getAll((err, data) => {
        if (err)
            res.status(500).send({
                massage: err.massage || "Some error occurred while retrieving student"
            });
        else res.send(data);
    });
};

exports.limit = (req, res) => {
    Student.getLimit(req.params.limit, (err, data) => {
        if (err)
            res.status(500).send({
                massage: errr.massage || "Some error occurred while retrieving student",
            });
        else res.send(data);
    });
};

exports.findById = (req, res) => {
    Student.findById(req.params.studentId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Student with id ${req.params.studentId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Student with id " + req.params.studentId
                });
            }
        } else res.send(data);
    });
};

exports.create = (req, res) => {
    const student = new Student({
        name: req.query.name,
        age: req.query.age,
        sex: req.query.sex,
        address: req.query.address,
        classs: req.query.classs,
        score: req.query.score
    });

    // Save Student in the database
    Student.create(student, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Student."
            });
        else res.send({ message: `Student was create successfully!` });
    });
};

//xoá sinh viên theo id
exports.deleteById = (req, res) => {
    Student.remove(req.params.studentId, (err, data) => 
    {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    massage: `Not found Student with id ${req.params.studentId}`,
                    data: data
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Student with id " + req.params.studentId,
                    data: data
                });
            };
        } else res.send({ message: `Student was deleted successfully!` , data: data});
    });
};

//update sinh vien theo id

exports.update = (req, res) => {
    // Validate Request
    // if (!req.body) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    // }

    Student.updateById(
        req.params.studentId,
        new Student(req.query),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.studentId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Customer with id " + req.params.studentId
                    });
                }
            } else res.send(data);
        }
    );
};

exports.search = (req,res) => {
    Student.getSearch(req.query.search,(err,data) => {
        if (err)
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
        else res.send(data);
    })
}
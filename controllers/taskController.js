const taskModel = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const { tasktitle, description, taskstatus } = req.body;
    const image = req.files[0].path;

    const checkTask = await taskModel.findOne({
      where: {
        tasktitle: tasktitle,
      },
    });
    if (!checkTask) {
      await taskModel.create({
        tasktitle: tasktitle,
        description: description,
        image: image,
        taskstatus: taskstatus,
      });
      res.status(200).json({ message: "New Task created ", status: 1 });
    } else {
      res
        .status(200)
        .json({ message: "This task is already created", status: 1 });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const findTask = async (req, res) => {
  try {
    const { taskid } = req.body;
    await taskModel
      .findOne({
        where: {
          taskid: taskid,
        },
      })
      .then((result) => {
        if (result) {
          res.status(200).json({ status: 1, data: result });
        } else {
          res.status(200).json({ message: "task not found", status: 1 });
        }
      });
  } catch (err) {
    res.status(400).json({message:"Something went wrong", error:err})
  }
};

const updateTaskdetails = async (req, res) => {
  try {
    const { taskid, tasktitle, description, image, taskstatus } = req.body;

    const checktask = await taskModel.findOne({
      where: { taskid: taskid },
    });

    if (checktask) {
      const data = await taskModel.update(
        {
          tasktitle: tasktitle,
          description: description,
          image: image,
          taskstatus: taskstatus,
        },
        {
          where: { taskid: taskid },
        }
      );
      res.status(200).json({ message: "Task updated", status: 1, data: data });
    } else {
      res.status(200).json({ message: "Task not found", status: 1 });
    }
  } catch (err) {
    res.status(400).json({message:"Something went wrong", error:err})
  }
};

const deleteTask = async (req, res) => {
  try {
    const { taskid } = req.body;

    const checktask = await taskModel.findOne({
      where: { taskid: taskid },
    });
    if (checktask) {
      const data = await taskModel.destroy({ where: { taskid: taskid } });
      res.status(200).json({ message: "Task deleted", status: 1, data: data });
    } else {
      res.status(200).json({ message: "Task not found ", status: 1 });
    }
  } catch (err) {
    res.send({ message: "Something went wrong", error: err });
  }
};

module.exports = {
  createTask,
  updateTaskdetails,
  findTask,
  deleteTask,
};

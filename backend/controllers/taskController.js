import Task from "../models/Task.js";

// note: req.user is coming from protect middleware

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Get task error: ", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      res.status(400).json({ message: "Task title is required" });
      return;
    }

    const task = await Task.create({
      user: req.user.id,
      title,
      description,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Create task error: ", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    if (task.user.toString() !== req.user.id) {
      res.status(403).json({ message: "Not authorized" });
      return;
    }

    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updateTask);
  } catch (error) {
    console.error("Update task error: ", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    if (task.user.toString() !== req.user.id) {
      res.status(403).json({ message: "Not authorized" });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.error("Delete task error: ", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const toggleStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    if (task.user.toString() !== req.user.id) {
      res.status(403).json({ message: "Not authorized" });
      return;
    }

    task.status = task.status === "pending" ? "completed" : "pending";
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    console.error("Toggle status error: ", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// desc     Get all bootcamps
// Routes   /api/v1/bootcamps
// access   public
exports.getAllBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Get all bootcamps",
  });
};

// desc     Get one bootcamps
// route    /api/v1/bootcamps/:id
// access   public
exports.getOneBootcamp = (req, res, next) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ success: true, message: `Get one bootcamp with id: ${id}` });
};

// desc     Create new bootcamp
// route    /api/v1/bootcamps
// access   private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, message: "Create new bootcamp" });
};

// desc     Update one bootcamp
// route    /api/v1/bootcamps/:id
// access   private
exports.updateBootcamp = (req, res, next) => {
  const { id } = req.params;
  res
    .status(201)
    .json({ success: true, message: `Update one bootcamp with id: ${id}` });
};

// desc     Delete one bootcamp
// route    /api/v1/bootcamps/:id
// access   private
exports.deleteBootcamp = (req, res, next) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ success: true, message: `Delete one bootcamp with id: ${id}` });
};

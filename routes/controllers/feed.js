exports.getPosts = (req,res,next) => {
  res.status(200).json({title:'mike', Designation:'software engineer'});
};

exports.createPost = (req,res,next) => {
   title = req.body.title,
   content = req.body.Designation;
  res.status(201).json({
    message:'post created successfully',
    post:{id:new Date().toISOString,title:title,content:Designation}
  });
};
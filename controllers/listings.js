const Listing = require("../models/listing");


module.exports.index = async ( req , res ) => {
   const allListings =  await Listing.find({});
   console.log(allListings);
   res.render("listings/index.ejs", {allListings});
   
};

module.exports.renderNewForm = (req , res ) => {
  res.render("listings/new.ejs");
};

module.exports.showListing =async( req ,res) => {
    let {id}=req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{ path: "author"},}).populate("owner");
    if(!listing){
        req.flash("error", " listing you requested for does not exist!");
        res.redirect("/listings");
    }
     const location = {
    latitude: 19.0760, 
    longitude: 72.8777
  };
    res.render("listings/show.ejs", {listing , location});
};

module.exports.createListing = async (req ,res, next ) => {
   let url = req.file.path;
   let filename = req.file.filename;
   const newListing = new Listing (req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "new listing created!");
    res.redirect("/listings");  
};

module.exports.edit = async (req, res) => {
    let { id }=req.params;
    const listing = await Listing.findById(id);
      if(!listing){
        req.flash("error", " listing you requested for does not exist!");
        res.redirect("/listings");
    }
     let originalImageUrl = listing.image.url;
     originalImageUrl =  originalImageUrl.replace("/upload" , "/upload/w_250");
     res.render("listings/edit.ejs",{ listing ,originalImageUrl});
};

module.exports.update = async (req,res) => {
    let { id }=req.params;
    let listing = await Listing.findByIdAndUpdate(id ,{...req.body.listing});
     
    if( typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = {url, filename};
      await listing.save();

    }
    
    req.flash("success", " listing updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.delete = async(req ,res)=> {
    let { id }=req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success", " listing deleted!");
    res.redirect("/listings");
};
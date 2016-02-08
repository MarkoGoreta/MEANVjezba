var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!'},
    featured: {type: Boolean, required: '{PATH} is required!'},
    published: {type: Date, required: '{PATH} is required!'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Course.create({title: "Ja se rodija", featured: true, published: new Date('4/5/1991'), tags: ['MG']});
            Course.create({title: "Zaposlija se !!!!", featured: true, published: new Date('12/14/2015'), tags: ['MG']});
            Course.create({title: "Ja se rodija", featured: true, published: new Date('4/5/1991'), tags: ['MG']});
            Course.create({title: "Diplomira!!", featured: true, published: new Date('9/18/2015'), tags: ['MG']});
            Course.create({title: "Ja se rodija", featured: true, published: new Date('4/5/1991'), tags: ['MG']});
            Course.create({title: "Diplomira!!", featured: true, published: new Date('9/18/2015'), tags: ['MG']});
            Course.create({title: "Ja se rodija", featured: true, published: new Date('4/5/1991'), tags: ['MG']});
            Course.create({title: "Diplomira!!", featured: true, published: new Date('9/18/2015'), tags: ['MG']});
            Course.create({title: "Zaposlija se !!!!", featured: true, published: new Date('12/14/2015'), tags: ['MG']});
            Course.create({title: "Diplomira!!", featured: true, published: new Date('9/18/2015'), tags: ['MG']});
            Course.create({title: "Zaposlija se !!!!", featured: true, published: new Date('12/14/2015'), tags: ['MG']});
            Course.create({title: "Diplomira!!", featured: true, published: new Date('9/18/2015'), tags: ['MG']});
            Course.create({title: "Zaposlija se !!!!", featured: true, published: new Date('12/14/2015'), tags: ['MG']});
            Course.create({title: "Ja se rodija", featured: true, published: new Date('4/5/1991'), tags: ['MG']});
            Course.create({title: "Zaposlija se !!!!", featured: true, published: new Date('12/14/2015'), tags: ['MG']});
        }
    })
}

exports.createDefaultCourses = createDefaultCourses;
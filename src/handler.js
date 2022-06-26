const {nanoid} = require('nanoid');
const notes = require('./notes');

const addNotesHandler = (request,h)=>{
    const {title,tags,body} = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title,tags,body,id,createdAt,updatedAt,
    }
    notes.push(newNote);

    const isSuccess = notes.filter((note)=>note.id === id).length>0;

    if(isSuccess){
        const response = h.response({
            status : 'success',
            message : "berhasil ditambahkan",
            data : {
                notedId : id,
            },
        });

        response.code(201);
        return response;
    }
    const response = h.response({
        status : 'fail',
        message : "gagal ditambahkan",
    });
    response.code(500)
};

const getAllDataHandler = ()=>({
    status : 'success',
    data : {
        notes,
    }
});
module.exports = {addNotesHandler,getAllDataHandler}
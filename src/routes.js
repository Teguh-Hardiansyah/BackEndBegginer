const { addBookHandler, getAllBookHanlder, getBookbyIdHandler, editBookbyIdHandeler, deleteBookbyIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHanlder,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookbyIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookbyIdHandeler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookbyIdHandler,
  },
];

module.exports = routes;
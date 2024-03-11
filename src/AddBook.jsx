import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function AddBook(props) {
    const [open, SetOpen] = useState(false);
    const [book, setBook] = useState({ title: '', author: '', year: '', isbn: '', price: '' })


const handleOpen = () => {
    SetOpen(true);
}

const handleClose = () => {
    SetOpen(false);
}

const handleSave = () => {
    props.addBook(book);
    handleClose();
}

const inputChanged = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
}

return (
    <>
        <Button variant="oulined" onClick={handleOpen}>
            Add Book
        </Button>
        <Dialog open={open}>
            <DialogTitle>New Book</DialogTitle>
            <DialogContent>
                <TextField
                    name="title"
                    value={book.title}
                    onChange={inputChanged}
                    margin="dense"
                    label="Title"
                    fullWidth
                />
                <br />
                <TextField
                    name="author"
                    value={book.author}
                    onChange={inputChanged}
                    margin="dense"
                    label="Author"
                    fullWidth
                />
                <br />
                <TextField
                    name="year"
                    value={book.year}
                    onChange={inputChanged}
                    margin="dense"
                    label="Year"
                    fullWidth
                />
                <br />
                <TextField
                    name="isbn"
                    value={book.isbn}
                    onChange={inputChanged}
                    margin="dense"
                    label="ISBN"
                    fullWidth
                />
                <br />
                <TextField
                    name="price"
                    value={book.price}
                    onChange={inputChanged}
                    margin="dense"
                    label="Price"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleClose}>Cancel</Button>
                <Button color="primary" onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    </>
);
}

export default AddBook;
import Alert from '@mui/material/Alert';
import '../css/style.css'

const Notification = () => {
    return (
        <Alert className="notification" variant="filled" severity="success">
            Thank you, we recieved you Request
        </Alert>
    )
}

export default Notification
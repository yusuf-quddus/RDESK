import Alert from '@mui/material/Alert';
import '../css/style.css'

const Notification = ({message, success}) => {
    if (success) {
        return (
            <Alert className="notification" variant="filled" severity="success">
                {message}
            </Alert>
        )
    }
    return (
        <Alert className="notification" variant="filled" severity="error">
            {message}
        </Alert>
    )
}

export default Notification
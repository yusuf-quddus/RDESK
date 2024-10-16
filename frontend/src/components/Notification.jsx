import Alert from '@mui/material/Alert';
import '../css/style.css'

const Notification = () => {
    return (
        <Alert className="notification" variant="filled" severity="success">
            This is a filled success Alert.
        </Alert>
    )
}

export default Notification
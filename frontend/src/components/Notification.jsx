import Alert from '@mui/material/Alert';
import '../css/style.css'

/**
 * Notification component that notifies user success or failure. 
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.message - The text displayed in notification.
 * @param {boolean} props.success - Determines if success or error notification.
 * @return {JSX.Element} - The notification component.
 */
const Notification = ({message, success}) => {
    if (success) {
        return (
            <Alert className="notification" variant="filled" severity="success">
                {message}
            </Alert>
        )
    } else {
        return (
            <Alert className="notification" variant="filled" severity="error">
                {message}
            </Alert>
        )
    }
}

export default Notification
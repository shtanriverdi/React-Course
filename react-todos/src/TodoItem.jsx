import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DeleteOutline } from '@mui/icons-material';

export default function TodoItem({ item, onDelete, onEdit, onToggle }) {
    const labelId = item.id;
    const listItemStyle = {
        width: '100%',
        maxWidth: 460,
        bgcolor: item.backgroundColor,
        m: 1,
        borderRadius: 5
    };

    return (
        <ListItem
            sx={listItemStyle}
            key={item.id}
            secondaryAction={
                <IconButton
                    onClick={() => onDelete(item.id)}
                    edge="end"
                    aria-label="comments"
                >
                    <DeleteOutline />
                </IconButton>
            }
            disablePadding
        >

            <ListItemButton onClick={() => onEdit(item.id)} role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        onChange={() => onToggle(item.id)}
                        edge="start"
                        checked={item.done}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>

                <Typography id={labelId} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    {item.title}
                    <ListItemText id={labelId} primary={`Line item ${item.description}`} />
                </Typography>
            </ListItemButton>
        </ListItem>
    );
}

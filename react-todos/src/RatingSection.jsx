import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import PropTypes from 'prop-types';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <CircleIcon style={{width: 17}} color="success" />,
    label: 'Easy',
  },
  2: {
    icon: <CircleIcon style={{width: 17}} color="warning" />,
    label: 'Medium',
  },
  3: {
    icon: <CircleIcon style={{width: 17}} color="error" />,
    label: 'Hard',
  }
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RatingSection({ priority, onRatingChange }) {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={priority}
      max={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
      onClick={(value) => onRatingChange(value)}
    />
  );
}
